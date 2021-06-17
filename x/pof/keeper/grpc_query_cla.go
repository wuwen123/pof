package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/user/pof/x/pof/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ClaAll(c context.Context, req *types.QueryAllClaRequest) (*types.QueryAllClaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var clas []*types.Cla
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	claStore := prefix.NewStore(store, types.KeyPrefix(types.ClaKey))

	pageRes, err := query.Paginate(claStore, req.Pagination, func(key []byte, value []byte) error {
		var cla types.Cla
		if err := k.cdc.UnmarshalBinaryBare(value, &cla); err != nil {
			return err
		}

		clas = append(clas, &cla)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllClaResponse{Cla: clas, Pagination: pageRes}, nil
}

func (k Keeper) Cla(c context.Context, req *types.QueryGetClaRequest) (*types.QueryGetClaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cla types.Cla
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasCla(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetClaIDBytes(req.Id)), &cla)

	return &types.QueryGetClaResponse{Cla: &cla}, nil
}

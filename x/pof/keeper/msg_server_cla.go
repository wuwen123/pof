package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/user/pof/x/pof/types"
)

func (k msgServer) CreateCla(goCtx context.Context, msg *types.MsgCreateCla) (*types.MsgCreateClaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cla = types.Cla{
		Creator: msg.Creator,
		Proof:   msg.Proof,
	}

	id := k.AppendCla(
		ctx,
		cla,
	)

	return &types.MsgCreateClaResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCla(goCtx context.Context, msg *types.MsgUpdateCla) (*types.MsgUpdateClaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cla = types.Cla{
		Creator: msg.Creator,
		Id:      msg.Id,
		Proof:   msg.Proof,
	}

	// Checks that the element exists
	if !k.HasCla(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetClaOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCla(ctx, cla)

	return &types.MsgUpdateClaResponse{}, nil
}

func (k msgServer) DeleteCla(goCtx context.Context, msg *types.MsgDeleteCla) (*types.MsgDeleteClaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCla(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetClaOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCla(ctx, msg.Id)

	return &types.MsgDeleteClaResponse{}, nil
}

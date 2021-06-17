package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/user/pof/x/pof/types"
	"strconv"
)

// GetClaCount get the total number of cla
func (k Keeper) GetClaCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaCountKey))
	byteKey := types.KeyPrefix(types.ClaCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetClaCount set the total number of cla
func (k Keeper) SetClaCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaCountKey))
	byteKey := types.KeyPrefix(types.ClaCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCla appends a cla in the store with a new id and update the count
func (k Keeper) AppendCla(
	ctx sdk.Context,
	cla types.Cla,
) uint64 {
	// Create the cla
	count := k.GetClaCount(ctx)

	// Set the ID of the appended value
	cla.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&cla)
	store.Set(GetClaIDBytes(cla.Id), appendedValue)

	// Update cla count
	k.SetClaCount(ctx, count+1)

	return count
}

// SetCla set a specific cla in the store
func (k Keeper) SetCla(ctx sdk.Context, cla types.Cla) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	b := k.cdc.MustMarshalBinaryBare(&cla)
	store.Set(GetClaIDBytes(cla.Id), b)
}

// GetCla returns a cla from its id
func (k Keeper) GetCla(ctx sdk.Context, id uint64) types.Cla {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	var cla types.Cla
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetClaIDBytes(id)), &cla)
	return cla
}

// HasCla checks if the cla exists in the store
func (k Keeper) HasCla(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	return store.Has(GetClaIDBytes(id))
}

// GetClaOwner returns the creator of the cla
func (k Keeper) GetClaOwner(ctx sdk.Context, id uint64) string {
	return k.GetCla(ctx, id).Creator
}

// RemoveCla removes a cla from the store
func (k Keeper) RemoveCla(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	store.Delete(GetClaIDBytes(id))
}

// GetAllCla returns all cla
func (k Keeper) GetAllCla(ctx sdk.Context) (list []types.Cla) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ClaKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Cla
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetClaIDBytes returns the byte representation of the ID
func GetClaIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetClaIDFromBytes returns ID in uint64 format from a byte array
func GetClaIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

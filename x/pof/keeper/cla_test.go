package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/user/pof/x/pof/types"
)

func createNCla(keeper *Keeper, ctx sdk.Context, n int) []types.Cla {
	items := make([]types.Cla, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendCla(ctx, items[i])
	}
	return items
}

func TestClaGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCla(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetCla(ctx, item.Id))
	}
}

func TestClaExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCla(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasCla(ctx, item.Id))
	}
}

func TestClaRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCla(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCla(ctx, item.Id)
		assert.False(t, keeper.HasCla(ctx, item.Id))
	}
}

func TestClaGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCla(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCla(ctx))
}

func TestClaCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCla(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetClaCount(ctx))
}

package pof

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/user/pof/x/pof/keeper"
	"github.com/user/pof/x/pof/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the cla
	for _, elem := range genState.ClaList {
		k.SetCla(ctx, *elem)
	}

	// Set cla count
	k.SetClaCount(ctx, genState.ClaCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all cla
	claList := k.GetAllCla(ctx)
	for _, elem := range claList {
		elem := elem
		genesis.ClaList = append(genesis.ClaList, &elem)
	}

	// Set the current count
	genesis.ClaCount = k.GetClaCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}

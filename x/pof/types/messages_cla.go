package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCla{}

func NewMsgCreateCla(creator string, proof string) *MsgCreateCla {
	return &MsgCreateCla{
		Creator: creator,
		Proof:   proof,
	}
}

func (msg *MsgCreateCla) Route() string {
	return RouterKey
}

func (msg *MsgCreateCla) Type() string {
	return "CreateCla"
}

func (msg *MsgCreateCla) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCla) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCla) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCla{}

func NewMsgUpdateCla(creator string, id uint64, proof string) *MsgUpdateCla {
	return &MsgUpdateCla{
		Id:      id,
		Creator: creator,
		Proof:   proof,
	}
}

func (msg *MsgUpdateCla) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCla) Type() string {
	return "UpdateCla"
}

func (msg *MsgUpdateCla) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCla) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCla) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCla{}

func NewMsgDeleteCla(creator string, id uint64) *MsgDeleteCla {
	return &MsgDeleteCla{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCla) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCla) Type() string {
	return "DeleteCla"
}

func (msg *MsgDeleteCla) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCla) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCla) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

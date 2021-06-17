// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCla } from "./types/pof/tx";
import { MsgUpdateCla } from "./types/pof/tx";
import { MsgCreateCla } from "./types/pof/tx";
const types = [
    ["/user.pof.pof.MsgDeleteCla", MsgDeleteCla],
    ["/user.pof.pof.MsgUpdateCla", MsgUpdateCla],
    ["/user.pof.pof.MsgCreateCla", MsgCreateCla],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteCla: (data) => ({ typeUrl: "/user.pof.pof.MsgDeleteCla", value: data }),
        msgUpdateCla: (data) => ({ typeUrl: "/user.pof.pof.MsgUpdateCla", value: data }),
        msgCreateCla: (data) => ({ typeUrl: "/user.pof.pof.MsgCreateCla", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

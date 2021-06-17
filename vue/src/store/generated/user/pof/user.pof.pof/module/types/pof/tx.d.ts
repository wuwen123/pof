import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "user.pof.pof";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCla {
    creator: string;
    proof: string;
}
export interface MsgCreateClaResponse {
    id: number;
}
export interface MsgUpdateCla {
    creator: string;
    id: number;
    proof: string;
}
export interface MsgUpdateClaResponse {
}
export interface MsgDeleteCla {
    creator: string;
    id: number;
}
export interface MsgDeleteClaResponse {
}
export declare const MsgCreateCla: {
    encode(message: MsgCreateCla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCla;
    fromJSON(object: any): MsgCreateCla;
    toJSON(message: MsgCreateCla): unknown;
    fromPartial(object: DeepPartial<MsgCreateCla>): MsgCreateCla;
};
export declare const MsgCreateClaResponse: {
    encode(message: MsgCreateClaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateClaResponse;
    fromJSON(object: any): MsgCreateClaResponse;
    toJSON(message: MsgCreateClaResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateClaResponse>): MsgCreateClaResponse;
};
export declare const MsgUpdateCla: {
    encode(message: MsgUpdateCla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCla;
    fromJSON(object: any): MsgUpdateCla;
    toJSON(message: MsgUpdateCla): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCla>): MsgUpdateCla;
};
export declare const MsgUpdateClaResponse: {
    encode(_: MsgUpdateClaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateClaResponse;
    fromJSON(_: any): MsgUpdateClaResponse;
    toJSON(_: MsgUpdateClaResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClaResponse>): MsgUpdateClaResponse;
};
export declare const MsgDeleteCla: {
    encode(message: MsgDeleteCla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCla;
    fromJSON(object: any): MsgDeleteCla;
    toJSON(message: MsgDeleteCla): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCla>): MsgDeleteCla;
};
export declare const MsgDeleteClaResponse: {
    encode(_: MsgDeleteClaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteClaResponse;
    fromJSON(_: any): MsgDeleteClaResponse;
    toJSON(_: MsgDeleteClaResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteClaResponse>): MsgDeleteClaResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCla(request: MsgCreateCla): Promise<MsgCreateClaResponse>;
    UpdateCla(request: MsgUpdateCla): Promise<MsgUpdateClaResponse>;
    DeleteCla(request: MsgDeleteCla): Promise<MsgDeleteClaResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCla(request: MsgCreateCla): Promise<MsgCreateClaResponse>;
    UpdateCla(request: MsgUpdateCla): Promise<MsgUpdateClaResponse>;
    DeleteCla(request: MsgDeleteCla): Promise<MsgDeleteClaResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "user.pof.pof";
export interface Cla {
    creator: string;
    id: number;
    proof: string;
}
export declare const Cla: {
    encode(message: Cla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Cla;
    fromJSON(object: any): Cla;
    toJSON(message: Cla): unknown;
    fromPartial(object: DeepPartial<Cla>): Cla;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

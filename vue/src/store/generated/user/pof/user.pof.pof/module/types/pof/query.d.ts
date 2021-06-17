import { Reader, Writer } from 'protobufjs/minimal';
import { Cla } from '../pof/cla';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "user.pof.pof";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetClaRequest {
    id: number;
}
export interface QueryGetClaResponse {
    Cla: Cla | undefined;
}
export interface QueryAllClaRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllClaResponse {
    Cla: Cla[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetClaRequest: {
    encode(message: QueryGetClaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClaRequest;
    fromJSON(object: any): QueryGetClaRequest;
    toJSON(message: QueryGetClaRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetClaRequest>): QueryGetClaRequest;
};
export declare const QueryGetClaResponse: {
    encode(message: QueryGetClaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetClaResponse;
    fromJSON(object: any): QueryGetClaResponse;
    toJSON(message: QueryGetClaResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetClaResponse>): QueryGetClaResponse;
};
export declare const QueryAllClaRequest: {
    encode(message: QueryAllClaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClaRequest;
    fromJSON(object: any): QueryAllClaRequest;
    toJSON(message: QueryAllClaRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllClaRequest>): QueryAllClaRequest;
};
export declare const QueryAllClaResponse: {
    encode(message: QueryAllClaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllClaResponse;
    fromJSON(object: any): QueryAllClaResponse;
    toJSON(message: QueryAllClaResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllClaResponse>): QueryAllClaResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a cla by id. */
    Cla(request: QueryGetClaRequest): Promise<QueryGetClaResponse>;
    /** Queries a list of cla items. */
    ClaAll(request: QueryAllClaRequest): Promise<QueryAllClaResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Cla(request: QueryGetClaRequest): Promise<QueryGetClaResponse>;
    ClaAll(request: QueryAllClaRequest): Promise<QueryAllClaResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

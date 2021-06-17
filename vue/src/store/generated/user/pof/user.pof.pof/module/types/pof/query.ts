/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Cla } from '../pof/cla'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'user.pof.pof'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetClaRequest {
  id: number
}

export interface QueryGetClaResponse {
  Cla: Cla | undefined
}

export interface QueryAllClaRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllClaResponse {
  Cla: Cla[]
  pagination: PageResponse | undefined
}

const baseQueryGetClaRequest: object = { id: 0 }

export const QueryGetClaRequest = {
  encode(message: QueryGetClaRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetClaRequest } as QueryGetClaRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetClaRequest {
    const message = { ...baseQueryGetClaRequest } as QueryGetClaRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetClaRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClaRequest>): QueryGetClaRequest {
    const message = { ...baseQueryGetClaRequest } as QueryGetClaRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetClaResponse: object = {}

export const QueryGetClaResponse = {
  encode(message: QueryGetClaResponse, writer: Writer = Writer.create()): Writer {
    if (message.Cla !== undefined) {
      Cla.encode(message.Cla, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetClaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetClaResponse } as QueryGetClaResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cla = Cla.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetClaResponse {
    const message = { ...baseQueryGetClaResponse } as QueryGetClaResponse
    if (object.Cla !== undefined && object.Cla !== null) {
      message.Cla = Cla.fromJSON(object.Cla)
    } else {
      message.Cla = undefined
    }
    return message
  },

  toJSON(message: QueryGetClaResponse): unknown {
    const obj: any = {}
    message.Cla !== undefined && (obj.Cla = message.Cla ? Cla.toJSON(message.Cla) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetClaResponse>): QueryGetClaResponse {
    const message = { ...baseQueryGetClaResponse } as QueryGetClaResponse
    if (object.Cla !== undefined && object.Cla !== null) {
      message.Cla = Cla.fromPartial(object.Cla)
    } else {
      message.Cla = undefined
    }
    return message
  }
}

const baseQueryAllClaRequest: object = {}

export const QueryAllClaRequest = {
  encode(message: QueryAllClaRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllClaRequest } as QueryAllClaRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllClaRequest {
    const message = { ...baseQueryAllClaRequest } as QueryAllClaRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllClaRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllClaRequest>): QueryAllClaRequest {
    const message = { ...baseQueryAllClaRequest } as QueryAllClaRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllClaResponse: object = {}

export const QueryAllClaResponse = {
  encode(message: QueryAllClaResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Cla) {
      Cla.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllClaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllClaResponse } as QueryAllClaResponse
    message.Cla = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cla.push(Cla.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllClaResponse {
    const message = { ...baseQueryAllClaResponse } as QueryAllClaResponse
    message.Cla = []
    if (object.Cla !== undefined && object.Cla !== null) {
      for (const e of object.Cla) {
        message.Cla.push(Cla.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllClaResponse): unknown {
    const obj: any = {}
    if (message.Cla) {
      obj.Cla = message.Cla.map((e) => (e ? Cla.toJSON(e) : undefined))
    } else {
      obj.Cla = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllClaResponse>): QueryAllClaResponse {
    const message = { ...baseQueryAllClaResponse } as QueryAllClaResponse
    message.Cla = []
    if (object.Cla !== undefined && object.Cla !== null) {
      for (const e of object.Cla) {
        message.Cla.push(Cla.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a cla by id. */
  Cla(request: QueryGetClaRequest): Promise<QueryGetClaResponse>
  /** Queries a list of cla items. */
  ClaAll(request: QueryAllClaRequest): Promise<QueryAllClaResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Cla(request: QueryGetClaRequest): Promise<QueryGetClaResponse> {
    const data = QueryGetClaRequest.encode(request).finish()
    const promise = this.rpc.request('user.pof.pof.Query', 'Cla', data)
    return promise.then((data) => QueryGetClaResponse.decode(new Reader(data)))
  }

  ClaAll(request: QueryAllClaRequest): Promise<QueryAllClaResponse> {
    const data = QueryAllClaRequest.encode(request).finish()
    const promise = this.rpc.request('user.pof.pof.Query', 'ClaAll', data)
    return promise.then((data) => QueryAllClaResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}

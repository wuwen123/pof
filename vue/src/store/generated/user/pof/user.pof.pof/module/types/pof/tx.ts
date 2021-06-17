/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'user.pof.pof'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCla {
  creator: string
  proof: string
}

export interface MsgCreateClaResponse {
  id: number
}

export interface MsgUpdateCla {
  creator: string
  id: number
  proof: string
}

export interface MsgUpdateClaResponse {}

export interface MsgDeleteCla {
  creator: string
  id: number
}

export interface MsgDeleteClaResponse {}

const baseMsgCreateCla: object = { creator: '', proof: '' }

export const MsgCreateCla = {
  encode(message: MsgCreateCla, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.proof !== '') {
      writer.uint32(18).string(message.proof)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCla } as MsgCreateCla
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.proof = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCla {
    const message = { ...baseMsgCreateCla } as MsgCreateCla
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof)
    } else {
      message.proof = ''
    }
    return message
  },

  toJSON(message: MsgCreateCla): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.proof !== undefined && (obj.proof = message.proof)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCla>): MsgCreateCla {
    const message = { ...baseMsgCreateCla } as MsgCreateCla
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof
    } else {
      message.proof = ''
    }
    return message
  }
}

const baseMsgCreateClaResponse: object = { id: 0 }

export const MsgCreateClaResponse = {
  encode(message: MsgCreateClaResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateClaResponse } as MsgCreateClaResponse
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

  fromJSON(object: any): MsgCreateClaResponse {
    const message = { ...baseMsgCreateClaResponse } as MsgCreateClaResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateClaResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateClaResponse>): MsgCreateClaResponse {
    const message = { ...baseMsgCreateClaResponse } as MsgCreateClaResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateCla: object = { creator: '', id: 0, proof: '' }

export const MsgUpdateCla = {
  encode(message: MsgUpdateCla, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.proof !== '') {
      writer.uint32(26).string(message.proof)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCla } as MsgUpdateCla
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.proof = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateCla {
    const message = { ...baseMsgUpdateCla } as MsgUpdateCla
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof)
    } else {
      message.proof = ''
    }
    return message
  },

  toJSON(message: MsgUpdateCla): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.proof !== undefined && (obj.proof = message.proof)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateCla>): MsgUpdateCla {
    const message = { ...baseMsgUpdateCla } as MsgUpdateCla
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof
    } else {
      message.proof = ''
    }
    return message
  }
}

const baseMsgUpdateClaResponse: object = {}

export const MsgUpdateClaResponse = {
  encode(_: MsgUpdateClaResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateClaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateClaResponse } as MsgUpdateClaResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateClaResponse {
    const message = { ...baseMsgUpdateClaResponse } as MsgUpdateClaResponse
    return message
  },

  toJSON(_: MsgUpdateClaResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateClaResponse>): MsgUpdateClaResponse {
    const message = { ...baseMsgUpdateClaResponse } as MsgUpdateClaResponse
    return message
  }
}

const baseMsgDeleteCla: object = { creator: '', id: 0 }

export const MsgDeleteCla = {
  encode(message: MsgDeleteCla, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCla } as MsgDeleteCla
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteCla {
    const message = { ...baseMsgDeleteCla } as MsgDeleteCla
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteCla): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteCla>): MsgDeleteCla {
    const message = { ...baseMsgDeleteCla } as MsgDeleteCla
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteClaResponse: object = {}

export const MsgDeleteClaResponse = {
  encode(_: MsgDeleteClaResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteClaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteClaResponse } as MsgDeleteClaResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteClaResponse {
    const message = { ...baseMsgDeleteClaResponse } as MsgDeleteClaResponse
    return message
  },

  toJSON(_: MsgDeleteClaResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteClaResponse>): MsgDeleteClaResponse {
    const message = { ...baseMsgDeleteClaResponse } as MsgDeleteClaResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateCla(request: MsgCreateCla): Promise<MsgCreateClaResponse>
  UpdateCla(request: MsgUpdateCla): Promise<MsgUpdateClaResponse>
  DeleteCla(request: MsgDeleteCla): Promise<MsgDeleteClaResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateCla(request: MsgCreateCla): Promise<MsgCreateClaResponse> {
    const data = MsgCreateCla.encode(request).finish()
    const promise = this.rpc.request('user.pof.pof.Msg', 'CreateCla', data)
    return promise.then((data) => MsgCreateClaResponse.decode(new Reader(data)))
  }

  UpdateCla(request: MsgUpdateCla): Promise<MsgUpdateClaResponse> {
    const data = MsgUpdateCla.encode(request).finish()
    const promise = this.rpc.request('user.pof.pof.Msg', 'UpdateCla', data)
    return promise.then((data) => MsgUpdateClaResponse.decode(new Reader(data)))
  }

  DeleteCla(request: MsgDeleteCla): Promise<MsgDeleteClaResponse> {
    const data = MsgDeleteCla.encode(request).finish()
    const promise = this.rpc.request('user.pof.pof.Msg', 'DeleteCla', data)
    return promise.then((data) => MsgDeleteClaResponse.decode(new Reader(data)))
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

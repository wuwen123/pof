/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Cla } from '../pof/cla';
export const protobufPackage = 'user.pof.pof';
const baseGenesisState = { claCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.claList) {
            Cla.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.claCount !== 0) {
            writer.uint32(16).uint64(message.claCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.claList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claList.push(Cla.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.claCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.claList = [];
        if (object.claList !== undefined && object.claList !== null) {
            for (const e of object.claList) {
                message.claList.push(Cla.fromJSON(e));
            }
        }
        if (object.claCount !== undefined && object.claCount !== null) {
            message.claCount = Number(object.claCount);
        }
        else {
            message.claCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.claList) {
            obj.claList = message.claList.map((e) => (e ? Cla.toJSON(e) : undefined));
        }
        else {
            obj.claList = [];
        }
        message.claCount !== undefined && (obj.claCount = message.claCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.claList = [];
        if (object.claList !== undefined && object.claList !== null) {
            for (const e of object.claList) {
                message.claList.push(Cla.fromPartial(e));
            }
        }
        if (object.claCount !== undefined && object.claCount !== null) {
            message.claCount = object.claCount;
        }
        else {
            message.claCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}

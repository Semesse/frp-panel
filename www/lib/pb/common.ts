// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "common.proto" (package "common", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message common.Status
 */
export interface Status {
    /**
     * @generated from protobuf field: common.RespCode code = 1;
     */
    code: RespCode;
    /**
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * @generated from protobuf message common.CommonRequest
 */
export interface CommonRequest {
}
/**
 * @generated from protobuf message common.CommonResponse
 */
export interface CommonResponse {
    /**
     * @generated from protobuf field: optional common.Status status = 1;
     */
    status?: Status;
}
/**
 * @generated from protobuf message common.Client
 */
export interface Client {
    /**
     * @generated from protobuf field: optional string id = 1;
     */
    id?: string;
    /**
     * @generated from protobuf field: optional string secret = 2;
     */
    secret?: string;
    /**
     * @generated from protobuf field: optional string config = 3;
     */
    config?: string;
    /**
     * @generated from protobuf field: optional string comment = 5;
     */
    comment?: string; // 用户自定义的备注
    /**
     * @generated from protobuf field: optional string server_id = 6;
     */
    serverId?: string;
}
/**
 * @generated from protobuf message common.Server
 */
export interface Server {
    /**
     * @generated from protobuf field: optional string id = 1;
     */
    id?: string;
    /**
     * @generated from protobuf field: optional string secret = 2;
     */
    secret?: string;
    /**
     * @generated from protobuf field: optional string ip = 3;
     */
    ip?: string;
    /**
     * @generated from protobuf field: optional string config = 4;
     */
    config?: string; // 在定义上，ip和port只是为了方便使用
    /**
     * @generated from protobuf field: optional string comment = 5;
     */
    comment?: string; // 用户自定义的备注
}
/**
 * @generated from protobuf message common.User
 */
export interface User {
    /**
     * @generated from protobuf field: optional int64 UserID = 1 [json_name = "UserID"];
     */
    userID?: bigint;
    /**
     * @generated from protobuf field: optional int64 TenantID = 2 [json_name = "TenantID"];
     */
    tenantID?: bigint;
    /**
     * @generated from protobuf field: optional string UserName = 3 [json_name = "UserName"];
     */
    userName?: string;
    /**
     * @generated from protobuf field: optional string Email = 4 [json_name = "Email"];
     */
    email?: string;
    /**
     * @generated from protobuf field: optional string Status = 5 [json_name = "Status"];
     */
    status?: string;
    /**
     * @generated from protobuf field: optional string Role = 6 [json_name = "Role"];
     */
    role?: string;
    /**
     * @generated from protobuf field: optional string Token = 7 [json_name = "Token"];
     */
    token?: string;
    /**
     * @generated from protobuf field: optional string RawPassword = 8 [json_name = "RawPassword"];
     */
    rawPassword?: string;
}
/**
 * @generated from protobuf enum common.RespCode
 */
export enum RespCode {
    /**
     * @generated from protobuf enum value: RESP_CODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: RESP_CODE_SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * @generated from protobuf enum value: RESP_CODE_NOT_FOUND = 2;
     */
    NOT_FOUND = 2,
    /**
     * @generated from protobuf enum value: RESP_CODE_ALREADY_EXISTS = 3;
     */
    ALREADY_EXISTS = 3,
    /**
     * @generated from protobuf enum value: RESP_CODE_INVALID = 4;
     */
    INVALID = 4,
    /**
     * @generated from protobuf enum value: RESP_CODE_FINISH = 5;
     */
    FINISH = 5,
    /**
     * @generated from protobuf enum value: RESP_CODE_UNAUTHORIZED = 6;
     */
    UNAUTHORIZED = 6
}
/**
 * @generated from protobuf enum common.ClientType
 */
export enum ClientType {
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_FRPC = 1;
     */
    FRPC = 1,
    /**
     * @generated from protobuf enum value: CLIENT_TYPE_FRPS = 2;
     */
    FRPS = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class Status$Type extends MessageType<Status> {
    constructor() {
        super("common.Status", [
            { no: 1, name: "code", kind: "enum", T: () => ["common.RespCode", RespCode, "RESP_CODE_"] },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Status>): Status {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.code = 0;
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<Status>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Status): Status {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* common.RespCode code */ 1:
                    message.code = reader.int32();
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Status, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* common.RespCode code = 1; */
        if (message.code !== 0)
            writer.tag(1, WireType.Varint).int32(message.code);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.Status
 */
export const Status = new Status$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommonRequest$Type extends MessageType<CommonRequest> {
    constructor() {
        super("common.CommonRequest", []);
    }
    create(value?: PartialMessage<CommonRequest>): CommonRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CommonRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonRequest): CommonRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CommonRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.CommonRequest
 */
export const CommonRequest = new CommonRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommonResponse$Type extends MessageType<CommonResponse> {
    constructor() {
        super("common.CommonResponse", [
            { no: 1, name: "status", kind: "message", T: () => Status }
        ]);
    }
    create(value?: PartialMessage<CommonResponse>): CommonResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CommonResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonResponse): CommonResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional common.Status status */ 1:
                    message.status = Status.internalBinaryRead(reader, reader.uint32(), options, message.status);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CommonResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional common.Status status = 1; */
        if (message.status)
            Status.internalBinaryWrite(message.status, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.CommonResponse
 */
export const CommonResponse = new CommonResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Client$Type extends MessageType<Client> {
    constructor() {
        super("common.Client", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "secret", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "config", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "comment", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "server_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Client>): Client {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Client>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Client): Client {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string id */ 1:
                    message.id = reader.string();
                    break;
                case /* optional string secret */ 2:
                    message.secret = reader.string();
                    break;
                case /* optional string config */ 3:
                    message.config = reader.string();
                    break;
                case /* optional string comment */ 5:
                    message.comment = reader.string();
                    break;
                case /* optional string server_id */ 6:
                    message.serverId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Client, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string id = 1; */
        if (message.id !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* optional string secret = 2; */
        if (message.secret !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.secret);
        /* optional string config = 3; */
        if (message.config !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.config);
        /* optional string comment = 5; */
        if (message.comment !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.comment);
        /* optional string server_id = 6; */
        if (message.serverId !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.serverId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.Client
 */
export const Client = new Client$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Server$Type extends MessageType<Server> {
    constructor() {
        super("common.Server", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "secret", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ip", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "config", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "comment", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Server>): Server {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Server>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Server): Server {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string id */ 1:
                    message.id = reader.string();
                    break;
                case /* optional string secret */ 2:
                    message.secret = reader.string();
                    break;
                case /* optional string ip */ 3:
                    message.ip = reader.string();
                    break;
                case /* optional string config */ 4:
                    message.config = reader.string();
                    break;
                case /* optional string comment */ 5:
                    message.comment = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Server, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string id = 1; */
        if (message.id !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* optional string secret = 2; */
        if (message.secret !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.secret);
        /* optional string ip = 3; */
        if (message.ip !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.ip);
        /* optional string config = 4; */
        if (message.config !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.config);
        /* optional string comment = 5; */
        if (message.comment !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.comment);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.Server
 */
export const Server = new Server$Type();
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("common.User", [
            { no: 1, name: "UserID", kind: "scalar", jsonName: "UserID", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "TenantID", kind: "scalar", jsonName: "TenantID", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "UserName", kind: "scalar", jsonName: "UserName", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "Email", kind: "scalar", jsonName: "Email", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "Status", kind: "scalar", jsonName: "Status", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Role", kind: "scalar", jsonName: "Role", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Token", kind: "scalar", jsonName: "Token", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "RawPassword", kind: "scalar", jsonName: "RawPassword", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 UserID = 1 [json_name = "UserID"];*/ 1:
                    message.userID = reader.int64().toBigInt();
                    break;
                case /* optional int64 TenantID = 2 [json_name = "TenantID"];*/ 2:
                    message.tenantID = reader.int64().toBigInt();
                    break;
                case /* optional string UserName = 3 [json_name = "UserName"];*/ 3:
                    message.userName = reader.string();
                    break;
                case /* optional string Email = 4 [json_name = "Email"];*/ 4:
                    message.email = reader.string();
                    break;
                case /* optional string Status = 5 [json_name = "Status"];*/ 5:
                    message.status = reader.string();
                    break;
                case /* optional string Role = 6 [json_name = "Role"];*/ 6:
                    message.role = reader.string();
                    break;
                case /* optional string Token = 7 [json_name = "Token"];*/ 7:
                    message.token = reader.string();
                    break;
                case /* optional string RawPassword = 8 [json_name = "RawPassword"];*/ 8:
                    message.rawPassword = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional int64 UserID = 1 [json_name = "UserID"]; */
        if (message.userID !== undefined)
            writer.tag(1, WireType.Varint).int64(message.userID);
        /* optional int64 TenantID = 2 [json_name = "TenantID"]; */
        if (message.tenantID !== undefined)
            writer.tag(2, WireType.Varint).int64(message.tenantID);
        /* optional string UserName = 3 [json_name = "UserName"]; */
        if (message.userName !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.userName);
        /* optional string Email = 4 [json_name = "Email"]; */
        if (message.email !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.email);
        /* optional string Status = 5 [json_name = "Status"]; */
        if (message.status !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.status);
        /* optional string Role = 6 [json_name = "Role"]; */
        if (message.role !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.role);
        /* optional string Token = 7 [json_name = "Token"]; */
        if (message.token !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.token);
        /* optional string RawPassword = 8 [json_name = "RawPassword"]; */
        if (message.rawPassword !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.rawPassword);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.User
 */
export const User = new User$Type();

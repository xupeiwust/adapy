// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';



export class Error implements flatbuffers.IUnpackableObject<ErrorT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Error {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsError(bb:flatbuffers.ByteBuffer, obj?:Error):Error {
  return (obj || new Error()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsError(bb:flatbuffers.ByteBuffer, obj?:Error):Error {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Error()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

code():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

message():string|null
message(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
message(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startError(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addCode(builder:flatbuffers.Builder, code:number) {
  builder.addFieldInt32(0, code, 0);
}

static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, messageOffset, 0);
}

static endError(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createError(builder:flatbuffers.Builder, code:number, messageOffset:flatbuffers.Offset):flatbuffers.Offset {
  Error.startError(builder);
  Error.addCode(builder, code);
  Error.addMessage(builder, messageOffset);
  return Error.endError(builder);
}

unpack(): ErrorT {
  return new ErrorT(
    this.code(),
    this.message()
  );
}


unpackTo(_o: ErrorT): void {
  _o.code = this.code();
  _o.message = this.message();
}
}

export class ErrorT implements flatbuffers.IGeneratedObject {
constructor(
  public code: number = 0,
  public message: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const message = (this.message !== null ? builder.createString(this.message!) : 0);

  return Error.createError(builder,
    this.code,
    message
  );
}
}

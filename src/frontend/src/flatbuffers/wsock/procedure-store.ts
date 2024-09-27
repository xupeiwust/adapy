// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Procedure, ProcedureT } from '../wsock/procedure.js';


export class ProcedureStore implements flatbuffers.IUnpackableObject<ProcedureStoreT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ProcedureStore {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsProcedureStore(bb:flatbuffers.ByteBuffer, obj?:ProcedureStore):ProcedureStore {
  return (obj || new ProcedureStore()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsProcedureStore(bb:flatbuffers.ByteBuffer, obj?:ProcedureStore):ProcedureStore {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ProcedureStore()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

procedures(index: number, obj?:Procedure):Procedure|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Procedure()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

proceduresLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startProcedureStore(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addProcedures(builder:flatbuffers.Builder, proceduresOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, proceduresOffset, 0);
}

static createProceduresVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startProceduresVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endProcedureStore(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createProcedureStore(builder:flatbuffers.Builder, proceduresOffset:flatbuffers.Offset):flatbuffers.Offset {
  ProcedureStore.startProcedureStore(builder);
  ProcedureStore.addProcedures(builder, proceduresOffset);
  return ProcedureStore.endProcedureStore(builder);
}

unpack(): ProcedureStoreT {
  return new ProcedureStoreT(
    this.bb!.createObjList<Procedure, ProcedureT>(this.procedures.bind(this), this.proceduresLength())
  );
}


unpackTo(_o: ProcedureStoreT): void {
  _o.procedures = this.bb!.createObjList<Procedure, ProcedureT>(this.procedures.bind(this), this.proceduresLength());
}
}

export class ProcedureStoreT implements flatbuffers.IGeneratedObject {
constructor(
  public procedures: (ProcedureT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const procedures = ProcedureStore.createProceduresVector(builder, builder.createObjectOffsetList(this.procedures));

  return ProcedureStore.createProcedureStore(builder,
    procedures
  );
}
}

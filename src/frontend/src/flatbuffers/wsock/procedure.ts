// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { Parameter, ParameterT } from '../wsock/parameter.js';


export class Procedure implements flatbuffers.IUnpackableObject<ProcedureT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Procedure {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsProcedure(bb:flatbuffers.ByteBuffer, obj?:Procedure):Procedure {
  return (obj || new Procedure()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsProcedure(bb:flatbuffers.ByteBuffer, obj?:Procedure):Procedure {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Procedure()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

description():string|null
description(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
description(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

scriptFileLocation():string|null
scriptFileLocation(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
scriptFileLocation(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

parameters(index: number, obj?:Parameter):Parameter|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Parameter()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

parametersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

inputIfcFilepath():string|null
inputIfcFilepath(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
inputIfcFilepath(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

outputIfcFilepath():string|null
outputIfcFilepath(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
outputIfcFilepath(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

error():string|null
error(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
error(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startProcedure(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, descriptionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, descriptionOffset, 0);
}

static addScriptFileLocation(builder:flatbuffers.Builder, scriptFileLocationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, scriptFileLocationOffset, 0);
}

static addParameters(builder:flatbuffers.Builder, parametersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, parametersOffset, 0);
}

static createParametersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startParametersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addInputIfcFilepath(builder:flatbuffers.Builder, inputIfcFilepathOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, inputIfcFilepathOffset, 0);
}

static addOutputIfcFilepath(builder:flatbuffers.Builder, outputIfcFilepathOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, outputIfcFilepathOffset, 0);
}

static addError(builder:flatbuffers.Builder, errorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, errorOffset, 0);
}

static endProcedure(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createProcedure(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, nameOffset:flatbuffers.Offset, descriptionOffset:flatbuffers.Offset, scriptFileLocationOffset:flatbuffers.Offset, parametersOffset:flatbuffers.Offset, inputIfcFilepathOffset:flatbuffers.Offset, outputIfcFilepathOffset:flatbuffers.Offset, errorOffset:flatbuffers.Offset):flatbuffers.Offset {
  Procedure.startProcedure(builder);
  Procedure.addId(builder, idOffset);
  Procedure.addName(builder, nameOffset);
  Procedure.addDescription(builder, descriptionOffset);
  Procedure.addScriptFileLocation(builder, scriptFileLocationOffset);
  Procedure.addParameters(builder, parametersOffset);
  Procedure.addInputIfcFilepath(builder, inputIfcFilepathOffset);
  Procedure.addOutputIfcFilepath(builder, outputIfcFilepathOffset);
  Procedure.addError(builder, errorOffset);
  return Procedure.endProcedure(builder);
}

unpack(): ProcedureT {
  return new ProcedureT(
    this.id(),
    this.name(),
    this.description(),
    this.scriptFileLocation(),
    this.bb!.createObjList<Parameter, ParameterT>(this.parameters.bind(this), this.parametersLength()),
    this.inputIfcFilepath(),
    this.outputIfcFilepath(),
    this.error()
  );
}


unpackTo(_o: ProcedureT): void {
  _o.id = this.id();
  _o.name = this.name();
  _o.description = this.description();
  _o.scriptFileLocation = this.scriptFileLocation();
  _o.parameters = this.bb!.createObjList<Parameter, ParameterT>(this.parameters.bind(this), this.parametersLength());
  _o.inputIfcFilepath = this.inputIfcFilepath();
  _o.outputIfcFilepath = this.outputIfcFilepath();
  _o.error = this.error();
}
}

export class ProcedureT implements flatbuffers.IGeneratedObject {
constructor(
  public id: string|Uint8Array|null = null,
  public name: string|Uint8Array|null = null,
  public description: string|Uint8Array|null = null,
  public scriptFileLocation: string|Uint8Array|null = null,
  public parameters: (ParameterT)[] = [],
  public inputIfcFilepath: string|Uint8Array|null = null,
  public outputIfcFilepath: string|Uint8Array|null = null,
  public error: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const id = (this.id !== null ? builder.createString(this.id!) : 0);
  const name = (this.name !== null ? builder.createString(this.name!) : 0);
  const description = (this.description !== null ? builder.createString(this.description!) : 0);
  const scriptFileLocation = (this.scriptFileLocation !== null ? builder.createString(this.scriptFileLocation!) : 0);
  const parameters = Procedure.createParametersVector(builder, builder.createObjectOffsetList(this.parameters));
  const inputIfcFilepath = (this.inputIfcFilepath !== null ? builder.createString(this.inputIfcFilepath!) : 0);
  const outputIfcFilepath = (this.outputIfcFilepath !== null ? builder.createString(this.outputIfcFilepath!) : 0);
  const error = (this.error !== null ? builder.createString(this.error!) : 0);

  return Procedure.createProcedure(builder,
    id,
    name,
    description,
    scriptFileLocation,
    parameters,
    inputIfcFilepath,
    outputIfcFilepath,
    error
  );
}
}

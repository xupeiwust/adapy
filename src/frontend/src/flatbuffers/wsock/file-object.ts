// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { FilePurpose } from './file-purpose';
import { FileType } from './file-type';
import { ProcedureStart, ProcedureStartT } from '../wsock/procedure-start.js';


export class FileObject implements flatbuffers.IUnpackableObject<FileObjectT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):FileObject {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFileObject(bb:flatbuffers.ByteBuffer, obj?:FileObject):FileObject {
  return (obj || new FileObject()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFileObject(bb:flatbuffers.ByteBuffer, obj?:FileObject):FileObject {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FileObject()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

fileType():FileType {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : FileType.IFC;
}

purpose():FilePurpose {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : FilePurpose.DESIGN;
}

filepath():string|null
filepath(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
filepath(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

filedata(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

filedataLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

filedataArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

glbFile(obj?:FileObject):FileObject|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new FileObject()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

ifcsqliteFile(obj?:FileObject):FileObject|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new FileObject()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

isProcedureOutput():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

procedureParent(obj?:ProcedureStart):ProcedureStart|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new ProcedureStart()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startFileObject(builder:flatbuffers.Builder) {
  builder.startObject(9);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addFileType(builder:flatbuffers.Builder, fileType:FileType) {
  builder.addFieldInt8(1, fileType, FileType.IFC);
}

static addPurpose(builder:flatbuffers.Builder, purpose:FilePurpose) {
  builder.addFieldInt8(2, purpose, FilePurpose.DESIGN);
}

static addFilepath(builder:flatbuffers.Builder, filepathOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, filepathOffset, 0);
}

static addFiledata(builder:flatbuffers.Builder, filedataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, filedataOffset, 0);
}

static createFiledataVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFiledataVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addGlbFile(builder:flatbuffers.Builder, glbFileOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, glbFileOffset, 0);
}

static addIfcsqliteFile(builder:flatbuffers.Builder, ifcsqliteFileOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, ifcsqliteFileOffset, 0);
}

static addIsProcedureOutput(builder:flatbuffers.Builder, isProcedureOutput:boolean) {
  builder.addFieldInt8(7, +isProcedureOutput, +false);
}

static addProcedureParent(builder:flatbuffers.Builder, procedureParentOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, procedureParentOffset, 0);
}

static endFileObject(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): FileObjectT {
  return new FileObjectT(
    this.name(),
    this.fileType(),
    this.purpose(),
    this.filepath(),
    this.bb!.createScalarList<number>(this.filedata.bind(this), this.filedataLength()),
    (this.glbFile() !== null ? this.glbFile()!.unpack() : null),
    (this.ifcsqliteFile() !== null ? this.ifcsqliteFile()!.unpack() : null),
    this.isProcedureOutput(),
    (this.procedureParent() !== null ? this.procedureParent()!.unpack() : null)
  );
}


unpackTo(_o: FileObjectT): void {
  _o.name = this.name();
  _o.fileType = this.fileType();
  _o.purpose = this.purpose();
  _o.filepath = this.filepath();
  _o.filedata = this.bb!.createScalarList<number>(this.filedata.bind(this), this.filedataLength());
  _o.glbFile = (this.glbFile() !== null ? this.glbFile()!.unpack() : null);
  _o.ifcsqliteFile = (this.ifcsqliteFile() !== null ? this.ifcsqliteFile()!.unpack() : null);
  _o.isProcedureOutput = this.isProcedureOutput();
  _o.procedureParent = (this.procedureParent() !== null ? this.procedureParent()!.unpack() : null);
}
}

export class FileObjectT implements flatbuffers.IGeneratedObject {
constructor(
  public name: string|Uint8Array|null = null,
  public fileType: FileType = FileType.IFC,
  public purpose: FilePurpose = FilePurpose.DESIGN,
  public filepath: string|Uint8Array|null = null,
  public filedata: (number)[] = [],
  public glbFile: FileObjectT|null = null,
  public ifcsqliteFile: FileObjectT|null = null,
  public isProcedureOutput: boolean = false,
  public procedureParent: ProcedureStartT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const name = (this.name !== null ? builder.createString(this.name!) : 0);
  const filepath = (this.filepath !== null ? builder.createString(this.filepath!) : 0);
  const filedata = FileObject.createFiledataVector(builder, this.filedata);
  const glbFile = (this.glbFile !== null ? this.glbFile!.pack(builder) : 0);
  const ifcsqliteFile = (this.ifcsqliteFile !== null ? this.ifcsqliteFile!.pack(builder) : 0);
  const procedureParent = (this.procedureParent !== null ? this.procedureParent!.pack(builder) : 0);

  FileObject.startFileObject(builder);
  FileObject.addName(builder, name);
  FileObject.addFileType(builder, this.fileType);
  FileObject.addPurpose(builder, this.purpose);
  FileObject.addFilepath(builder, filepath);
  FileObject.addFiledata(builder, filedata);
  FileObject.addGlbFile(builder, glbFile);
  FileObject.addIfcsqliteFile(builder, ifcsqliteFile);
  FileObject.addIsProcedureOutput(builder, this.isProcedureOutput);
  FileObject.addProcedureParent(builder, procedureParent);

  return FileObject.endFileObject(builder);
}
}
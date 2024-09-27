# automatically generated by the FlatBuffers compiler, do not modify

# namespace: wsock

import flatbuffers
from flatbuffers.compat import import_numpy

np = import_numpy()


class ProcedureStore(object):
    __slots__ = ["_tab"]

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = ProcedureStore()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsProcedureStore(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)

    # ProcedureStore
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # ProcedureStore
    def Procedures(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from ada.comms.wsock.Procedure import Procedure

            obj = Procedure()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # ProcedureStore
    def ProceduresLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # ProcedureStore
    def ProceduresIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0


def ProcedureStoreStart(builder):
    builder.StartObject(1)


def Start(builder):
    ProcedureStoreStart(builder)


def ProcedureStoreAddProcedures(builder, procedures):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(procedures), 0)


def AddProcedures(builder, procedures):
    ProcedureStoreAddProcedures(builder, procedures)


def ProcedureStoreStartProceduresVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)


def StartProceduresVector(builder, numElems):
    return ProcedureStoreStartProceduresVector(builder, numElems)


def ProcedureStoreEnd(builder):
    return builder.EndObject()


def End(builder):
    return ProcedureStoreEnd(builder)

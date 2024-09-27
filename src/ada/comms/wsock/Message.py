# automatically generated by the FlatBuffers compiler, do not modify

# namespace: wsock

import flatbuffers
from flatbuffers.compat import import_numpy

np = import_numpy()


class Message(object):
    __slots__ = ["_tab"]

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = Message()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsMessage(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)

    # Message
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Message
    def InstanceId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # Message
    def CommandType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # Message
    def FileObject(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from ada.comms.wsock.FileObject import FileObject

            obj = FileObject()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Message
    def MeshInfo(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from ada.comms.wsock.MeshInfo import MeshInfo

            obj = MeshInfo()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Message
    def TargetGroup(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # Message
    def ClientType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # Message
    def SceneOperation(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from ada.comms.wsock.SceneOperation import SceneOperation

            obj = SceneOperation()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Message
    def TargetId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # Message
    def WebClients(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from ada.comms.wsock.WebClient import WebClient

            obj = WebClient()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Message
    def WebClientsLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # Message
    def WebClientsIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        return o == 0

    # Message
    def ProcedureStore(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from ada.comms.wsock.ProcedureStore import ProcedureStore

            obj = ProcedureStore()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None


def MessageStart(builder):
    builder.StartObject(10)


def Start(builder):
    MessageStart(builder)


def MessageAddInstanceId(builder, instanceId):
    builder.PrependInt32Slot(0, instanceId, 0)


def AddInstanceId(builder, instanceId):
    MessageAddInstanceId(builder, instanceId)


def MessageAddCommandType(builder, commandType):
    builder.PrependInt8Slot(1, commandType, 0)


def AddCommandType(builder, commandType):
    MessageAddCommandType(builder, commandType)


def MessageAddFileObject(builder, fileObject):
    builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(fileObject), 0)


def AddFileObject(builder, fileObject):
    MessageAddFileObject(builder, fileObject)


def MessageAddMeshInfo(builder, meshInfo):
    builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(meshInfo), 0)


def AddMeshInfo(builder, meshInfo):
    MessageAddMeshInfo(builder, meshInfo)


def MessageAddTargetGroup(builder, targetGroup):
    builder.PrependInt8Slot(4, targetGroup, 0)


def AddTargetGroup(builder, targetGroup):
    MessageAddTargetGroup(builder, targetGroup)


def MessageAddClientType(builder, clientType):
    builder.PrependInt8Slot(5, clientType, 0)


def AddClientType(builder, clientType):
    MessageAddClientType(builder, clientType)


def MessageAddSceneOperation(builder, sceneOperation):
    builder.PrependUOffsetTRelativeSlot(6, flatbuffers.number_types.UOffsetTFlags.py_type(sceneOperation), 0)


def AddSceneOperation(builder, sceneOperation):
    MessageAddSceneOperation(builder, sceneOperation)


def MessageAddTargetId(builder, targetId):
    builder.PrependInt32Slot(7, targetId, 0)


def AddTargetId(builder, targetId):
    MessageAddTargetId(builder, targetId)


def MessageAddWebClients(builder, webClients):
    builder.PrependUOffsetTRelativeSlot(8, flatbuffers.number_types.UOffsetTFlags.py_type(webClients), 0)


def AddWebClients(builder, webClients):
    MessageAddWebClients(builder, webClients)


def MessageStartWebClientsVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)


def StartWebClientsVector(builder, numElems):
    return MessageStartWebClientsVector(builder, numElems)


def MessageAddProcedureStore(builder, procedureStore):
    builder.PrependUOffsetTRelativeSlot(9, flatbuffers.number_types.UOffsetTFlags.py_type(procedureStore), 0)


def AddProcedureStore(builder, procedureStore):
    MessageAddProcedureStore(builder, procedureStore)


def MessageEnd(builder):
    return builder.EndObject()


def End(builder):
    return MessageEnd(builder)

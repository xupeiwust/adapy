# automatically generated by the FlatBuffers compiler, do not modify

# namespace: wsock

import flatbuffers
from flatbuffers.compat import import_numpy

np = import_numpy()


class CameraParams(object):
    __slots__ = ["_tab"]

    @classmethod
    def GetRootAs(cls, buf, offset=0):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = CameraParams()
        x.Init(buf, n + offset)
        return x

    @classmethod
    def GetRootAsCameraParams(cls, buf, offset=0):
        """This method is deprecated. Please switch to GetRootAs."""
        return cls.GetRootAs(buf, offset)

    # CameraParams
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # CameraParams
    def Position(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.Get(
                flatbuffers.number_types.Float32Flags, a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4)
            )
        return 0

    # CameraParams
    def PositionAsNumpy(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.GetVectorAsNumpy(flatbuffers.number_types.Float32Flags, o)
        return 0

    # CameraParams
    def PositionLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # CameraParams
    def PositionIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        return o == 0

    # CameraParams
    def LookAt(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.Get(
                flatbuffers.number_types.Float32Flags, a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4)
            )
        return 0

    # CameraParams
    def LookAtAsNumpy(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.GetVectorAsNumpy(flatbuffers.number_types.Float32Flags, o)
        return 0

    # CameraParams
    def LookAtLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # CameraParams
    def LookAtIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        return o == 0

    # CameraParams
    def Up(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.Get(
                flatbuffers.number_types.Float32Flags, a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4)
            )
        return 0

    # CameraParams
    def UpAsNumpy(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.GetVectorAsNumpy(flatbuffers.number_types.Float32Flags, o)
        return 0

    # CameraParams
    def UpLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # CameraParams
    def UpIsNone(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        return o == 0

    # CameraParams
    def Fov(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 60.0

    # CameraParams
    def Near(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 0.1

    # CameraParams
    def Far(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float32Flags, o + self._tab.Pos)
        return 1000.0

    # CameraParams
    def ForceCamera(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return bool(self._tab.Get(flatbuffers.number_types.BoolFlags, o + self._tab.Pos))
        return False


def CameraParamsStart(builder):
    builder.StartObject(7)


def Start(builder):
    CameraParamsStart(builder)


def CameraParamsAddPosition(builder, position):
    builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(position), 0)


def AddPosition(builder, position):
    CameraParamsAddPosition(builder, position)


def CameraParamsStartPositionVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)


def StartPositionVector(builder, numElems):
    return CameraParamsStartPositionVector(builder, numElems)


def CameraParamsAddLookAt(builder, lookAt):
    builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(lookAt), 0)


def AddLookAt(builder, lookAt):
    CameraParamsAddLookAt(builder, lookAt)


def CameraParamsStartLookAtVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)


def StartLookAtVector(builder, numElems):
    return CameraParamsStartLookAtVector(builder, numElems)


def CameraParamsAddUp(builder, up):
    builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(up), 0)


def AddUp(builder, up):
    CameraParamsAddUp(builder, up)


def CameraParamsStartUpVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)


def StartUpVector(builder, numElems):
    return CameraParamsStartUpVector(builder, numElems)


def CameraParamsAddFov(builder, fov):
    builder.PrependFloat32Slot(3, fov, 60.0)


def AddFov(builder, fov):
    CameraParamsAddFov(builder, fov)


def CameraParamsAddNear(builder, near):
    builder.PrependFloat32Slot(4, near, 0.1)


def AddNear(builder, near):
    CameraParamsAddNear(builder, near)


def CameraParamsAddFar(builder, far):
    builder.PrependFloat32Slot(5, far, 1000.0)


def AddFar(builder, far):
    CameraParamsAddFar(builder, far)


def CameraParamsAddForceCamera(builder, forceCamera):
    builder.PrependBoolSlot(6, forceCamera, 0)


def AddForceCamera(builder, forceCamera):
    CameraParamsAddForceCamera(builder, forceCamera)


def CameraParamsEnd(builder):
    return builder.EndObject()


def End(builder):
    return CameraParamsEnd(builder)

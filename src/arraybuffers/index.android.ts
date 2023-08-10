import { TypedArray } from '.';

declare const __runtimeVersion;
let _runtimeVersion;
let _supportsDirectArrayBuffers;

export function supportsDirectArrayBuffers() {
    if (_supportsDirectArrayBuffers === undefined) {
        if (!_runtimeVersion) {
            _runtimeVersion = __runtimeVersion;
        }
        _supportsDirectArrayBuffers = parseInt(_runtimeVersion[0], 10) > 8 || (parseInt(_runtimeVersion[0], 10) === 8 && parseInt(_runtimeVersion[2], 10) >= 2);
    }
    return _supportsDirectArrayBuffers;
}
export function createNativeArray(length, useInts = false): number[] {
    if (useInts) {
        return Array.create('int', length);
    } else {
        return Array.create('float', length);
    }
}
export function createArrayBufferOrNativeArray(length: number, useInts = false, canReturnBuffer = true) {
    if (!supportsDirectArrayBuffers() || !canReturnBuffer) {
        return createNativeArray(length, useInts);
    } else {
        return createArrayBuffer(length, useInts, canReturnBuffer);
    }
}
export function createArrayBuffer(length: number, useInts = false, canReturnBuffer = true): TypedArray {
    if (!supportsDirectArrayBuffers() || !canReturnBuffer) {
        let bb: java.nio.ByteBuffer;
        if (useInts) {
            bb = java.nio.ByteBuffer.allocateDirect(length);
        } else {
            bb = java.nio.ByteBuffer.allocateDirect(length * 4).order(java.nio.ByteOrder.LITTLE_ENDIAN);
        }
        const result = (ArrayBuffer as any).from(bb);
        //@ts-ignore
        return useInts ? new Int8Array(result) : new Float32Array(result);
    }
    //@ts-ignore
    return useInts ? new Int8Array(length) : new Float32Array(length);
}
export function pointsFromBuffer(typedArray: TypedArray, useInts = false, canReturnBuffer = true) {
    if (!supportsDirectArrayBuffers() || !canReturnBuffer) {
        let buffer = typedArray.buffer;
        const length = typedArray.length;
        if (!buffer['nativeObject']) {
            const newTypedArray = createArrayBuffer(buffer.byteLength, useInts, false);
            newTypedArray.set(typedArray);
            buffer = newTypedArray.buffer;
        }
        if (useInts) {
            const bytuffer = (buffer as any).nativeObject as java.nio.ByteBuffer;
            if (bytuffer.isDirect()) {
                return buffer['nativeObject'].array();
            }
            bytuffer.rewind();
            const bytes = Array.create('byte', buffer.byteLength);
            bytuffer.get(bytes);
            return bytes;
        }
        const testArray = Array.create('float', length);
        ((buffer as any).nativeObject as java.nio.ByteBuffer).asFloatBuffer().get(testArray, 0, length);
        return testArray as number[];
    }
    return typedArray;
}

export function arrayToNativeArray(array: number[] | Uint8Array, useInts = false, canReturnBuffer = true) {
    const isBufferView = ArrayBuffer.isView(array);
    if (!Array.isArray(array) && !isBufferView) {
        // return so that we can now it is not supported (as not a valid array)
        return null;
    }
    // for now we cant do it the old way
    if (!isBufferView && supportsDirectArrayBuffers()) {
        const nArray = createNativeArray(array.length, useInts);
        for (let index = 0; index < array.length; index++) {
            nArray[index] = array[index];
        }
        return nArray;
    }
    const length = array.length;
    const typedArray = ArrayBuffer.isView(array) ? (array as any as TypedArray) : createArrayBuffer(length, useInts);
    typedArray.set(array);
    return pointsFromBuffer(typedArray, useInts, canReturnBuffer);
}

export function nativeArrayToArray(array): number[] {
    if (!supportsDirectArrayBuffers()) {
        const result = [];
        for (let index = 0; index < array.length; index++) {
            result[index] = array[index];
        }

        return result as number[];
    }
    return array;
}

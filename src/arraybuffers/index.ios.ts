const FloatConstructor = interop.sizeof(interop.types.id) === 4 ? Float32Array : Float64Array;

// export function createArrayBufferOrNativeArray(length: number, useInts = false) {
//     return createArrayBuffer(length, useInts);
// }
export function createArrayBuffer(length: number, useInts = false) {
    if (useInts) {
        return new Int8Array(length);
    }
    return new FloatConstructor(length);
}
export function pointsFromBuffer(typedArray: Float32Array | Int8Array, useInts = false) {
    return typedArray;
}

export function arrayToNativeArray(array, useInts = false) {
    return array;
}
export function nativeArrayToArray(array): number[] {
    return array;
}
export function createNativeArray(length: number, useInts?): number[] {
    return new Array(length);
}

export function supportsDirectArrayBuffers() {
    return true;
}

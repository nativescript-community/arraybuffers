export type FloatArray = Float32Array | Float64Array | Uint8Array;
export type TypedArray = FloatArray | Uint8Array;
export function createArrayBuffer(length: number, useInts?: boolean, canReturnBuffer?: boolean): TypedArray;
export function createNativeArray(length: number, useInts?: boolean, useBytes?: boolean): number[];
export function pointsFromBuffer(typedArray: TypedArray, useInts?: boolean, canReturnBuffer?: boolean): number[] | TypedArray;
export function arrayToNativeArray(array, useInts?: boolean, canReturnBuffer?: boolean, useBytes = false): number[];
export function createArrayBufferOrNativeArray(length: number, useInts?: boolean, canReturnBuffer?: boolean): number[] | TypedArray;
export function nativeArrayToArray(array): number[];
export function supportsDirectArrayBuffers(): boolean; //android only

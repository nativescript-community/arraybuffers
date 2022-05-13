{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

## API
This is a simple Array Buffers helpers for Nativescript to use optimized arrays on Android
It exposes a few methods:
```ts
type FloatArray = Float32Array | Float64Array | Uint8Array;
type TypedArray = FloatArray | Uint8Array;
function createArrayBuffer(length: number, useInts?: boolean): TypedArray;
function createNativeArray(length: number, useInts?: boolean): number[];
function pointsFromBuffer(typedArray: TypedArray, useInts?: boolean, canReturnBuffer?: boolean): number[] | TypedArray;
function arrayToNativeArray(array, useInts?: boolean, canReturnBuffer?: boolean): number[];
function nativeArrayToArray(array): number[];
function supportsDirectArrayBuffers(): boolean;
```
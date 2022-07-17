<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/arraybuffers</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/arraybuffers?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/arraybuffers.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/arraybuffers"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/arraybuffers.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Utility methods to work with Array Buffers in Nativescript</b></br>
  <sub><sub>
</p>

<br />

[](#table-of-contents)

[](#table-of-contents)

## Table of Contents

-   [Installation](#installation)
-   [API](#api)

[](#installation)

[](#installation)

## Installation

Run the following command from the root of your project:

`ns plugin add @nativescript-community/arraybuffers`

[](#api)

[](#api)

## API

This is a simple Array Buffers helpers for Nativescript to use optimized arrays on Android
It exposes a few methods:

```ts
type FloatArray = Float32Array | Float64Array | Uint8Array;
type TypedArray = FloatArray | Uint8Array;
function createArrayBuffer(length: number, useInts?: boolean, canReturnBuffer?: boolean): TypedArray;
function createNativeArray(length: number, useInts?: boolean): number[];
function pointsFromBuffer(typedArray: TypedArray, useInts?: boolean, canReturnBuffer?: boolean): number[] | TypedArray;
function arrayToNativeArray(array, useInts?: boolean, canReturnBuffer?: boolean): number[];
function nativeArrayToArray(array): number[];
function supportsDirectArrayBuffers(): boolean;
```

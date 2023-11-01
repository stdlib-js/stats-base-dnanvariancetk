/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Interface describing `dnanvariancetk`.
*/
interface Routine {
	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = dnanvariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*/
	( N: number, correction: number, x: Float64Array, stride: number ): number;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns variance
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = dnanvariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	ndarray( N: number, correction: number, x: Float64Array, stride: number, offset: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
*
* @param N - number of indexed elements
* @param correction - degrees of freedom adjustment
* @param x - input array
* @param stride - stride length
* @returns variance
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnanvariancetk( x.length, 1, x, 1 );
* // returns ~4.3333
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnanvariancetk.ndarray( x.length, 1, x, 1, 0 );
* // returns ~4.3333
*/
declare var dnanvariancetk: Routine;


// EXPORTS //

export = dnanvariancetk;

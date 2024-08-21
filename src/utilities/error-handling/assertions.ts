// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { ensureError } from "./normalizeError";

/**
 * Throws an Error with the specified message
 *
 * @example
 * This is specially usefull to quick check if a value is null or undefined
 * ```ts
 * const getStringOrUndefined = (): string | undefined => {
 *   ...
 * }
 * const definitelyAString = getStringOrUndefined() ?? raise("Value is undefined");
 * ```
 */

export const raise = (error: Error | string): never => {
  throw ensureError(error);
};

/**
 * Throws an Error with the specified message if the condition is true
 * @example
 * Similiar to {@link raise}, but accepts a condition as a first parameter.
 * This is usefull to quick check if a value is null or undefined,
 * it should automatically assert the type
 * ```ts
 * const possiblyUndefined: string | undefined = ...
 * assertIf(typeof possiblyUndefined === 'string', "Value is undefined");
 *
 * possiblyUndefined.toUpperCase(); // No type error
 * ```
 */

export function assert(
  condition: unknown,
  error: Error | string,
): asserts condition {
  if (!condition) {
    throw ensureError(error);
  }
}

// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

export function isCallable(fn: unknown): fn is (...args: unknown[]) => unknown {
  return typeof fn === "function";
}

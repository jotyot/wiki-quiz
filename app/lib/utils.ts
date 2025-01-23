import { randomBytes } from "crypto";

export function randomString(length: number) {
  if (length % 2 !== 0) {
    length++;
  }

  return randomBytes(length / 2).toString("hex");
}

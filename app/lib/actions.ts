"use server";

import { LiveblocksError } from "@liveblocks/node";
import { tryCreateRoom } from "./rooms";
import { randomString } from "./utils";

export async function createRoom(listed: boolean) {
  let roomId;
  while (true) {
    try {
      roomId = randomString(8);
      await tryCreateRoom(roomId, listed);
      break;
    } catch (e) {
      if (e instanceof LiveblocksError && e.status === 409) {
        continue; // Room ID conflict, try again
      }
      throw e;
    }
  }
  return roomId;
}

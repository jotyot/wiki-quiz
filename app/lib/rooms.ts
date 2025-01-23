import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET!,
});

export async function tryCreateRoom(roomId: string, listed: boolean) {
  await liveblocks.createRoom(roomId, {
    defaultAccesses: ["room:write"],
    metadata: {
      type: listed ? "listed" : "unlisted",
      lastAccessedAt: new Date().toISOString(),
    },
  });
}

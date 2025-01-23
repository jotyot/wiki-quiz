"use client";

import { createRoom } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export function CreateRoomButton() {
  const { push } = useRouter();

  async function handleClick() {
    const roomId = await createRoom(true);
    push(`/play/${roomId}`);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Create Room
    </button>
  );
}

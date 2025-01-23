"use client";

import { createRoom } from "@/app/lib/rooms";
import { usePathname, useRouter } from "next/navigation";

export function CreateRoomButton() {
  const pathname = usePathname();
  const { push } = useRouter();

  async function handleClick() {
    const roomId = await createRoom();
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

"use client";

import { createRoom } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CreateRoomButton() {
  const [disabled, setDisabled] = useState(false);
  const { push } = useRouter();

  async function handleClick() {
    setDisabled(true);
    const roomId = await createRoom(true);
    push(`/play/${roomId}`);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-700 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      Create Room
    </button>
  );
}

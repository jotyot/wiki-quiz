"use client";

import { useOthers } from "@liveblocks/react/suspense";
import { useState } from "react";
import { NameModal } from "@/app/ui/game/nameModal";

export function Game() {
  const [modalVisable, setModalVisable] = useState(true);

  const others = useOthers();
  return (
    <div>
      <div>{others.map((other) => other.presence.name)}</div>
      {modalVisable && <NameModal setModalVisable={setModalVisable} />}
    </div>
  );
}

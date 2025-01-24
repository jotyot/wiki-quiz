"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

type Props = {
  children: ReactNode;
  id: string;
};

export function Room({ children, id }: Props) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_HKpZAC7gNHOSnq1TRe21u0VocRojZ6AKXcA1lQqbWIom3nTYEV5ib2rtBlI60VPw"
      }
    >
      <RoomProvider id={id} initialPresence={{ name: "Player", score: 0 }}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

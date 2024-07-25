"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { CollaborativeEditor } from "./CollaborativeEditor";

export default function App() {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_prod_Y-_93TIGPpJzOessXmPGrCOIZl0QXFs6HLXYVR6lv7vA6Yg-p-63zB-FVF3x08nl"
      }
    >
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <CollaborativeEditor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

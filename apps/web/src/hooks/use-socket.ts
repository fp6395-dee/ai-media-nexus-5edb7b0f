"use client";
import { useEffect, useState } from "react";

export function useSocket(url: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = (event) => setLatestMessage(JSON.parse(event.data));
    setSocket(ws);
    return () => ws.close();
  }, [url]);

  return { socket, latestMessage };
}

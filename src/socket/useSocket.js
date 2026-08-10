import { useEffect, useContext, useRef } from "react";
import { SocketContext } from "./SocketContext";

/**
 * Custom hook that subscribes to a Socket.IO event while a component
 * is mounted and automatically cleans up on unmount.
 *
 * @param {string}   eventName  The Socket.IO event to listen for.
 * @param {Function} callback   Handler invoked with the event payload.
 * @returns {{ socket: object|null, isConnected: boolean }}
 *
 * Usage:
 *   useSocket("analytics:updated", (updatedUrl) => {
 *     // patch local state
 *   });
 */

export function useSocketContext() {
  return useContext(SocketContext);
}
export default function useSocket(eventName, callback) {
  const { socket, isConnected } = useSocketContext();

  // Keep a stable ref to the latest callback to avoid re-subscribing
  // on every render while still calling the most recent closure.
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!socket || !eventName) return;

    const handler = (data) => callbackRef.current(data);

    socket.on(eventName, handler);

    return () => {
      socket.off(eventName, handler);
    };
  }, [socket, eventName]);

  return { socket, isConnected };
}

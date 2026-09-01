import { useEffect, useState, useRef } from "react";
import { getSocket } from "./socket";
import { SocketContext } from "./SocketContext";

export default function SocketProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);
  const [socketInstance, setSocketInstance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    if (!token) return;

    const socket = getSocket();
    socketRef.current = socket;

    setSocketInstance(socket);

    // ── Event handlers ──────────────────────────────────────────
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = (reason) => {
      setIsConnected(false);
    };

    const onConnectError = (err) => {
    };


    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onConnectError);

    // Connect if not already connected
    if (!socket.connected && !socket.active) {
      socket.connect();
    } else if (socket.connected) {
      setIsConnected(true);
    }

    // ── Cleanup on unmount ──────────────────────────────────────
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onConnectError);
    };
  }, []); // runs once on mount

  return (
    <SocketContext.Provider
      value={{ socket: socketInstance, isConnected }}
    >
      {children}
    </SocketContext.Provider>
  );
}


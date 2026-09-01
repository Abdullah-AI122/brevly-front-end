import { useState, useEffect, useRef } from "react";

export default function QrModal({ link, onClose }) {
  const canvasRef = useRef(null);
  const [qrReady, setQrReady] = useState(false);
  const [qrError, setQrError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setQrReady(false);
    setQrError("");

    import("qrcode")
      .then((QRCode) => {
        if (cancelled || !canvasRef.current) return;
        QRCode.toCanvas(
          canvasRef.current,
          link.short,
          {
            width: 200,
            margin: 2,
            color: { dark: "#4F46E5", light: "#F8FAFC" },
          },
          (err) => {
            if (cancelled) return;
            if (err) {
              setQrError("Failed to generate QR code.");
            } else {
              setQrReady(true);
            }
          },
        );
      })
      .catch(() => {
        if (!cancelled) setQrError("Could not load QR library.");
      });

    return () => {
      cancelled = true;
    };
  }, [link.short]);

  function handleDownload() {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${link.slug}-qr.png`;
    a.click();
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-extrabold text-slate-900 text-lg mb-1">QR Code</h3>
        <p className="text-slate-500 text-sm mb-5 break-all">{link.short}</p>

        <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-center mb-5 min-h-[216px]">
          {qrError ? (
            <p className="text-xs text-red-500">{qrError}</p>
          ) : (
            <>
              {!qrReady && (
                <div className="absolute">
                  <div className="w-8 h-8 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
                </div>
              )}
              <canvas
                ref={canvasRef}
                className={`rounded-lg transition-opacity duration-300 ${qrReady ? "opacity-100" : "opacity-0"}`}
              />
            </>
          )}
        </div>

        {!qrError && (
          <button
            onClick={handleDownload}
            disabled={!qrReady}
            className="block w-full text-center cursor-pointer bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold text-sm py-2.5 rounded-xl mb-3 transition-colors"
          >
            Download PNG
          </button>
        )}
        <button
          onClick={onClose}
          className="block w-full cursor-pointer text-center hover:bg-indigo-50 hover:text-indigo-700 rounded-xl transition-colors text-slate-500 hover:text-slate-800 text-sm py-2 duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
}
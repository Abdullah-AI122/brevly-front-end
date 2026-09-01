import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShieldCheck, Lock, RefreshCw, AlertCircle, ArrowRight } from "lucide-react";
import env from "../../Config/env";

export default function CaptchaVerify() {
  const { shortCode } = useParams();
  const [captchaSvg, setCaptchaSvg] = useState("");
  const [captchaHash, setCaptchaHash] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [password, setPassword] = useState("");
  const [needsPassword, setNeedsPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingCaptcha, setFetchingCaptcha] = useState(true);

  const fetchCaptcha = async () => {
    try {
      setFetchingCaptcha(true);
      const res = await fetch(`${env.BACKEND_URL}/public/captcha`);
      const data = await res.json();
      if (data.success) {
        setCaptchaSvg(data.svg);
        setCaptchaHash(data.hash);
        setCaptchaText("");
      }
    } catch (err) {
      setError("Failed to load captcha. Please try again.");
    } finally {
      setFetchingCaptcha(false);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaText) {
      setError("Please enter the captcha text.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${env.BACKEND_URL}/public/verify/${shortCode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          captchaText,
          captchaHash,
          password: needsPassword ? password : null,
        }),
      });

      const data = await res.json();

      if (data.success && data.originalUrl) {
        window.location.href = data.originalUrl;
      } else if (data.passwordRequired) {
        setNeedsPassword(true);
        setError("This link requires a password.");
        fetchCaptcha(); // Refresh captcha on failure
      } else {
        setError(data.message || "Verification failed. Please try again.");
        fetchCaptcha(); // Refresh captcha on failure
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl text-center">
        <div className="w-20 h-20 mx-auto bg-indigo-50 flex items-center justify-center rounded-2xl mb-6 border border-indigo-100">
          <ShieldCheck className="w-10 h-10 text-indigo-600" />
        </div>

        <h1 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">Security Check</h1>
        <p className="text-slate-500 mb-8 font-medium text-sm">Please verify you are human to continue to your destination.</p>

        {error && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 px-4 py-3 rounded-xl mb-6 text-sm text-left">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <div className="font-semibold text-red-800">Error</div>
              <div className="text-red-700 mt-0.5 break-words">{error}</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Captcha Verification</label>
            <div className="flex flex-col gap-3">
              <div className="relative bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center h-20 border border-slate-200 shadow-inner">
                {fetchingCaptcha ? (
                  <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: captchaSvg }} className="scale-110 origin-center" />
                )}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter the text above"
                  value={captchaText}
                  onChange={(e) => setCaptchaText(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm font-medium tracking-wide"
                  required
                />
                <button 
                  type="button" 
                  onClick={fetchCaptcha}
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 p-3 rounded-xl transition-colors flex items-center justify-center shrink-0"
                  title="Reload Captcha"
                >
                  <RefreshCw className={`w-5 h-5 ${fetchingCaptcha ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>
          </div>

          {needsPassword && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-500">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Password Required</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm font-medium tracking-widest"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || fetchingCaptcha}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Continue to Link <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

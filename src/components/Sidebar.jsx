import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Zap,
  BarChart2,
  Link as LinkIcon,
  TrendingUp,
  X,
  Pencil,
  LogOut,
} from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  linksCount,
  FREE_LIMIT = 100,
  isPremium = false,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const getStoredUser = () => {
    const data =
      localStorage.getItem("LoginUser") || localStorage.getItem("user");
    if (!data || data === "undefined") return {};
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  };

  const storedUser = getStoredUser();
  const userName = storedUser.name || "User";
  const userEmail = storedUser.email || "";
  const userInitial = userName.charAt(0).toUpperCase();

  function handleLogout() {
    localStorage.removeItem("apiToken");
    localStorage.removeItem("LoginUser");
    navigate("/login");
  }

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-30 w-64 bg-white border-r border-slate-100
          flex flex-col py-6 px-4
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button — mobile only */}
        <div className="flex justify-end mb-2 md:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        <Link
          to="/dashboard/analytics"
          className="font-bold text-2xl tracking-[-0.03em] text-slate-900 mb-2 text-center"
          style={{ fontFamily: "'Space Grotesk','Inter',sans-serif" }}
        >
          curtio<span className="text-indigo-600">.</span>
        </Link>

        <nav className="flex flex-col gap-1 flex-1">
          <Link
            to="/dashboard/analytics"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors text-left ${currentPath === "/dashboard/analytics"
                ? "bg-indigo-50 text-indigo-700 font-semibold"
                : "font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              }`}
          >
            <BarChart2 size={16} /> Analytics Dashboard
          </Link>

          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors text-left ${currentPath === "/dashboard"
                ? "bg-indigo-50 text-indigo-700 font-semibold"
                : "font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              }`}
          >
            <LinkIcon size={16} /> Links
          </Link>

          <Link
            to="/dashboard/campaigns"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors text-left ${currentPath === "/dashboard/campaigns"
                ? "bg-indigo-50 text-indigo-700 font-semibold"
                : "font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              }`}
          >
            <TrendingUp size={16} /> Campaigns
          </Link>
        </nav>

        {/* Free plan badge */}
        {linksCount !== undefined && !isPremium && (
          <div className="border border-indigo-100 bg-indigo-50 rounded-xl p-4 mb-4">
            <div className="text-xs font-bold text-indigo-700 mb-1">
              Free Plan
            </div>
            <div className="text-xs text-slate-500 mb-2">
              {linksCount}/{FREE_LIMIT} links used
            </div>
            <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all"
                style={{ width: `${(linksCount / FREE_LIMIT) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="border-t border-gray-400 pt-4">
          <div className="flex items-center gap-3 px-2 mb-3 min-w-0">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ">
              {userInitial}
            </div>
            <div className="min-w-0 ">
              <div className="text-sm font-semibold text-slate-800 truncate">
                {userName}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {userEmail}
              </div>
            </div>
          </div>
          <Link
            to="/dashboard/editprofile"
            className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white text-sm font-medium px-3 py-2 rounded-xl text-center mt-2 cursor-pointer hover:bg-indigo-800 transition-colors"
          >
            <Pencil size={15} /> Edit Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white text-sm font-medium px-3 py-2 rounded-xl text-center mt-2 cursor-pointer hover:bg-indigo-800 transition-colors flex w-full items-center justify-center gap-2"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}

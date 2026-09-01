// Single source of truth for "is there an active session" — the same
// check ProtectedRoute and every authenticated fetch call gate on, so the
// header and marketing CTAs never disagree about signed-in state.
export function isLoggedIn() {
  return Boolean(localStorage.getItem("apiToken"));
}

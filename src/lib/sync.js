import { getCookie, eraseCookie } from './cookies';

export async function syncPendingUrl(apiToken) {
  const pendingUrl = getCookie('brevly_pending_url');
  if (pendingUrl) {
    try {
      const res = await fetch(`${env.BACKEND_URL}/urls`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiToken}`
        },
        body: JSON.stringify({
          originalUrl: pendingUrl
        })
      });
      const data = await res.json();
      if (data.success) {
      } else {
        console.error("Failed to sync pending guest URL:", data.message);
      }
    } catch (err) {
      console.error("Network error while syncing pending guest URL:", err);
    } finally {
      // Clear all guest-related cookies
      eraseCookie('brevly_pending_url');
      eraseCookie('brevly_guest_generated');
    }
  }
}

import { getCookie, eraseCookie } from './cookies';
import env from '../../Config/env';
import { addNewLinkId } from './newLinkTracker';

export async function syncPendingUrl(apiToken) {
  const pendingUrl = getCookie('brevly_pending_url') || localStorage.getItem('pending_url');
  const expiresAt = localStorage.getItem('pending_url_expires_at');

  if (expiresAt && Date.now() > Number(expiresAt)) {
    eraseCookie('brevly_pending_url');
    eraseCookie('brevly_guest_generated');
    localStorage.removeItem('pending_url');
    localStorage.removeItem('pending_url_expires_at');
    return;
  }

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
        console.log("Successfully synced pending URL to DB:", data);
        if (data.url?._id) {
          addNewLinkId(data.url._id);
        }
      } else {
        console.error("Failed to sync pending guest URL:", data.message);
      }
    } catch (err) {
      console.error("Network error while syncing pending guest URL:", err);
    } finally {
      // Clear all guest-related cookies & localStorage
      eraseCookie('brevly_pending_url');
      eraseCookie('brevly_guest_generated');
      localStorage.removeItem('pending_url');
      localStorage.removeItem('pending_url_expires_at');
    }
  }
}

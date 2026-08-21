export function getNewLinkIds() {
  try {
    return JSON.parse(localStorage.getItem('new_link_ids') || '[]');
  } catch {
    return [];
  }
}

export function addNewLinkId(id) {
  if (!id) return;
  const current = getNewLinkIds();
  const strId = String(id);
  if (!current.includes(strId)) {
    const updated = [strId, ...current];
    localStorage.setItem('new_link_ids', JSON.stringify(updated));
  }
}

export function getViewedLinkIds() {
  try {
    return JSON.parse(localStorage.getItem('viewed_link_ids') || '[]');
  } catch {
    return [];
  }
}

export function markLinkAsViewed(id) {
  if (!id) return;
  const strId = String(id);
  
  // Remove from new_link_ids
  const currentNew = getNewLinkIds();
  const updatedNew = currentNew.filter(i => i !== strId);
  localStorage.setItem('new_link_ids', JSON.stringify(updatedNew));

  // Add to viewed_link_ids
  const currentViewed = getViewedLinkIds();
  if (!currentViewed.includes(strId)) {
    localStorage.setItem('viewed_link_ids', JSON.stringify([...currentViewed, strId]));
  }
}

export function isLinkNew(link) {
  if (!link || (!link.id && !link._id && !link.slug)) return false;
  const id = String(link.id || link._id || link.slug);
  
  // If user has explicitly opened/viewed it, it's NOT new
  const viewedIds = getViewedLinkIds();
  if (viewedIds.includes(id)) return false;

  // If link ID is explicitly in new_link_ids
  const newIds = getNewLinkIds();
  if (newIds.includes(id)) return true;

  // Or if the link was created within the last 12 hours
  const rawDate = link.rawCreatedAt || link.createdAt;
  if (rawDate) {
    const createdTime = new Date(rawDate).getTime();
    const now = Date.now();
    const hoursDiff = (now - createdTime) / (1000 * 60 * 60);
    if (!isNaN(createdTime) && hoursDiff < 12) {
      return true;
    }
  }

  return false;
}

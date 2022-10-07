let lastTimeout;

export function debounce (callback, wait) {
  if(lastTimeout) clearTimeout(lastTimeout)
  lastTimeout = setTimeout(callback, wait)
}

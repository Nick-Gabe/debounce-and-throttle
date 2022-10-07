let executingTimeout;

export function throttle(callback, interval) {
  if(executingTimeout) return
  
  executingTimeout = setTimeout(() => {
    callback()
    executingTimeout = null
  }, interval)
}
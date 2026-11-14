"use client";

import { useEffect } from "react";

// Registers /sw.js so the site can be installed and works offline.
// Only in production, so the cache does not get in the way during `npm run dev`.
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return null;
}

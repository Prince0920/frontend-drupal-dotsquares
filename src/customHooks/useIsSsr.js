export const useIsSsr = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

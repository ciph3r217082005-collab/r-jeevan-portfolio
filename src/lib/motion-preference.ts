/** Full motion is the default unless the visitor explicitly saved reduced motion. */
export function isReducedMotionPreference(saved: string | null): boolean {
  return saved === "1";
}
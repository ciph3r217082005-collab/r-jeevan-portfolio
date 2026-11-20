import { describe, expect, it } from "vitest";
import { isReducedMotionPreference } from "@/lib/motion-preference";

describe("Motion preference", () => {
  it("defaults to full animations for a new visitor", () => {
    expect(isReducedMotionPreference(null)).toBe(false);
  });
  it("keeps the visitor's reduced-motion choice", () => {
    expect(isReducedMotionPreference("1")).toBe(true);
  });
  it("keeps the visitor's full-motion choice", () => {
    expect(isReducedMotionPreference("0")).toBe(false);
  });
});
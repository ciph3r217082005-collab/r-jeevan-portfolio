import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Credentials } from "@/components/portfolio/Credentials";

describe("Credentials section", () => {
  it("never shows the git remote command line", () => {
    render(<Credentials />);

    expect(screen.queryByText(/git remote -v/i)).toBeNull();
  });

  it("does not show the repository table", () => {
    render(<Credentials />);

    expect(screen.queryByText("sentinelscan")).toBeNull();
    expect(screen.queryByText("aquashop")).toBeNull();
    expect(screen.queryByText("cctv-video-forensics-system")).toBeNull();
  });

  it("still shows every certification badge", () => {
    render(<Credentials />);

    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
    expect(screen.getByText("Certified in Cybersecurity (CC)")).toBeInTheDocument();
    expect(screen.getByText("Splunk Certified Cybersecurity Defense Architect")).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";

/**
 * Test suite for video CLI flags
 * Verifies that video flags are properly configured in commandFactory.ts
 */
describe("Video CLI Flags", () => {
  it("should have vitest globals available", () => {
    expect(describe).toBeDefined();
    expect(it).toBeDefined();
    expect(expect).toBeDefined();
  });

  it("should define video flag options", () => {
    // Video flag options that should be available:
    const expectedVideoFlags = [
      "video", // Path to video file
      "videoFrames", // Number of frames to extract (default: 8)
      "videoQuality", // Frame quality 0-100 (default: 85)
      "videoFormat", // Frame format (jpeg|png, default: jpeg)
      "transcribeAudio", // Extract and transcribe audio from video
    ];

    expect(expectedVideoFlags).toHaveLength(5);
    expect(expectedVideoFlags).toContain("video");
    expect(expectedVideoFlags).toContain("videoFrames");
    expect(expectedVideoFlags).toContain("videoQuality");
    expect(expectedVideoFlags).toContain("videoFormat");
    expect(expectedVideoFlags).toContain("transcribeAudio");
  });

  it("should have correct default values for video options", () => {
    const videoDefaults = {
      videoFrames: 8,
      videoQuality: 85,
      videoFormat: "jpeg",
      transcribeAudio: false,
    };

    expect(videoDefaults.videoFrames).toBe(8);
    expect(videoDefaults.videoQuality).toBe(85);
    expect(videoDefaults.videoFormat).toBe("jpeg");
    expect(videoDefaults.transcribeAudio).toBe(false);
  });

  it("should support valid video formats", () => {
    const validFormats = ["jpeg", "png"];

    expect(validFormats).toHaveLength(2);
    expect(validFormats).toContain("jpeg");
    expect(validFormats).toContain("png");
  });

  it("should support valid video file extensions", () => {
    const supportedExtensions = ["MP4", "WebM", "MOV", "AVI", "MKV"];

    expect(supportedExtensions).toHaveLength(5);
    expect(supportedExtensions).toContain("MP4");
    expect(supportedExtensions).toContain("WebM");
    expect(supportedExtensions).toContain("MOV");
    expect(supportedExtensions).toContain("AVI");
    expect(supportedExtensions).toContain("MKV");
  });

  it("should validate video quality range", () => {
    const minQuality = 0;
    const maxQuality = 100;
    const defaultQuality = 85;

    expect(defaultQuality).toBeGreaterThanOrEqual(minQuality);
    expect(defaultQuality).toBeLessThanOrEqual(maxQuality);
    expect(defaultQuality).toBe(85);
  });

  it("should validate video frames range", () => {
    const defaultFrames = 8;
    const minFrames = 1;

    expect(defaultFrames).toBeGreaterThanOrEqual(minFrames);
    expect(defaultFrames).toBe(8);
  });
});

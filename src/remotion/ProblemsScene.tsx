import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import { bodyFont, displayFont } from "./fonts";

type ProblemsSceneProps = {
  readonly title: string;
  readonly problem1: string;
  readonly problem2: string;
  readonly problem3: string;
  readonly closing: string;
  readonly style?: React.CSSProperties;
};

const CrossIcon: React.FC = () => (
  <svg width="96" height="96" viewBox="0 0 48 48" style={{ flex: "none" }}>
    <circle cx="24" cy="24" r="22" fill="#FF6B5B" />
    <path d="M 16 16 L 32 32 M 32 16 L 16 32" stroke="#0E1A16" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const ProblemsSceneInner: React.FC<ProblemsSceneProps> = ({
  title,
  problem1,
  problem2,
  problem3,
  closing,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0E1A16",
        fontFamily: bodyFont,
        ...style,
      }}
    >
      <Interactive.Div
        name="Titulo"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 260,
          fontFamily: displayFont,
          fontWeight: 800,
          fontSize: 100,
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          color: "#F4F6F5",
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {title}
      </Interactive.Div>
      <Interactive.Div
        name="Problema 1"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 640,
          display: "flex",
          alignItems: "center",
          gap: 36,
          color: "#F4F6F5",
          fontSize: 56,
          fontWeight: 500,
          lineHeight: 1.15,
          opacity: interpolate(frame, [12, 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [12, 28], ["-60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <CrossIcon />
        {problem1}
      </Interactive.Div>
      <Interactive.Div
        name="Problema 2"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 860,
          display: "flex",
          alignItems: "center",
          gap: 36,
          color: "#F4F6F5",
          fontSize: 56,
          fontWeight: 500,
          lineHeight: 1.15,
          opacity: interpolate(frame, [26, 36], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [26, 42], ["-60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <CrossIcon />
        {problem2}
      </Interactive.Div>
      <Interactive.Div
        name="Problema 3"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1080,
          display: "flex",
          alignItems: "center",
          gap: 36,
          color: "#F4F6F5",
          fontSize: 56,
          fontWeight: 500,
          lineHeight: 1.15,
          opacity: interpolate(frame, [40, 50], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [40, 56], ["-60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <CrossIcon />
        {problem3}
      </Interactive.Div>
      <Interactive.Div
        name="Cierre"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1400,
          paddingTop: 48,
          borderTop: "3px solid #2A3B34",
          color: "#A7B7B0",
          fontSize: 54,
          lineHeight: 1.25,
          opacity: interpolate(frame, [62, 74], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {closing}
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const problemsSchema = {
  title: { type: "text-content", default: "", description: "Título" },
  problem1: { type: "text-content", default: "", description: "Problema 1" },
  problem2: { type: "text-content", default: "", description: "Problema 2" },
  problem3: { type: "text-content", default: "", description: "Problema 3" },
  closing: { type: "text-content", default: "", description: "Cierre" },
} as const satisfies InteractivitySchema;

export const ProblemsScene = Interactive.withSchema({
  Component: ProblemsSceneInner,
  componentName: "<ProblemsScene>",
  schema: problemsSchema,
  wrapInSequence: true,
});

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

type HookSceneProps = {
  readonly question: string;
  readonly punchline: string;
  readonly url: string;
  readonly style?: React.CSSProperties;
};

const HookSceneInner: React.FC<HookSceneProps> = ({
  question,
  punchline,
  url,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0E1320",
        fontFamily: bodyFont,
        ...style,
      }}
    >
      <Interactive.Div
        name="Pregunta"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 190,
          fontFamily: displayFont,
          fontWeight: 800,
          fontSize: 92,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#F5F7FA",
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 18], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {question}
      </Interactive.Div>
      <Interactive.Div
        name="Remate"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 420,
          fontFamily: displayFont,
          fontWeight: 800,
          fontSize: 112,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "#FF5C4D",
          opacity: interpolate(frame, [26, 38], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [26, 42], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {punchline}
      </Interactive.Div>
      <Interactive.Div
        name="Navegador con error"
        style={{
          position: "absolute",
          left: 130,
          right: 130,
          top: 720,
          height: 900,
          backgroundColor: "#171E2E",
          border: "3px solid #2A3348",
          borderRadius: 48,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          opacity: interpolate(frame, [8, 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [8, 30], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
          translate: interpolate(
            frame,
            [48, 51, 54, 57, 60, 63],
            ["0px 0px", "-22px 0px", "18px 0px", "-12px 0px", "6px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          ),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "34px 36px",
            borderBottom: "3px solid #2A3348",
          }}
        >
          <div style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "#FF5C4D" }} />
          <div style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "#F2B33D" }} />
          <div style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "#3A4560" }} />
          <div
            style={{
              marginLeft: 18,
              flex: 1,
              backgroundColor: "#0E1320",
              borderRadius: 999,
              padding: "16px 26px",
              color: "#9AA4B8",
              fontSize: 32,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {url}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 34,
            padding: "0 60px",
            textAlign: "center",
          }}
        >
          <svg width="190" height="190" viewBox="0 0 100 100">
            <rect x="14" y="20" width="72" height="60" rx="8" fill="none" stroke="#9AA4B8" strokeWidth="5" />
            <line x1="14" y1="36" x2="86" y2="36" stroke="#9AA4B8" strokeWidth="5" />
            <path d="M 38 50 L 62 70 M 62 50 L 38 70" stroke="#FF5C4D" strokeWidth="7" strokeLinecap="round" />
          </svg>
          <div style={{ color: "#F5F7FA", fontSize: 52, fontWeight: 700, lineHeight: 1.15 }}>
            No se puede acceder a este sitio
          </div>
          <div style={{ color: "#9AA4B8", fontSize: 34, letterSpacing: "0.04em" }}>
            ERR_NAME_NOT_RESOLVED
          </div>
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const hookSchema = {
  question: { type: "text-content", default: "", description: "Pregunta" },
  punchline: { type: "text-content", default: "", description: "Remate" },
  url: { type: "text-content", default: "", description: "Dirección caída" },
} as const satisfies InteractivitySchema;

export const HookScene = Interactive.withSchema({
  Component: HookSceneInner,
  componentName: "<HookScene>",
  schema: hookSchema,
  wrapInSequence: true,
});

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

type SolutionSceneProps = {
  readonly title: string;
  readonly highlight: string;
  readonly businessName: string;
  readonly heroText: string;
  readonly whatsappLabel: string;
  readonly benefit1: string;
  readonly benefit2: string;
  readonly benefit3: string;
  readonly style?: React.CSSProperties;
};

const CheckIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" style={{ flex: "none" }}>
    <circle cx="24" cy="24" r="22" fill="#25D366" />
    <path d="M 14 25 L 21 32 L 34 17" fill="none" stroke="#0E1320" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SolutionSceneInner: React.FC<SolutionSceneProps> = ({
  title,
  highlight,
  businessName,
  heroText,
  whatsappLabel,
  benefit1,
  benefit2,
  benefit3,
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
        name="Titulo"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 150,
          fontFamily: displayFont,
          fontWeight: 800,
          fontSize: 88,
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          color: "#F5F7FA",
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {title}
        <span style={{ display: "block", color: "#5B8BFF" }}>{highlight}</span>
      </Interactive.Div>

      <Interactive.Div
        name="Celular"
        style={{
          position: "absolute",
          left: 230,
          width: 620,
          top: 420,
          height: 860,
          backgroundColor: "#F3F5F9",
          border: "14px solid #232B3D",
          borderRadius: 64,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          padding: "28px 28px 0",
          scale: interpolate(frame, [4, 24], [0.92, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [4, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 6px",
            opacity: interpolate(frame, [14, 24], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [14, 28], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#4C7DFF" }} />
            <div style={{ fontFamily: displayFont, fontWeight: 800, fontSize: 36, color: "#0E1320" }}>
              {businessName}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ width: 38, height: 5, borderRadius: 3, backgroundColor: "#0E1320" }} />
            <div style={{ width: 38, height: 5, borderRadius: 3, backgroundColor: "#0E1320" }} />
            <div style={{ width: 38, height: 5, borderRadius: 3, backgroundColor: "#0E1320" }} />
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#4C7DFF",
            borderRadius: 28,
            padding: "56px 38px",
            color: "#FFFFFF",
            opacity: interpolate(frame, [26, 36], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [26, 40], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ fontFamily: displayFont, fontWeight: 800, fontSize: 50, lineHeight: 1.05 }}>
            {heroText}
          </div>
          <div style={{ marginTop: 16, width: 300, height: 14, borderRadius: 7, backgroundColor: "rgba(255,255,255,0.45)" }} />
          <div style={{ marginTop: 12, width: 220, height: 14, borderRadius: 7, backgroundColor: "rgba(255,255,255,0.45)" }} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            backgroundColor: "#25D366",
            borderRadius: 999,
            padding: "28px 24px",
            color: "#0E1320",
            fontWeight: 700,
            fontSize: 30,
            whiteSpace: "nowrap",
            opacity: interpolate(frame, [38, 48], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [38, 54], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.34, 1.56, 0.64, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path d="M 12 3 A 9 9 0 0 0 4.2 16.5 L 3 21 L 7.6 19.8 A 9 9 0 1 0 12 3 Z" fill="none" stroke="#0E1320" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          {whatsappLabel}
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            opacity: interpolate(frame, [50, 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [50, 64], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: 24, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 30, color: "#0E1320" }}>Horarios</div>
            <div style={{ fontSize: 26, color: "#586070", lineHeight: 1.3 }}>
              Lun a sáb
              <br />8 a 18 h
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: 24, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 30, color: "#0E1320" }}>Cómo llegar</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 26, color: "#586070" }}>
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path d="M 12 22 C 12 22 19 14.5 19 9.5 A 7 7 0 0 0 5 9.5 C 5 14.5 12 22 12 22 Z" fill="#FF5C4D" />
                <circle cx="12" cy="9.5" r="2.6" fill="#FFFFFF" />
              </svg>
              Ver mapa
            </div>
          </div>
        </div>
      </Interactive.Div>

      <Interactive.Div
        name="Beneficio 1"
        style={{
          position: "absolute",
          left: 120,
          right: 90,
          top: 1380,
          display: "flex",
          alignItems: "center",
          gap: 28,
          color: "#F5F7FA",
          fontSize: 50,
          fontWeight: 500,
          opacity: interpolate(frame, [72, 82], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [72, 88], ["-50px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <CheckIcon />
        {benefit1}
      </Interactive.Div>
      <Interactive.Div
        name="Beneficio 2"
        style={{
          position: "absolute",
          left: 120,
          right: 90,
          top: 1500,
          display: "flex",
          alignItems: "center",
          gap: 28,
          color: "#F5F7FA",
          fontSize: 50,
          fontWeight: 500,
          opacity: interpolate(frame, [86, 96], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [86, 102], ["-50px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <CheckIcon />
        {benefit2}
      </Interactive.Div>
      <Interactive.Div
        name="Beneficio 3"
        style={{
          position: "absolute",
          left: 120,
          right: 90,
          top: 1620,
          display: "flex",
          alignItems: "center",
          gap: 28,
          color: "#F5F7FA",
          fontSize: 50,
          fontWeight: 500,
          opacity: interpolate(frame, [100, 110], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [100, 116], ["-50px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <CheckIcon />
        {benefit3}
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const solutionSchema = {
  title: { type: "text-content", default: "", description: "Título" },
  highlight: { type: "text-content", default: "", description: "Título resaltado" },
  businessName: { type: "text-content", default: "", description: "Nombre en la web de ejemplo" },
  heroText: { type: "text-content", default: "", description: "Texto principal de la web" },
  whatsappLabel: { type: "text-content", default: "", description: "Botón de WhatsApp" },
  benefit1: { type: "text-content", default: "", description: "Beneficio 1" },
  benefit2: { type: "text-content", default: "", description: "Beneficio 2" },
  benefit3: { type: "text-content", default: "", description: "Beneficio 3" },
} as const satisfies InteractivitySchema;

export const SolutionScene = Interactive.withSchema({
  Component: SolutionSceneInner,
  componentName: "<SolutionScene>",
  schema: solutionSchema,
  wrapInSequence: true,
});

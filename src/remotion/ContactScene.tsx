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

type ContactSceneProps = {
  readonly personName: string;
  readonly role: string;
  readonly offer: string;
  readonly buttonLabel: string;
  readonly place: string;
  readonly style?: React.CSSProperties;
};

const ContactSceneInner: React.FC<ContactSceneProps> = ({
  personName,
  role,
  offer,
  buttonLabel,
  place,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#3D6BF2",
        fontFamily: bodyFont,
        ...style,
      }}
    >
      <Interactive.Div
        name="Oferta"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 300,
          fontFamily: displayFont,
          fontWeight: 800,
          fontSize: 104,
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
          opacity: interpolate(frame, [0, 12], [0, 1], {
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
        {offer}
      </Interactive.Div>

      <Interactive.Div
        name="Boton WhatsApp"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 860,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          backgroundColor: "#FFFFFF",
          borderRadius: 999,
          padding: "42px 40px",
          color: "#0E1320",
          fontWeight: 700,
          fontSize: 54,
          opacity: interpolate(frame, [14, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [14, 30, 70, 78, 86], [0.85, 1, 1, 1.05, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <svg width="60" height="60" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="#25D366" />
          <path d="M 24 11 A 13 13 0 0 0 12.8 30.5 L 11 37 L 17.7 35.3 A 13 13 0 1 0 24 11 Z" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" />
        </svg>
        {buttonLabel}
      </Interactive.Div>

      <Interactive.Div
        name="Firma"
        style={{
          position: "absolute",
          left: 90,
          right: 90,
          top: 1260,
          paddingTop: 56,
          borderTop: "3px solid rgba(255,255,255,0.35)",
          color: "#FFFFFF",
          opacity: interpolate(frame, [30, 42], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontFamily: displayFont, fontWeight: 800, fontSize: 96, letterSpacing: "-0.02em", lineHeight: 1 }}>
          {personName}
        </div>
        <div style={{ marginTop: 22, fontSize: 52, lineHeight: 1.2, color: "rgba(255,255,255,0.88)" }}>{role}</div>
        <div style={{ marginTop: 40, fontSize: 44, color: "rgba(255,255,255,0.7)" }}>{place}</div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const contactSchema = {
  personName: { type: "text-content", default: "", description: "Nombre" },
  role: { type: "text-content", default: "", description: "Servicio" },
  offer: { type: "text-content", default: "", description: "Oferta" },
  buttonLabel: { type: "text-content", default: "", description: "Botón" },
  place: { type: "text-content", default: "", description: "Lugar" },
} as const satisfies InteractivitySchema;

export const ContactScene = Interactive.withSchema({
  Component: ContactSceneInner,
  componentName: "<ContactScene>",
  schema: contactSchema,
  wrapInSequence: true,
});

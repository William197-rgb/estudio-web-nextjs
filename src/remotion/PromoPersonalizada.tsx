import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { useVideoConfig } from "remotion";
import { ContactScene } from "./ContactScene";
import { HookScene } from "./HookScene";
import { ProblemsScene } from "./ProblemsScene";
import { SolutionScene } from "./SolutionScene";

export type PromoPersonalizadaProps = {
  readonly businessName: string;
  readonly heroText: string;
};

// Same 450-frame cut as PromoDisenoWeb in video-promo-web, with the mock site in the
// solution scene driven by the visitor's business name and trade.
export const PromoPersonalizada = ({ businessName, heroText }: PromoPersonalizadaProps) => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="Gancho" durationInFrames={105} premountFor={fps}>
        <HookScene
          question="¿Su negocio tiene página web…"
          punchline="pero no abre?"
          url="minegocio.negocio.site"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 12 })} />
      <TransitionSeries.Sequence name="Problemas" durationInFrames={105} premountFor={fps}>
        <ProblemsScene
          title="Y así pierde clientes todos los días"
          problem1="La web está caída o desactualizada"
          problem2="Tarda en cargar en el celular"
          problem3="No hay cómo escribirle rápido"
          closing="El cliente no espera: se va con la competencia."
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 12 })}
      />
      <TransitionSeries.Sequence name="Solucion" durationInFrames={150} premountFor={fps}>
        <SolutionScene
          title="Le armo una web"
          highlight="que sí trabaja"
          businessName={businessName}
          heroText={heroText}
          whatsappLabel="Escríbanos por WhatsApp"
          benefit1="Rápida en el celular"
          benefit2="WhatsApp con un toque"
          benefit3="Fácil de encontrar en Google"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 12 })} />
      <TransitionSeries.Sequence name="Contacto" durationInFrames={126} premountFor={fps}>
        <ContactScene
          offer="Pídame su propuesta sin compromiso"
          buttonLabel="Escríbame por WhatsApp"
          personName="William Acosta"
          role="Diseño web para negocios de Central"
          place="Central, Paraguay"
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

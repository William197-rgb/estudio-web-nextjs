"use client";

import { Player, type PlayerRef } from "@remotion/player";
import { useEffect, useMemo, useRef } from "react";
import { PromoPersonalizada } from "@/remotion/PromoPersonalizada";

type Props = {
  businessName: string;
  heroText: string;
};

// The solution scene starts at frame 186 of the 450-frame cut and its phone is fully built
// by frame 250; jump there when the visitor edits the ad so they see their own business.
const SOLUTION_FRAME = 256;

export default function AdPlayer({ businessName, heroText }: Props) {
  const player = useRef<PlayerRef>(null);
  const inputProps = useMemo(() => ({ businessName, heroText }), [businessName, heroText]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    player.current?.seekTo(SOLUTION_FRAME);
  }, [inputProps]);

  return (
    <Player
      ref={player}
      component={PromoPersonalizada}
      inputProps={inputProps}
      durationInFrames={450}
      fps={30}
      compositionWidth={1080}
      compositionHeight={1920}
      style={{ width: "100%", height: "100%" }}
      controls
      loop
      autoPlay
      initiallyMuted
      acknowledgeRemotionLicense
    />
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SAYINGS } from "@/constants/sayings";
import { getSayingData } from "@/lib/sayings";

import { AudioPlayer } from "./audio-player";
import { RandomSayings } from "./random-sayings";

interface PlayPageProps {
  readonly params: {
    sound_id: string;
  };
}

export const generateMetadata = ({ params }: PlayPageProps): Metadata => {
  const data = getSayingData(params.sound_id);

  if (!data) {
    return {};
  }

  return {
    title: `${data.text} - Duke Nukem Says`,
    description: `Duke Nukem Says "${data.text}". Play Duke Nukem quotes on Duke Nukem Says!`,
  };
};

export const generateStaticParams = () => {
  return SAYINGS.map((saying) => ({
    sound_id: saying.id,
  }));
};

const PlayPage = ({ params }: PlayPageProps) => {
  const data = getSayingData(params.sound_id);

  if (!data) {
    notFound();
  }

  const { soundId, text, sources } = data;

  return (
    <>
      <h1>Duke Nukem Says...</h1>
      <h2>{`"${text}"`}</h2>
      <AudioPlayer soundId={soundId} sources={sources} />
      <RandomSayings key={soundId} />
    </>
  );
};

export default PlayPage;

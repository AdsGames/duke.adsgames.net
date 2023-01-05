import * as fs from "fs";
import type { GetStaticProps } from "next";

import { Layout } from "@/components/Layout";
import { RandomSayings } from "@/components/RandomSayings";
import { SAYINGS } from "@/constants/sayings";
import * as gtag from "@/lib/gtag";

interface PlayPageProps {
  soundId: string;
  text: string;
  sources: {
    ext: string;
    mime: string;
    url: string;
  }[];
  key: string;
}

const SOUND_FORMATS = [
  { ext: "mp3", mime: "audio/mpeg" },
  { ext: "ogg", mime: "audio/ogg" },
];

const PlayPage: React.FC<PlayPageProps> = ({ soundId, text, sources }) => (
  <Layout
    description={`Duke Nukem Says "${text}". Play Duke Nukem quotes on Duke Nukem Says!`}
    title={text}
  >
    <h1>Duke Nukem Says...</h1>
    <h2>{`"${text}"`}</h2>

    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <audio
      autoPlay
      controls
      onPlay={() => {
        gtag.event("play_sound", {
          value: soundId,
        });
      }}
    >
      {sources.map(({ mime, url }) => (
        <source key={url} src={url} type={mime} />
      ))}

      <p>Your user agent does not support the HTML5 Audio element.</p>
    </audio>

    <RandomSayings key={soundId} />
  </Layout>
);

export const getStaticPaths = () => {
  const paths = SAYINGS.map((saying) => ({
    params: {
      sound_id: saying.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PlayPageProps> = ({ params }) => {
  const soundId = params?.sound_id as string;

  const saying = SAYINGS.find((elem) => elem.id === soundId);

  const sources = SOUND_FORMATS.map((format) => {
    const file = `/sounds/${format.ext}/${soundId}.${format.ext}`;
    const fullPath = `${__dirname}/../../../public${file}`;

    // Assert exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Missing file: ${file}`);
    }

    return {
      ...format,
      url: file,
    };
  });

  if (!saying) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      soundId: saying.id,
      text: saying.text,
      sources,
      key: saying.id,
    },
  };
};

export default PlayPage;

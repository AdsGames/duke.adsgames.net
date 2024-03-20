import * as fs from "fs";

import type { AudioSource } from "@/app/[sound_id]/audio-player";
import { SAYINGS } from "@/constants/sayings";

const SOUND_FORMATS = [
  { ext: "mp3", mime: "audio/mpeg" },
  { ext: "ogg", mime: "audio/ogg" },
];

export interface SayingData {
  soundId: string;
  text: string;
  sources: AudioSource[];
  key: string;
}

export const getSayingData = (soundId: string): SayingData | null => {
  const saying = SAYINGS.find((elem) => elem.id === soundId);

  if (!saying) {
    return null;
  }

  const sources = SOUND_FORMATS.map((format) => {
    const file = `/sounds/${format.ext}/${soundId}.${format.ext}`;
    const fullPath = `${__dirname}/../../../../public${file}`;

    // Assert exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Missing file: ${file}`);
    }

    return {
      ...format,
      url: file,
    };
  });

  return {
    soundId: saying.id,
    text: saying.text,
    sources,
    key: saying.id,
  };
};

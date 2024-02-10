"use client";

import { sendGAEvent } from "@next/third-parties/google";

/* eslint-disable jsx-a11y/media-has-caption */

export interface AudioSource {
  ext: string;
  mime: string;
  url: string;
}

interface AudioPlayerProps {
  readonly soundId: string;
  readonly sources: AudioSource[];
}

export const AudioPlayer = ({ soundId, sources }: AudioPlayerProps) => (
  <audio
    autoPlay
    controls
    onPlay={() => {
      sendGAEvent("play_sound", {
        value: soundId,
      });
    }}
  >
    {sources.map(({ mime, url }) => (
      <source key={url} src={url} type={mime} />
    ))}

    <p>Your user agent does not support the HTML5 Audio element.</p>
  </audio>
);

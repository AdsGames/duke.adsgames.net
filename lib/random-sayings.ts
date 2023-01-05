import { SAYINGS } from "../constants/sayings";

const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const randomSayings = (count: number) =>
  shuffle([...SAYINGS]).slice(0, count);

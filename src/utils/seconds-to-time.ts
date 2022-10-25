import { zeroLeft } from "./zero-left";

export function secondsToTime(seconds: number): string {
  const hours = zeroLeft(Math.floor((seconds / 3600)));
  const min = zeroLeft(Math.floor((seconds / 60) % 60));
  const sec = zeroLeft(Math.floor((seconds % 60) % 60));
  return `${hours}:${min}:${sec}`;
}

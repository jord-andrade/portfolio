import { ImageResponse } from "next/og";
import { SocialImage, socialImageSize } from "./social-image";

export const alt = "Jordan Andrade — Full-stack, data and AI";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SocialImage />, socialImageSize);
}

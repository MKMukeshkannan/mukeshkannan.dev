import { Inter, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

export const publicSans = Public_Sans({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--publicSans-font",
});

export const carlgine = localFont({
  src: "./CarlgineRegular.ttf",
  variable: "--carlgine-font",
});

export const monolo = localFont({
  src: "./manolo-mono.ttf",
  variable:"--manolo-font"
})

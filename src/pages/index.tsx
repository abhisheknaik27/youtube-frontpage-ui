import Image from "next/image";
import localFont from "next/font/local";
import VideoCard from "@/components/VideoCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <VideoCard
        title="Beast Mode - Official Lyric Video | Beast | Thalapathy Vijay | Sun
            Pictures | Nelson | Anirudh"
        image="thumbnail1.jpg"
        thumbImage="logo1.jpg"
        author="Sun TV"
        views="75M"
        timeStamp="2 years Ago"
      />
    </div>
  );
}

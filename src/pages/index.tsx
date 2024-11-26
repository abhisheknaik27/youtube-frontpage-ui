import Image from "next/image";
import localFont from "next/font/local";
import VideoCard from "@/components/VideoCard";
import VideoGrid from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";
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
      <Appbar />
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}

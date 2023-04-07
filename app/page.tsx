import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { ubuntu, overpass } from "@/data";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Header />
      <MainSection />
      <FooterSection />
    </main>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Header from "@/app/components/header";
import Banner from "@/app/components/banner";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <main>
      <BlurFade delay={0.25} inView>
        <Header />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Banner />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <About />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Projects />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Contact />
      </BlurFade>

      <Footer />
    </main>
  );
}

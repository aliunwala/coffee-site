"use client";
import SectionHeading from "@/components/sectionHeading";
// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroLanding from "@/components/heroLanding";
import FoodMenuItem from "@/components/foodMenuItem";
import FoodMenuSection from "@/components/foodMenuSection";
import Example from "@/components/example";
// import Example from "@/components/contactTest";
// import Example from "@/components/bentoGridExample";
import UpcomingLocations from "@/components/upcomingLocations";
import DrinkMenu from "@/components/DrinkMenu";
import HeroPopOver from "@/components/heroPopOver";
import AboutUs from "@/components/aboutUs";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <>
      <HeroPopOver></HeroPopOver>
      <DrinkMenu></DrinkMenu>
      <UpcomingLocations></UpcomingLocations>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </>
  );
}

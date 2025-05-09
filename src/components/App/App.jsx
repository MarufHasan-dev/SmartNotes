import React from "react";
import "./App.css";

// fonts
import "../../fonts/fonts.css";

// components
import Page from "../Page/Page";
import Body from "../Body";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
      </Header>
      <Body>
        <Hero />
        <Logos />
        <Testimonial
          quote="The real-time synchronization and AI-powered organization have made
        our workflow more efficient than ever."
          author="Sarah Johnson"
          company="TechSavvy Solutions"
        />
        <Features />
        <Testimonial
          quote="The real-time synchronization and AI-powered organization have made
        our workflow more efficient than ever."
          author="Sarah Johnson"
          company="TechSavvy Solutions"
        />
        <Video />
        <Testimonial
          quote="The real-time synchronization and AI-powered organization have made
        our workflow more efficient than ever."
          author="Sarah Johnson"
          company="TechSavvy Solutions"
        />
        <Pricing />
        <Testimonial
          quote="The real-time synchronization and AI-powered organization have made
        our workflow more efficient than ever."
          author="Sarah Johnson"
          company="TechSavvy Solutions"
        />
        <FAQ>
          <Accordion />
        </FAQ>
        <Testimonial
          quote="The real-time synchronization and AI-powered organization have made
        our workflow more efficient than ever."
          author="Sarah Johnson"
          company="TechSavvy Solutions"
        />
        <CTA />
      </Body>
      <Footer />
    </Page>
  );
}

export default App;

import Page from "./Page";
import Body from "./Body";
import Header from "./Header";
import Hero from "./Hero";
import Logos from "./Logos";
import Testimonial from "./Testimonial";
import Features from "./Features";
import Video from "./Video";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";
import Accordion from "./Accordion";
import Navigation from "./Navigation";

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

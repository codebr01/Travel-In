import { Header } from "../home/header";
import { ContactInfoSection } from "./contact-info-section";
import { ContactFormSection } from "./contact-form-section";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";

export function ContatoPage() {
  return (
    <> 
      <Header/>

      <HeroSection/>

      <ContactFormSection/>

      <ContactInfoSection/>

      <Footer/>

    </>
  );
}

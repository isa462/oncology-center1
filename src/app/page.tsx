import Header from "../widgets/header/page";
import Hero from '../shared/components/hero/page';
import Expandablet from "@/shared/components/conferenceInfo/Expandablet";
import ConferenceOpport from "@/shared/components/Opportunities/ConferenceOpport";
import DataConference from '@/shared/components/DataConference/page'
import SponsorsSlider from "@/shared/components/SponsorsSlider/page";
import ContactsSection from "@/shared/components/ContactsSection/page";
import Footer from "@/widgets/footer/page";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Expandablet/>
      <ConferenceOpport/>
      <DataConference/>
      <SponsorsSlider/>
      <ContactsSection/>
      <Footer/>
    </div>
  );
}

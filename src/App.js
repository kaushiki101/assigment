import "./App.css";
import Banner from "./components/banner";
import CarouselBlock from "./components/carousel";
import Header from "./components/header";
import SectionA from "./components/section-a";
import SectionB from "./components/section-b";
import SubHeader from "./components/sub-header";
import { Testimonial } from "./components/testimonial";
import SectionC from "./components/section-c";
import SectionD from "./components/section-d";

function App() {
  return (
    <>
      <main>
        <Banner />
        <Header />
        <CarouselBlock />
      </main>
      <SubHeader />
      <SectionA />
      <SectionB />
      <SectionC />
      <Testimonial />
      <SectionD />
    </>
  );
}

export default App;

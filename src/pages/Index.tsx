
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTrips from "@/components/FeaturedTrips";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import FixedDepartures from "@/components/FixedDepartures";
import LuxuryTours from "@/components/LuxuryTours";
import TripOfTheMonth from "@/components/TripOfTheMonth";
import LatestBlogs from "@/components/LatestBlogs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedTrips />
      <WhyChooseUs />
      <Destinations />
      <FixedDepartures />
      <LuxuryTours />
      <TripOfTheMonth />
      <LatestBlogs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

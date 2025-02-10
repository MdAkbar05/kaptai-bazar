import React from "react";

import "react-toastify/dist/ReactToastify.css";

import HeroSection from "../../components/hero-section";
import Features from "../../components/features";

import Maps from "../../components/maps/Maps";
import TestimonialSlider from "../Testimonials";
import Categories from "../Popular-Categories";
import ContactInfo from "../Contacts/ContactInfo";

import MediaFeedback from "../../components/Recent-Products/";
import ContactForm from "../Contacts/ContactForm";
import BusinessHours from "../../components/BusinessHour";
import Category from "../../components/category";

import PopularCategory from "../../components/Popular-category";
import PopularNow from "../../components/popular-now/PopularProducts";
const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroSection />

      <Features />
      <PopularNow />
      <Category />
      <MediaFeedback />

      <PopularCategory />
      <Categories />
      <TestimonialSlider />
      <BusinessHours />
      <ContactInfo />
      <Maps />
      <ContactForm />
    </div>
  );
};

export default Home;

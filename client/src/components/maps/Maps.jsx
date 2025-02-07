import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import title from "./imgs/title.png";

const Maps = () => {
  return (
    <section className="bg-gray-50 py-16 space-y-6">
      <h2 className="sm:text-lg md:text-3xl font-bold text-primary text-center mb-8">
        Locate Our Store
      </h2>
      {/* Horizontal Line */}
      <hr className=" w-24 mx-auto border-primary border-2 mb-12" />

      {/* Google Map Embed */}
      <div className="flex justify-center items-center">
        <iframe
          title="Google Map Location"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53772.89269463279!2d91.9928608!3d21.43665675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e1!3m2!1sen!2sbd!4v1738942742097!5m2!1sen!2sbd"
          className="rounded-md shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Maps;

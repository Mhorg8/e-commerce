import React from "react";
import HeadingSection from "../components/HeadingSection";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="bg-neutral-200 rounded-xl p-5 mt-10">
        <HeadingSection text="Our Contact Information" />

        <ul className="px-5 py-2 grid grid-cols-12 gap-4 mt-10">
          <li className="contact-container">
            <h4 className="contact-title">Location</h4>
            <p className="contact-text">
              123 Maplewood Lane Springfield, IL 62704 USA
            </p>
          </li>
          <li className="contact-container">
            <h4 className="contact-title">Phone</h4>
            <p className="contact-text">+98 933 405 55 39</p>
          </li>
          <li className="contact-container col-span-12 md:col-span-4">
            <h4 className="contact-title">Email</h4>
            <p className="contact-text">mohammadalirezaie081@gmail.com</p>
          </li>
          <li className="contact-container">
            <h4 className="contact-title">Owner</h4>
            <p className="contact-text">Mohammad hossein</p>
          </li>
          <li className="contact-container">
            <h4 className="contact-title">CO-Founder</h4>
            <p className="contact-text">Mahdi karimi</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;

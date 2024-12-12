"use client";
import Header from "./Header";
import ContactPage from "./contact";
import Trust from "./Trust";
import FAQAccordion from "./FAQItem";

export default () => {
  return (
    <div>
      <div className="bg-white dark:bg-black">
        <Header />
        <ContactPage />
        <FAQAccordion />
        <Trust />
      </div>
    </div>
  );
};

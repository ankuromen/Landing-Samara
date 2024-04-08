import {React,useEffect} from "react";
import ContactContent from "../components/ContactContent";
import ContactForm from "../components/ContactForm";


const AboutPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <ContactContent/>
      <ContactForm/>
    </div>
  );
};

export default AboutPage;

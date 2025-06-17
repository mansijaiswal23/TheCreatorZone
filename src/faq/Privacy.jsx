import React, {  useEffect } from "react";
import FixedComponent from "../components/FixedComponent";
import { useLayout } from '../context/LayoutContext';

const Privacy = () => {
      const { setShowFixedComponent } = useLayout();
    
      
      useEffect(() => {
        setShowFixedComponent(false);
        return () => setShowFixedComponent(true);
      }, [setShowFixedComponent]);

  return (
    <div className="bg-white text-gray-800 px-6 md:px-24 py-12">
      <h1 className="text-4xl font-serif font-semibold mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-600 mb-6">Last updated: November 18, 2024</p>

      <p className="mb-4">
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure
        of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>

      <p className="mb-8">
        We use Your Personal data to provide and improve the Service. By using the Service, You agree
        to the collection and use of information in accordance with this Privacy Policy. This Privacy
        Policy has been created with the help of the{" "}
        <span className="text-blue-600 underline">Privacy Policy Generator</span>.
      </p>

      <h2 className="text-3xl font-serif font-semibold mt-10 mb-4">Interpretation and Definitions</h2>

      <h3 className="text-2xl font-serif font-semibold mb-2">Interpretation</h3>
      <p className="mb-6">
        The words of which the initial letter is capitalized have meanings defined under the following
        conditions. The following definitions shall have the same meaning regardless of whether they
        appear in singular or in plural.
      </p>

      <h3 className="text-2xl font-serif font-semibold mb-2">Definitions</h3>
      <p className="mb-4">For the purposes of this Privacy Policy:</p>

      <ul className="list-disc pl-6 list-inside space-y-2">
        <li>
          <span className="font-bold ">Account</span> means a unique account created for You to access our Service or parts of our Service.
        </li>
        <li>
          <span className="font-bold ">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party.
        </li>
        <li>
          <span className="font-bold">Company</span> (referred to as either "the Company", "We", "Us" or "Our") refers to Mahatmaji Technical, 652E, GALI NUMBER 7, GOVINDPURI, NEW DELHI, DELHI, INDIA – 110019.
        </li>
        <li>
          <span className="font-semibold">Cookies</span> are small files placed on Your device by a website, containing details of Your browsing history.
        </li>
        <li>
          <span className="font-semibold">Country</span> refers to: Delhi, India.
        </li>
        <li>
          <span className="font-semibold">Device</span> means any device that can access the Service such as a computer, cellphone, or tablet.
        </li>
        <li>
          <span className="font-semibold">Personal Data</span> is any information that relates to an identified or identifiable individual.
        </li>
        <li>
          <span className="font-semibold">Service</span> refers to the Website.
        </li>
        <li>
          <span className="font-semibold">Service Provider</span> refers to third-party companies or individuals employed by the Company to facilitate the Service.
        </li>
        <li>
          <span className="font-semibold">Usage Data</span> refers to data collected automatically from the Service or from the Service infrastructure.
        </li>
        <li>
          <span className="font-semibold">Website</span>refers to The Creator Plus, accessible from https://thecreatorplus.com/
        </li>
        <li>
          <span className="font-semibold">You</span>  means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
      </ul>

            <h1 className="text-3xl font-serif text-gray-700 font-semibold mb-4 mt-4">Collecting and Using Your Personal Data
 </h1>
 <h2 className="text-xl font-serif  mb-4">Types of Data Collected
</h2>
<h4 className="text-l mb-4">Personal Data</h4>
<p className="text-gray-500 mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
      <ul className="list-disc text-gray-500 pl-6 list-inside space-y-2 mb-4">
        <li>
          <span className="font-bold ">Email address</span>
           </li>
        <li>
          <span className="font-bold ">First name and last name</span>
           </li>
        <li>
          <span className="font-bold ">Phone number</span>
           </li>
        <li>
          <span className="font-bold ">Usage Data</span>
           </li>
        </ul>

    <h4 className="text-l mb-4">Usage Data</h4>
    <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
    <p className="mb-4">Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
    <p className="mb-4">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
    <p className="mb-4">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

    <h4 className="text-l mb-4">Tracking Technologies and Cookies</h4>
    <p className="mb-4">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
          <ul className="list-disc text-gray-500 pl-6 list-inside space-y-2 mb-4">
            <li>
          <span className="font-bold ">Cookies or Browser Cookies.</span>  A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
        </li>
        <li>
            <span className="font-bold">Web Beacons.</span>Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
        </li>
        <p className="mb-4">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on TermsFeed website article.</p>
        </ul>
        <p className="mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
              <ul className="list-disc pl-6 list-inside space-y-2">
                <p>Necessary / Essential Cookies</p>
                <p>Type: Session Cookies</p>
                <p>Administered by: Us</p>
                </ul>

    </div>
  );
};

export default Privacy;

import React, {  useEffect } from "react";
import FixedComponent from "../components/FixedComponent";
import { useLayout } from '../context/LayoutContext';
const Disclaimer = () => {
    const { setShowFixedComponent } = useLayout();
    
      
      useEffect(() => {
        setShowFixedComponent(false);
        return () => setShowFixedComponent(true);
      }, [setShowFixedComponent]);
      
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Disclaimer</h1>
        
        <p className="text-sm text-gray-500 mb-8 text-right">Last updated: June 18, 2025</p>
        
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-serif">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interpretation and Definitions</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Interpretation</h3>
            <p className="text-gray-600 mb-6">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. 
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Definitions</h3>
            <p className="text-gray-600 mb-4">
              For the purposes of this Disclaimer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>
                <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to 
                https://thecreatorplus.com/, 652E, GALI NUMBER 7, GOVINDPURI, NEW DELHI, DELHI, INDIA – 110019.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of 
                which such individual is accessing or using the Service, as applicable.
              </li>
              <li>
                <strong>Website</strong> refers to The Creator Plus, accessible from https://thecreatorplus.com/
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <p className="text-gray-600 mb-6">
              The information contained on the Service is for general information purposes only.
            </p>
            <p className="text-gray-600 mb-6">
              The Company assumes no responsibility for errors or omissions in the contents of the Service.
            </p>
            <p className="text-gray-600 mb-6">
              In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the <strong>Disclaimer Generator</strong>.
            </p>
            <p className="text-gray-600 mb-6">
              The Company does not warrant that the Service is free of viruses or other harmful components.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
            </p>
            <p className="text-gray-600 mb-6">
              Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Errors and Omissions Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
            </p>
            <p className="text-gray-600 mb-6">
              The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fair Use Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            <p className="text-gray-600 mb-6">
              The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
            </p>
            <p className="text-gray-600 mb-6">
              If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Views Expressed Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
            </p>
            <p className="text-gray-600 mb-6">
              Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Responsibility Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
            </p>
            <p className="text-gray-600 mb-6">
              In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">"Use at Your Own Risk" Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
            </p>
            <p className="text-gray-600 mb-6">
              The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Disclaimer, You can contact Us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>By email: wemakecreators@gmail.com</li>
            </ul>
          </section>
        </div>
    </div>
  );
};

export default Disclaimer;
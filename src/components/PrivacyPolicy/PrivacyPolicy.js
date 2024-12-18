import React from 'react';
import "./PrivacyPolicy.css"

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container mt-5 font-fam mb-5">
      <h1 className="text-center fw-bold">Privacy policy</h1>
      <div className="mt-4">
        <h3>Privacy Policies:</h3>
        <p style={{fontSize: '1.5rem'}}>
          Around here at TFB, the protection of our clients is critical to us. This protection strategy frames the kind of private data that is
          gotten and gathered by thefurrybaker.com and the way things are utilized. Would it be a good idea for us request that you give specific
          data by which you can be distinguished while utilizing this site, you can have confidence that it might be utilized as per this security
          proclamation.
        </p>
        <h4>Data YOU Wilfully SUBMIT TO THE Site</h4>
        <p style={{fontSize: '20px'}}>
          We might gather individual data from you, for example, your name, postal location or email address. For instance, you may intentionally
          submit data to The Furry Baker, by leaving a remark, buying into a pamphlet, or presenting a contact structure. You can withdraw whenever.
        </p>
        <h4>Data Gathered Naturally</h4>
        <p style={{fontSize: '20px'}}>
          We naturally gather specific data about you and the gadget with which you access thefurrybaker.com. For instance, when you utilize this
          webpage, we will log your IP address, working framework type, program type, alluding site, pages you saw, and the dates/times when you
          visited thefurrybaker.com. We may likewise gather data when you use thefurrybaker.com to make a purchase or fill out a form.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from 'react';
import './Testimonial.css'; // Optional for additional custom styles

const TestimonialSection = () => {
  return (
    <div className="container py-4 text-center testimonial">
      {/* Section Title */}
      <h6 className="text-danger mb-3 ">TESTIMONIAL</h6>
      <h1 className="mb-3">Hear From Our Happy Pet Parents</h1>
      <p className="mb-5">
        See what our customers are saying about our delicious, healthy, and pet-approved treats!
      </p>

      {/* Testimonial Grid */}
      <div className="row">
        {/* Testimonial 1 */}
        <div className="col-md-4 mb-4">
          <div className="h-100">
            <div className="mb-2">
              <span className="text-warning fs-5">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <p className="text-muted">
              My golden retriever, Max, absolutely loves the peanut butter biscuits! I feel great
              knowing they are healthy and made with natural ingredients. Thank you, Pet Bakers!
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://i.pravatar.cc/50?img=20"
                alt="Emily Johnson"
                className="rounded-circle me-2"
              />
              <div className="text-start">
                <h6 className="mb-0">Priyanka Singh</h6>
                <p className="text-muted small">Pet Parent of Max</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="col-md-4 mb-4">
          <div className="h-100">
            <div className="mb-2">
              <span className="text-warning fs-5">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <p className="text-muted">
              Our pug, Bella, adores the pupcakes! She gets so excited every time we bring them out.
              Pet Bakers has made every special occasion even more memorable.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://i.pravatar.cc/50?img=33"
                alt="David Wilson"
                className="rounded-circle me-2"
              />
              <div className="text-start">
                <h6 className="mb-0">Aanant Sharma</h6>
                <p className="text-muted small">Pet Parent of Bella</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="col-md-4 mb-4">
          <div className="h-100">
            <div className="mb-2">
              <span className="text-warning fs-5">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
            </div>
            <p className="text-muted">
              I ordered the birthday cake for my Labrador, Buddy, and it was perfect! The cake was
              beautiful, tasty, and pet-friendly. Highly recommend Pet Bakers for all pet treats!
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://i.pravatar.cc/50?img=5"
                alt="Sarah Thompson"
                className="rounded-circle me-2"
              />
              <div className="text-start">
                <h6 className="mb-0">Ankita Gupta</h6>
                <p className="text-muted small">Pet Parent of Buddy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

import React from "react";
import './RefundPolicy.css'

const RefundPolicy = () => {
  return (
    <div className="refund-container text-center py-5 fs-6 font-fam REFUND">
      <h5 className="text-center fs-1 fw-bold">Refund policy</h5>
      <div className="mt-4 text-start">
        <p>
          For any inquiry or undoing of request kindly reach us on{" "}
          <strong>+91 8447774678 / 9289061497</strong>. On the off chance that
          the readiness of your request has begun, we will not be able to drop
          the request. There will be no discounts given in such an occasion.
        </p>
        <p>
          When you demand the undoing of your request, it will require
          investment to drop the request and start a discount. You will be told
          of something very similar by email/SMS/WhatsApp.
        </p>
        <p>
          In case of any harm during the conveyance the cash won't be discounted
          back.
        </p>
        <p>
          We don't provide refund of the money. In case of cancelling the order
          24 hours prior, you will get a coupon code which will be valid for 2
          months and can be used. The discount coupon code you will get via
          WhatsApp or Gmail.
        </p>
        <p className="fw-bold">We do not have refund or return policy.</p>
      </div>
    </div>
  );
};

export default RefundPolicy;

import React, { useState } from "react";
import "./Faq.css";
import { LuCake } from "react-icons/lu";

const Faq = () => {
  const faqs = [
    {
      question: "How should I go about placing my order?",
      answer: `Browse through our designs and flavors, choose the one your pet will love, fill in your details, complete the payment, and you're all set!
               Your pet's favorite cake or cupcakes will be delivered right to your door.`,
    },
    {
      question: "When should I place my order?",
      answer: `When placing your order, you'll choose your preferred delivery date during checkout. You can order whenever it’s most convenient for you!
                We bake your items fresh within 24 hours and ship them at the perfect time to ensure they arrive as fresh as possible.
                Our standard lead time is about 2 days, but we’ll do our best to accommodate last-minute orders, which can be shipped within 3 hours.`,
    },
    {
      question: "How long will the cake stay fresh?",
      answer:
        `For the best taste, enjoy the cake within 2-3 days of delivery.
        Store it in the fridge, and if it becomes too firm, a quick 15-20 second microwave session will restore its moisture and softness.
        Keep it away from heat, humidity, and direct sunlight.
        Always refrigerate our products.`,
    },
    {
      question: "Can I eat my pet's cake?",
      answer:
        `Absolutely! Since we use human-grade ingredients, you're welcome to take a bite—just as long as your pet is willing to share!
        Keep in mind, the cake is sugar-free, so the flavors and textures might not be as appealing to you, but rest assured, your pet will love it!`,
    },
    {
      question: "Can I choose the cake/design of the cake?",
      answer:
        `When you pick a pet cake from our collections, you’ll receive exactly what you see.
        However, if you’d like something customized, feel free to reach out to us on WhatsApp at 8447774678 with your request.`,
    },
    {
      question: "Can we customize the ingredients for food allergies?",
      answer:
        `If your pet has any allergies, please inform us, and we’ll adjust our recipes to meet their dietary needs.`,
    },
    {
      question: "How much should I feed my pet?",
      answer:
        `Trust your own judgment, as you know your pet best.
        We suggest adjusting your pet’s regular meal portions when serving them our cakes. We also recommend dividing the cake into 2-3 servings to ensure they enjoy it without overindulging.`,
    },
    {
      question: "Do you deliver? Is there an additional cost?",
      answer:
        `We offer delivery throughout Delhi NCR.
        There is a delivery fee, which will be included in the total amount at checkout.`,
    },
    {
      question: "How do I make a payment?",
      answer:
        `We accept Google Pay, Paytm, UPI, and bank transfers. All orders must be prepaid to confirm the purchase.`,
    },
  ];

  return (
    <div className="font-fam">
      {/* FAQ Header */}
      <div className="faq-container text-center py-5 fs-6">
        <h5 className="fw-bold fs-1 text-start mb-4">FAQ's</h5>
        <p style={{ fontSize: "20px" }}>
          Celebrate your adorable and mischievous pet with our selection of
          treats and snacks! <br />
          Explore our range of cakes, cupcakes, treats, and cute accessories to
          spoil your furry friend.
        </p>
        <p style={{ fontSize: "20px" }}>
          Every item we bake is completely safe for pets, gluten-free, and
          handcrafted with high-quality, responsibly-sourced ingredients—the
          same ones we feed our own pets!
        </p>
      </div>

      {/* Cake's FAQ */}
      <div className="bg-teal py-5 text-white">
        <div className="faq-container">
          <h2 className="text-center mb-4 fs-1">Cake's FAQ</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    <LuCake className="me-2" />
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

"use client";
import { useState } from "react";
import handleSubmit from "../emailhandle/route";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  return (
    <form className="p-8 flex flex-col sm:w-full  md-width-40 lg:w-2/6" onSubmit={handleSubmit}>
      <h1 className="font-bold text-3xl mb-6">
        <span className="text-main-green">GET</span> IN TOUCH
      </h1>
      <div className="email block mb-2">
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Email Address"
          className="borderWidth-1 rounded-md p-2 w-full outline-none border-gray"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="block phone mb-2">
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
          placeholder="Phone Number"
          className="borderWidth-1 rounded-md p-2 w-full outline-none border-gray"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="name block ">
        <div className="mb-2">
          <input
            id="frm-first"
            type="text"
            name="name"
            autoComplete="given-name"
            required
            placeholder="Name"
            className="borderWidth-1 rounded-md p-2 w-full outline-none border-gray"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            id="frm-last"
            type="text"
            name="business"
            autoComplete="family-name"
            required
            placeholder="Business"
            className="borderWidth-1 rounded-md p-2 w-full outline-none border-gray"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
        </div>
      </div>
      <div className="message block flex items-center mb-6">
        <textarea
          className="borderWidth-1 rounded-md p-2 w-full outline-none border-gray"
          id="frm-message"
          rows="6"
          placeholder="Type Your Message Here"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="button block">
        <button
          className="bg-light-green cursor-pointer hover:bg-main-green w-fit h-fit p-5 pr-6 pl-6 text-xs font-bold rounded-md z-10 transition-all"
          type="submit"
          onClick={() => {
            const data = {
              email: email,
              message: message,
              phone: phone,
              name: name,
              business: business,
            };

            fetch("/api/sendgrid", {
              method: "post",
              body: JSON.stringify(data),
            });
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

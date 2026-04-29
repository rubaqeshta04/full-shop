import React, { useState, useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import PageTransition from "../../components/PageTransition";

export default function Contact() {
  const { showSnackbar } = useContext(CartContext) ?? {};
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("From Data:", fromData);
    showSnackbar({
      message: "Your message has been sent successfully!",
    });
    setFromData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-24 px-4 md:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have a question or need help? Send us a message and we will reply as
            soon as possible.
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={fromData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={fromData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={fromData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Order question, product inquiry, feedback..."
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={fromData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#0078c7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>

            <div className="rounded-3xl bg-blue-50 p-8 text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in touch
              </h2>
              <p className="mb-6 text-sm leading-7">
                You can also reach us through the following channels if you
                prefer direct contact.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p>support@ecommerce.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p>+1 234 567 890</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p>123 Commerce Street, Shop City, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

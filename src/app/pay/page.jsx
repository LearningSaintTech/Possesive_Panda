"use client";

import { useState } from "react";
import Footer from "../(Components)/Footer";

const Payment = () => {
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        throw new Error("Failed to load Razorpay SDK");
      }

      const response = await fetch("http://192.168.0.134:8081/pg/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: form.customerName,
          email: form.email,
          phoneNumber: form.phoneNumber,
          amount: form.amount,
        }),
      });

      const data = await response.json();

      const options = {
        key: "", // Replace with your Razorpay Key ID
        amount: data.amount * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: data.razorpayOrderId,
        handler: function (response) {
          // After successful payment, redirect to the specified URL
          window.location.href = "https://www.possesivepanda.com";
        },
        prefill: {
          name: form.customerName,
          email: form.email,
          contact: form.phoneNumber,
        },
        theme: {
          color: "#00111a",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Error in payment:", err);
      alert("Something went wrong during the payment process.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="min-h-screen bg-[#00111a] flex items-center justify-center p-4">
        {/* Enhanced background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/20 via-[#002B50]/10 to-[#00111a] animate-pulse"
            style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-indigo-900/10" />
        </div>

        <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/10 mt-20 hover:shadow-indigo-500/10 transition-all duration-500">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Make Payment
            </h1>
            <p className="text-gray-400">
              Enter your details to complete the payment
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="customerName"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Full Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 bg-white/[0.07] border border-white/10 rounded-lg focus:ring-1 focus:ring-white/25 focus:border-white/25 outline-none transition-colors text-white placeholder-gray-400 hover:bg-white/[0.09]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="xyz@example.com"
                required
                className="w-full px-4 py-2 bg-white/[0.07] border border-white/10 rounded-lg focus:ring-1 focus:ring-white/25 focus:border-white/25 outline-none transition-colors text-white placeholder-gray-400 hover:bg-white/[0.09]"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="+91 1234567890"
                required
                className="w-full px-4 py-2 bg-white/[0.07] border border-white/10 rounded-lg focus:ring-1 focus:ring-white/25 focus:border-white/25 outline-none transition-colors text-white placeholder-gray-400 hover:bg-white/[0.09]"
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Amount (INR)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                required
                min="1"
                className="w-full px-4 py-2 bg-white/[0.07] border border-white/10 rounded-lg focus:ring-1 focus:ring-white/25 focus:border-white/25 outline-none transition-colors text-white placeholder-gray-400 hover:bg-white/[0.09]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600/80 to-indigo-600/80 hover:from-blue-600/90 hover:to-indigo-600/90 text-white py-3 px-4 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Pay Now
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
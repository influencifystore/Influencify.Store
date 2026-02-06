import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/* =======================
   PLANS
======================= */
const PLANS = [
  {
    name: "Silver",
    price: "₹799",
    features: [
      "Verified badge",
      "Profile visibility boost",
      "Brand access",
    ],
  },
  {
    name: "Gold",
    price: "₹3999",
    features: [
      "High visibility",
      "More brand deals",
      "Priority support",
    ],
  },
  {
    name: "Influencer Blue",
    price: "₹20999",
    features: [
      "Maximum exposure",
      "Dedicated manager",
      "Top brand access",
    ],
  },
];

/* =======================
   CREATORS (SOCIAL PROOF)
======================= */
const creators = [
  { name: "Riya Verma", niche: "Beauty", city: "Delhi", followers: "420", plan: "Silver" },
  { name: "Aman Sharma", niche: "Tech", city: "Noida", followers: "8.2K", plan: "Gold" },
  { name: "Neha Singh", niche: "Fitness", city: "Mumbai", followers: "1.1K", plan: "Silver" },
  { name: "Rahul Khanna", niche: "Food", city: "Delhi", followers: "14K", plan: "Gold" },
  { name: "Simran Kaur", niche: "Lifestyle", city: "Chandigarh", followers: "670", plan: "Silver" },
  { name: "Rohit Tech", niche: "Tech", city: "Bangalore", followers: "22K", plan: "Blue" },
  { name: "Priya Joshi", niche: "Fashion", city: "Pune", followers: "3.4K", plan: "Gold" },
  { name: "Ananya Arts", niche: "Art", city: "Kolkata", followers: "380", plan: "Silver" },
  { name: "Foodie Rani", niche: "Food", city: "Lucknow", followers: "18K", plan: "Blue" },
  { name: "Isha Dance", niche: "Dance", city: "Mumbai", followers: "19K", plan: "Blue" },
  { name: "Kabir Travel", niche: "Travel", city: "Jaipur", followers: "2.1K", plan: "Gold" },
  { name: "Sneha Vlogs", niche: "Lifestyle", city: "Indore", followers: "540", plan: "Silver" },
  { name: "Fit Arjun", niche: "Fitness", city: "Patna", followers: "9K", plan: "Gold" },
  { name: "Makeup Muskan", niche: "Beauty", city: "Agra", followers: "1.8K", plan: "Silver" },
  { name: "Gaming Ayaan", niche: "Gaming", city: "Delhi", followers: "26K", plan: "Blue" },
  { name: "Crafty Nisha", niche: "DIY", city: "Surat", followers: "480", plan: "Silver" },
  { name: "Vlogger Sahil", niche: "Travel", city: "Manali", followers: "6K", plan: "Gold" },
  { name: "Food Trails", niche: "Food", city: "Amritsar", followers: "11K", plan: "Gold" },
  { name: "Urban Style", niche: "Fashion", city: "Gurgaon", followers: "4K", plan: "Silver" },
  { name: "MomLife Anita", niche: "Parenting", city: "Bhopal", followers: "720", plan: "Silver" },
];

export default function CreatorProfiles() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by Creators of Every Size
        </h1>
        <p className="text-gray-400">
          From under 500 followers to 40K+, creators across all niches grow with Influencify.
        </p>
      </div>

      {/* PLANS */}
      <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
        {PLANS.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="border border-gray-700 rounded-xl p-6 bg-white/5"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-3xl font-bold mb-4">{p.price}</p>

            <ul className="space-y-2 mb-6 text-sm text-gray-300">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <button
             onClick={() => window.location.assign("/payment")}
              className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Join Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* CREATORS LIST */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Creators Already Growing With Us
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {creators.map((c, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-gray-700"
            >
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-gray-400">
                  {c.niche} • {c.city}
                </p>
              </div>
              <div className="text-right text-sm">
                <p>{c.followers} followers</p>
                <p className="text-green-400">{c.plan} Plan</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST FOOTER */}
      <div className="text-center mt-16">
        <p className="text-xl md:text-2xl font-semibold">
          7,856+ INFLUENCIFY Members Already Registered
        </p>
        <p className="text-gray-400 mt-2">
          (Only BrandSetu Subscribers & Brands Can Access)
        </p>
      </div>
    </div>
  );
}
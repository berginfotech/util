import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const inputStyle =
  "w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm transition-all bg-gray-50";

const iconStyle = "absolute left-3 top-3.5 w-5 h-5 text-yellow-400 pointer-events-none";

export default function Compare() {
  const [step, setStep] = useState(1);
   const [comparisonType, setComparisonType] = useState("");
const [showError, setShowError] = useState(false);

  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);

  const handleNext = () => {
  if (step === 1 && !comparisonType) {
    alert("Please select what you want to compare.");
    return;
  }
  setStep(step + 1);
};

const handleBack = () => {
  setStep(step - 1);
};


  const next = () => step < 4 && setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.clientHeight);
    }
  }, [step]);

  const partners = [
  {
    name: "ActewAGL",
    logo: "/agl.jpg",
    benefits: [
      "Local, 100% Australian customer support",
      "Freedom with no lock-in contracts",
      "Manage your energy anytime with My.ActewAGL portal",
    ],
    link: "#",
  },
  {
    name: "AGL",
    logo: "/agl.jpg",
    benefits: [
      "Choose plans with built-in Netflix options",
      "Carbon-neutral energy choices",
      "Flexible, contract-free plans with variable rates",
    ],
    link: "#",
  },
  {
    name: "EnergyAustralia",
    logo: "/logos/energyaustralia-logo.png",
    benefits: [
      "Award-winning support you can rely on",
      "Leading the transition to renewables—no coal by 2040",
      "Full control of your account online, anytime",
    ],
    link: "#",
  },
  {
    name: "ENGIE",
    logo: "/logos/engie-logo.png",
    benefits: [
      "No exit fees—ever",
      "Exclusive rewards for NRMA members",
      "Eco-friendly, carbon-neutral energy options",
    ],
    link: "#",
  },
  {
    name: "Lumo Energy",
    logo: "lumo.png",
    benefits: [
      "100% Australian-owned and operated",
      "Unlock discounts from leading brands",
      "Stay on top of your usage with an easy-to-use app",
    ],
    link: "#",
  },
  {
    name: "Origin Energy",
    logo: "/origin.png",
    benefits: [
      "No lock-in contracts for complete flexibility",
      "Driving change with renewable energy investments",
      "Convenient mobile app for tracking and paying bills",
    ],
    link: "#",
  },
  {
    name: "Red Energy",
    logo: "/red energy.png",
    benefits: [
      "Proudly Australian-owned",
      "Award-winning service from an all-Australian team",
      "24/7 plan management and energy tracking via app",
    ],
    link: "#",
  },
];

  return (
    <>
    <section className="relative bg-yellow-50 text-black pt-10 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden shadow-lg">
  {/* Background Shape */}
  <svg
    className="absolute top-0 right-0 w-64 h-64 text-amber-100 -z-10 rotate-12 opacity-60"
    fill="currentColor"
    viewBox="0 0 200 200"
  >
    <path d="M36.2,-64.4C46.6,-55.9,54.8,-46.6,63.1,-36.4C71.5,-26.2,80,-15.1,80.6,-3.3C81.1,8.5,73.6,17.1,67.7,26.6C61.8,36.1,57.4,46.5,48.2,54.5C39.1,62.6,25.1,68.2,11.3,66.6C-2.5,65,-16,56.2,-25.3,46.4C-34.7,36.6,-39.8,25.9,-47.2,15.4C-54.5,4.9,-64,-5.3,-65.5,-15.8C-67,-26.3,-60.6,-37,-50.9,-45.2C-41.3,-53.3,-28.5,-59,-15.1,-65.2C-1.7,-71.3,12.3,-77,24.7,-73.1C37.2,-69.3,48.3,-55.8,36.2,-64.4Z" transform="translate(100 100)" />
  </svg>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 relative">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center md:text-left"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 drop-shadow-xl tracking-tight">
        Compare Electricity & Gas Plans Easily
      </h1>
      <p className="text-base sm:text-lg mb-6 text-gray-700 max-w-lg mx-auto md:mx-0">
        Save time and money by comparing Australia's top energy providers in just a few minutes.
      </p>

      {/* Providers */}
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-emerald-800">Our Range of Providers</h2>
        <p className="text-emerald-700 text-sm mt-2 max-w-md mx-auto md:mx-0">
          We work with Australia’s top providers to bring you great deals on energy, insurance and more.
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden mt-6">
          <div className="animate-marquee flex gap-8 sm:gap-10 py-4 w-max">
            {[...Array(2)].flatMap(() =>
              [
                { name: "AGL", logo: "/agl.jpg" },
                { name: "Origin", logo: "/origin.png" },
                { name: "Red Energy", logo: "/red energy.png" },
                { name: "Lumo", logo: "/lumo.png" },
                { name: "HCF", logo: "/hcf.png" },
                { name: "Latrobe", logo: "/latrobe.png" },
              ].map(({ name, logo }, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition">
                    <img src={logo} alt={name} className="h-10 sm:h-12 w-auto object-contain" />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-emerald-800 text-center">{name}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button
            onClick={scrollToForm}
            className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition hover:scale-105 active:scale-95"
          >
            Start Comparing
          </button>
        </div>
      </div>
    </motion.div>
    
{/* Right Side - Image with Overlayed Step Text */}
<div className="rounded-3xl overflow-hidden border-8 border-yellow-200 shadow-2xl">
  {/* Step Guide Section */}
  <div className="mt-12 text-center"> {/* 👈 Add text-center here */}
    <h3 className="text-2xl font-bold text-green mb-6">
      Your Easy Energy Switch in 4 Simple Steps
    </h3>

    {/* Step Buttons */}
    <div className="flex gap-3 mb-6 flex-wrap justify-center">
      {[1, 2, 3, 4].map((n) => (
        <button
          key={n}
          onClick={() => setStep(n)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            step === n
              ? "bg-yellow-500 text-white shadow-md"
              : "bg-white text-yellow-600 border border-yellow-300 hover:bg-yellow-100"
          }`}
        >
          Step {n}
        </button>
      ))}
    </div>

    {/* Image with Overlay Text */}
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
      <img
        src={`./step${step}.jpg`}
        alt={`Step ${step}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6 backdrop-blur-sm">
        {step === 1 && (
          <p>
            <strong>Start with a quick intro:</strong> Tell us a bit about your household and what you’re looking for. It only takes a minute!
          </p>
        )}
        {step === 2 && (
          <p>
            <strong>Review your matches:</strong> We’ll show you tailored energy plans based on your needs — whether you're after savings, sustainability, or flexibility.
          </p>
        )}
        {step === 3 && (
          <p>
            <strong>Choose your best fit:</strong> Select the plan that works for you, and switch with just a few clicks or get guidance from our team.
          </p>
        )}
        {step === 4 && (
          <p>
            <strong>Sit back and relax:</strong> We’ll take care of the switch from start to finish. No paperwork, no hassle — just seamless setup.
          </p>
        )}
      </div>
    </div>
  </div>
</div>


</div>
        
        {/* Marquee CSS */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

    {/* Form Section */}
<section id="compare-form" className="bg-white pt-8 pb-16 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Left Image Synced to Form Height */}
    <motion.div
      style={{ height: formHeight || "auto" }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl overflow-hidden border-8 border-yellow-100 shadow-2xl flex justify-center"
    >
      <img
        src="/compare1.jpg"
        alt="Energy Comparison"
        className="object-cover w-full h-full max-h-[600px] md:min-h-[500px]"
      />
    </motion.div>

    {/* Right Form */}
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 w-full flex flex-col"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-wide text-center md:text-left">
        Compare & Save on Energy Bills
      </h2>

      {/* Step Circles */}
      <div className="flex gap-3 sm:gap-4 mb-8 justify-center md:justify-start flex-wrap">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-base sm:text-lg font-bold cursor-pointer select-none transition-all duration-300 ${
              step === n
                ? "bg-yellow-400 text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-yellow-200 hover:text-yellow-600"
            }`}
            onClick={() => setStep(n)}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Step Content with Animation */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6 flex-grow"
      >
  
      {step === 1 && (
  <>
    <h3 className="text-xl font-semibold text-yellow-600 mb-4">Step 1: Register</h3>

    <label className="font-medium mb-1">
      Register For <span className="text-red-500">*</span>
    </label>
    <select
      className={`${inputStyle} ${showError && !comparisonType ? 'border-red-500' : ''}`}
      value={comparisonType}
      onChange={(e) => setComparisonType(e.target.value)}
      required
    >
      <option value="">Select what you want to compare</option>
      <option value="Electricity">Electricity</option>
      <option value="Gas">Gas</option>
      <option value="Both">Electricity & Gas</option>
      <option value="Broadband">Broadband</option>
    </select>

    {showError && !comparisonType && (
      <p className="text-red-500 text-sm mt-1">This field is required.</p>
    )}
 <select className={inputStyle}>
                <option>Select for what you are looking for ?</option>
                <option>Commercial</option>
                <option>Residential</option>
              </select>
    <input type="text" placeholder="Your Full Name" className={inputStyle} required />
    <input type="email" placeholder="Your Email" className={inputStyle} required />
    <input type="tel" placeholder="Your Phone Number" className={inputStyle} required />
    <input type="text" placeholder="Postcode" className={inputStyle} required />

    <button
      onClick={() => {
        if (!comparisonType) {
          setShowError(true);
        } else {
          setShowError(false);
          handleNext();
        }
      }}
      className="px-4 py-2 bg-yellow-600 text-white rounded"
    >
      Next
    </button>
  </>
)}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">Step 2: Usage Details</h3>

          {(comparisonType === "Electricity" || comparisonType === "Both") && (
            <>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Electricity Usage</h4>
              <select className={inputStyle}>
                <option>Select Existing Electricity Retailer</option>
                <option>Retailer A</option>
                <option>Retailer B</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                {["Peak", "Off Peak", "Shoulder", "Controlled Load", "Solar"].map((label) => (
                  <React.Fragment key={label}>
                    <input type="number" min="0" placeholder={`${label} Usage (kWh)`} className={inputStyle} />
                    <input type="number" min="0" placeholder={`${label} Rate (c/kWh)`} className={inputStyle} />
                  </React.Fragment>
                ))}
              </div>
              <input type="number" min="0" placeholder="Electricity Monthly Spend ($)" className={inputStyle} />
            </>
          )}

          {(comparisonType === "Gas" || comparisonType === "Both") && (
            <>
              <h4 className="text-lg font-medium text-gray-700 mt-6 mb-2">Gas Usage</h4>
              <select className={inputStyle}>
                <option>Select Existing Gas Retailer</option>
                <option>Retailer X</option>
                <option>Retailer Y</option>
              </select>
              <input type="number" min="0" placeholder="Gas Monthly Spend ($)" className={inputStyle} />
            </>
          )}

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button onClick={handleNext} className="px-4 py-2 bg-yellow-600 text-white rounded">
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <>
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">Step 3: Account Details</h3>

          {(comparisonType === "Electricity" || comparisonType === "Both") && (
            <input type="text" maxLength={11} placeholder="NMI (11-digit number)" className={inputStyle} />
          )}
          {(comparisonType === "Gas" || comparisonType === "Both") && (
            <input type="text" maxLength={11} placeholder="MIRN (11-digit number)" className={inputStyle} />
          )}

          <select className={inputStyle}>
            <option value="">Are you a pensioner?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <select className={inputStyle}>
            <option value="">Do you have solar panels?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <select className={inputStyle}>
            <option value="">Do you have a life support machine?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button onClick={handleNext} className="px-4 py-2 bg-yellow-600 text-white rounded">
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <>
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">Step 4: Contact & Upload</h3>

          {comparisonType === "Electricity" || comparisonType === "Both" ? (
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Upload Electricity Bill
              <input type="file" className="mt-2 w-full rounded-md border border-gray-300 p-2" />
            </label>
          ) : null}

          {comparisonType === "Gas" || comparisonType === "Both" ? (
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Upload Gas Bill
              <input type="file" className="mt-2 w-full rounded-md border border-gray-300 p-2" />
            </label>
          ) : null}

          <label className="flex items-center gap-2 text-sm mt-5">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
            I agree to receive calls from UtilityDeals.
          </label>

          <p className="text-xs text-gray-600 mt-2">
            By ticking this box, I provide my express consent for a UtilityDeals representative to contact me
            to review my electricity and/or gas bills and negotiate a supply and sale contract.
          </p>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button onClick={handleNext} className="px-4 py-2 bg-yellow-600 text-white rounded">
              Submit
            </button>
          </div>
        </>
      )}
    
  

</motion.div>
            
            
          </motion.div>
        </div>
      </section>
 <section className="bg-yellow-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-24 transition-colors duration-500">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight leading-snug">
    Discover the Benefits of Our Trusted Energy Partners
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
    {partners.map((partner, index) => (
      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300 ease-in-out p-5 sm:p-6 flex flex-col items-start group"
      >
        {/* Partner Logo and Name */}
        <div className="flex items-center gap-3 mb-4 w-full">
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="h-10 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 tracking-tight">
            {partner.name}
          </h3>
        </div>

        {/* Benefits List */}
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
          {partner.benefits.map((benefit, idx) => (
            <li key={idx} className="transition-all duration-200 group-hover:pl-2">
              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() =>
            document.getElementById("compare-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow hover:bg-blue-700 transition-all duration-300 group-hover:shadow-md"
        >
          Compare Plans
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    ))}
  </div>
</section>

    </>
  );
}

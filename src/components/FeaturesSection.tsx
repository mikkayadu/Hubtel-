import React, { useState } from 'react';
import SearchImage from '../assets/search-feature.png';
import DeliveryImage from '../assets/delivery-feature.png';
import PaymentImage from '../assets/payment-feature.png';

const features = [
  {
    id: 1,
    title: "Find whatever you want",
    description: "From A to Z stuff, services, bills and everyday essentials from nearby",
    image: SearchImage,
  },
  {
    id: 2,
    title: "Quick delivery in minutes",
    description: "Most orders deliver within 45 minutes. Track delivery every step of the way",
    image: DeliveryImage,
  },
  {
    id: 3,
    title: "Choose, pay and receive",
    description: "Find, pay with card or mobile wallet and receive your service/product in minutes",
    image: PaymentImage,
  }
];

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="bg-[#DBF7E0] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={activeFeature.image}
            alt={activeFeature.title}
            className="w-full max-w-lg mx-auto transition-all duration-300"
          />
        </div>
        
        <div className="md:w-1/2 space-y-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 relative ${
                activeFeature.id === feature.id ? 'bg-[#F5FBF9]' : 'bg-white hover:bg-[#F5FBF9]'
              }`}
              onMouseEnter={() => setActiveFeature(feature)}
            >
              {activeFeature.id === feature.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
              )}
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
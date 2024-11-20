import React from 'react';
import QRCode from '../assets/qr-code.svg';
import PhoneMockup from '../assets/phone-mockup.svg';

const DownloadSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Unlock a new level of convenience with the Hubtel app
          </h2>
          <a href="#" className="text-teal-500 hover:text-teal-600 mb-8 inline-block">
            Read more
          </a>
          <div className="mt-8">
            <img src={QRCode} alt="QR Code" className="w-40 mx-auto md:mx-0" />
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-end md:-mr-4">
          <img
            src={PhoneMockup}
            alt="Hubtel App"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

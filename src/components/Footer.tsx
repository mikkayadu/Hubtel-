import React from 'react';
import HubtelImg from '../assets/hubtel-footer.png';
import GooglePlay from '../assets/google-play.png';
import AppStore from '../assets/app-store.png';
import AppGallery from '../assets/huawei-download.png';
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF4CC] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={HubtelImg} alt="Hubtel" className="h-20" />
            </div>
            <p className="text-gray-500">
              For our communities;<br />
              for the good of all.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/leadership" className="text-gray-600 hover:text-teal-500">Leadership & Team</a></li>
              <li><a href="/join" className="text-gray-600 hover:text-teal-500">Join the Team</a></li>
              <li><a href="/stories" className="text-gray-600 hover:text-teal-500">Our Stories</a></li>
              <li><a href="/legal" className="text-gray-600 hover:text-teal-500">Legal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Other Services</h3>
            <ul className="space-y-3">
              <li><a href="/billing" className="text-gray-600 hover:text-teal-500">Premium Subscription Billing</a></li>
              <li><a href="/api" className="text-gray-600 hover:text-teal-500">Connect to APIs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Install the app</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="inline-block flex">
                <img src={GooglePlay} alt="" className='px-2 h-8' />
                <img src={AppStore} alt="" className='px-2 h-8'/>
                <img src={AppGallery} alt="" className='h-8' />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            ©2005 - 2024 <a href="#" className="text-teal-500">Hubtel</a>
          </div>
          <div className="flex items-center gap-8">
            <a href="/offices" className="text-teal-500 hover:text-teal-600">Our Offices</a>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                < FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
              < FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
              < CiLinkedin />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
              < FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
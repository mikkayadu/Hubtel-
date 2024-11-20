import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import HubtelLogo from '../assets/hubtel-logo.png'

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  dropdownItems?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "Make Orders",
      path: "/",
    },
    {
      label: "Take Payments",
      path: "/take-payments",
      dropdownItems: [
        { label: "Request Money from Anyone", path: "/request-money" },
        { label: "Charge Customers In-Store", path: "/in-store" },
        { label: "Integrate Online Checkout", path: "/online-checkout" }
      ]
    },
    {
      label: "Grow Revenues",
      path: "/grow-revenues",
      dropdownItems: [
        { label: "Hubtel for Schools", path: "/schools" },
        { label: "Hubtel for Hospitals", path: "/hospitals" },
        { label: "Hubtel for Government", path: "/government" },
        { label: "Hubtel for Retailers", path: "/retailers" }
      ]
    },
    {
      label: "Send SMS",
      path: "/send-sms"
    },
    {
      label: "Serve With Us",
      path: "/serve-with-us",
      dropdownItems: [
        { label: "Service Providers", path: "/service-providers" },
        { label: "Retailers", path: "/retailers-signup" },
        { label: "Riders", path: "/riders" }
      ]
    }
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white py-4 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to='/#'>
            <img src={HubtelLogo} alt="Hubtel Logo" className="h-8" />
          </Link>
          
          <ul className="flex space-x-12">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to={item.path}
                  className={`flex items-center text-gray-600 hover:text-teal-500 ${
                    item.label === 'Make Orders' ? 'border-b-2 border-teal-500 text-black font-medium pb-4' : ''
                  }`}
                >
                  {item.label}
                  {item.dropdownItems && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {item.dropdownItems && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
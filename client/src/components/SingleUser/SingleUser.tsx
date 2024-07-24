import { useState } from "react";

import PhoneIcon from "../../assets/phone.svg";
import WebsiteIcon from "../../assets/website.svg";
import CityIcon from "../../assets/city.svg";
import EmailIcon from "../../assets/email.svg";

export default function SingleUser() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr onClick={toggleAccordion} className="cursor-pointer">
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap">1</p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <div className="flex items-center">
            <p className="whitespace-no-wrap">John Doe</p>
          </div>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap">johny1</p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap">Company</p>
        </td>
      </tr>
      {isOpen && (
        <tr className="mx-auto">
          <td
            colSpan={4}
            className="border-b border-gray-200 bg-blue-100 px-5 py-5 text-sm"
          >
            <div className="grid grid-cols-2 gap-8 ">
              <div className="flex items-center">
                <img src={PhoneIcon} alt="Phone" className="h-5 w-5 mr-2" />
                <p>
                  <strong>Phone:</strong> 092382378
                </p>
              </div>
              <div className="flex items-center">
                <img src={CityIcon} alt="Phone" className="h-5 w-5 mr-2" />
                <p>
                  <strong>City:</strong> Sofia
                </p>
              </div>
              <div className="flex items-center">
                <img src={WebsiteIcon} alt="Website" className="h-5 w-5 mr-2" />
                <p>
                  <strong>Website:</strong> johndoe.com
                </p>
              </div>
              <div className="flex items-center">
                <img src={EmailIcon} alt="Email" className="h-5 w-5 mr-2" />
                <p>
                  <strong>Email:</strong> johndoe@.gmail.com
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

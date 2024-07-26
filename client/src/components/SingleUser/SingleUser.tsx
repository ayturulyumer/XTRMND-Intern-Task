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

  const userMainDetails = [
    { label: "ID", value: "1" },
    { label: "Name", value: "John Doe" },
    { label: "Username", value: "johny1" },
    { label: "Company", value: "Company" },
  ];

  const userDetails = [
    { icon: PhoneIcon, label: "Phone", value: "092382378" },
    { icon: CityIcon, label: "City", value: "Sofia" },
    { icon: WebsiteIcon, label: "Website", value: "johndoe.com" },
    { icon: EmailIcon, label: "Email", value: "johndoe@gmail.com" },
  ];

  return (
    <>
      <tr onClick={toggleAccordion} className="cursor-pointer">
        {userMainDetails.map((detail, index) => (
          <td
            key={index}
            className="border-b border-gray-200 bg-white px-5 py-5 text-sm"
          >
            <div className="flex items-center">
              <p className="whitespace-no-wrap">{detail.value}</p>
            </div>
          </td>
        ))}
      </tr>
      {isOpen && (
        <tr className="mx-auto">
          <td
            colSpan={4}
            className="border-b border-gray-200 bg-gray-200 px-5 py-5 text-sm"
          >
            <div className="grid grid-cols-2 gap-8">
              {userDetails.map((detail, i) => (
                <div key={i} className="flex items-center">
                  <img
                    src={detail.icon}
                    alt={detail.label}
                    className="h-5 w-5 mr-2"
                  />
                  <p>
                    <strong>{detail.label}:</strong> {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

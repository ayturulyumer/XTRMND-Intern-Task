import { useState } from "react";

import PhoneIcon from "../../assets/phone.svg";
import WebsiteIcon from "../../assets/website.svg";
import CityIcon from "../../assets/city.svg";
import EmailIcon from "../../assets/email.svg";
import ArrowUpIcon from "../../assets/up-arrow.svg";
import ArrowDownIcon from "../../assets/down-arrow.svg";

import { User } from "../../types/types";

interface SingleUserProps {
  user: User;
}

export default function SingleUser({ user }: SingleUserProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const userMainDetails = [
    {
      label: "ID",
      value: (
        <div className="flex items-center">
          {user.id}
          <img
            src={isOpen ? ArrowUpIcon : ArrowDownIcon}
            alt="Arrow Icon"
            className="h-4 w-4 ml-2"
          />
        </div>
      ),
    },
    { label: "Name", value: user.name },
    { label: "Username", value: user.username },
    { label: "Company", value: user.company.name },
  ];

  const userDetails = [
    { icon: PhoneIcon, label: "Phone", value: user.phone },
    {
      icon: CityIcon,
      label: "City",
      value: `${user.address.city},${user.address.street},${user.address.suite}`,
    },
    { icon: WebsiteIcon, label: "Website", value: user.website },
    { icon: EmailIcon, label: "Email", value: user.email },
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

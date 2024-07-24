import { useState } from "react";

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
          <p className="whitespace-no-wrap">johndoe@gmail.com</p>
        </td>
      </tr>
      {isOpen && (
        <tr className="mx-auto">
          <td
            colSpan={4}
            className="border-b border-gray-200 bg-gray-100 px-5 py-5 text-sm"
          >
            <div className="grid grid-cols-2 gap-8 ">
              <p>
                <strong>Phone:</strong> 092382378
              </p>
              <p>
                <strong>City:</strong> Sofia
              </p>
              <p>
                <strong>Website:</strong> johndoe.com
              </p>
              <p>
                <strong>Company:</strong> company
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

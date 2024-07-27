import { useContext, useState } from "react";
import UsersContext from "../../context/usersContext";

import { User } from "../../types/types";

import SingleUser from "../SingleUser/SingleUser";
import Spinner from "../Spinner/Spinner";

export default function UserList() {
  const { users, loading, error } = useContext(UsersContext);

  const [openUserId, setOpenUserId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenUserId(openUserId === id ? null : id);
  };

  const headers = ["ID", "Name", "Username", "Company"];

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center text-lg justify-center pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">Users</h2>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 text-left text-xs font-semibold uppercase tracking-widest text-white">
                {headers.map((header, i) => (
                  <th key={i} className="px-5 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {loading ? (
                <tr>
                  <td colSpan={headers.length} className="text-center py-4">
                    <Spinner />
                    <p className="mt-4 text-gray-900 text-sm">Please wait...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center font-bold py-5 text-red-500"
                  >
                    {error}
                  </td>
                </tr>
              ) : (
                users.map((user: User, i: number) => (
                  <SingleUser
                    key={i}
                    user={user}
                    isOpen={openUserId === user.id}
                    toggleAccordion={() => toggleAccordion(user.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

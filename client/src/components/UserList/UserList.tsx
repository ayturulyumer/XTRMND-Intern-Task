import SingleUser from "../SingleUser/SingleUser";

export default function UserList() {
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
              <SingleUser />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

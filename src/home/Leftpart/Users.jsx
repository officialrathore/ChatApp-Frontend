import React from "react";
import User from "./User";
import GetAllUsers from "../../context/GetAllUsers";

function Users() {
  const [allUsers, loading] = GetAllUsers();
  console.log(allUsers);
  return (
    <div >
      <h1 className="px-8 py-2 font-semibold text-white rounded-md bg-slate-800">
        Messages
      </h1>
      <div className="flex-1 py-2 overflow-y-auto hide-scrollbar" style={{maxHeight: 'calc(84vh - 10vh)'}}>
        {loading && <div className="flex items-center justify-center h-full">
          <p className="text-white">Loading...</p>
        </div>}
        {allUsers.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;

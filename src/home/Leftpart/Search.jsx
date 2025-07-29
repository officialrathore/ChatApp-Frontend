import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import GetAllUsers from "../../context/GetAllUsers";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = GetAllUsers();
  const { setSelectedConversation } = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-3">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label
              htmlFor="search"
              className="border-[1px] border-gray-700 bg-slate-700 rounded-lg flex items-center gap-2 w-[80%] h-12"
            >
              <input
                id="search"
                name="search"
                type="search"
                className="grow outline-none bg-transparent text-[18px] text-white p-5 rounded-lg h-full"
                placeholder="Search"
                value={search}
                onInput={(e) => setSearch(e.target.value)} // ✅ this catches autofill too
              />
            </label>
            <button type="submit">
              <FaSearch className="p-2 text-5xl duration-300 rounded-full hover:bg-gray-400 hover:text-black" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;

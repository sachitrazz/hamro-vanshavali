import { useState } from "react";
import Navbar from "../components/Navbar";
import { useMembers }
from "../context/MembersContext";


function Admin() {
    const [fullName, setFullName] = useState("");

const [profession, setProfession] = useState("");

const [generationLevel, setGenerationLevel] = useState(1);
const { members, setMembers } =
  useMembers();



function handleAddMember(
  e: React.FormEvent
) {
  e.preventDefault();

  const newMember = {
    id: members.length + 1,

    fullName,

    profession,

    generationLevel,

    fatherId: undefined,

    address: {
      district: "Unknown",
      municipality: "Unknown",
      ward: 0,
    },

    dob: "Unknown",

    isDeceased: false,
  };

  setMembers([...members, newMember]);

  setFullName("");
  setProfession("");
  setGenerationLevel(1);
}
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-4xl mx-auto px-8 py-10">

        <div className="bg-white rounded-3xl shadow-sm p-10">

          <h1 className="text-5xl font-bold mb-8">
            Admin Panel
          </h1>

          <form
  className="space-y-6"
  onSubmit={handleAddMember}
>

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

             <input
  type="text"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full border border-gray-300 rounded-xl p-4"
  placeholder="Enter full name"
/>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Profession
              </label>

         <input
  type="text"
  value={profession}
  onChange={(e) => setProfession(e.target.value)}
  className="w-full border border-gray-300 rounded-xl p-4"
  placeholder="Enter profession"
/>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Generation Level
              </label>

          <input
  type="number"
  value={generationLevel}
  onChange={(e) =>
    setGenerationLevel(Number(e.target.value))
  }
  className="w-full border border-gray-300 rounded-xl p-4"
  placeholder="Enter generation"
/>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition"
            >
              Add Member
            </button>

          </form>
          <div className="mt-10">

  <h2 className="text-3xl font-bold mb-6">
    Current Members
  </h2>

  <div className="space-y-4">

    {members.map((member) => (
      <div
        key={member.id}
        className="border border-gray-200 rounded-xl p-4"
      >
        <p className="font-semibold">
          {member.fullName}
        </p>

        <p className="text-gray-600">
          {member.profession}
        </p>
      </div>
    ))}

  </div>

</div>

        </div>

      </div>
    </div>
  );
}

export default Admin;
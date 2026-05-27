import Navbar from "../components/Navbar";

import { useMembers }
from "../context/MembersContext";
import { Link } from "react-router-dom";

function Tree() {
  const { members } = useMembers();

  const generations = [...new Set(
    members.map((person) => person.generationLevel
  )
  )];

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-5xl font-bold mb-10">
          Family Tree
        </h1>

        <div className="space-y-10">

          {generations.map((generation) => {

            const peopleInGeneration = members.filter(
              (person) =>
                person.generationLevel === generation
            );

            return (
              <div
                key={generation}
                className="bg-white rounded-2xl shadow-sm p-8"
              >

                <h2 className="text-3xl font-bold mb-6">
                  Generation {generation}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {peopleInGeneration.map((person) => {

  const father = members.find(
    (p) => p.id === person.fatherId
  );

  return (
    <Link to={`/member/${person.id}`}>

  <div
    key={person.id}
    className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md hover:border-gray-400 transition cursor-pointer"
  >

    <h3 className="text-2xl font-semibold mb-2">
      {person.fullName}
    </h3>

    <p className="text-gray-600">
      {person.profession}
    </p>

    <p className="text-gray-500 mt-2">
      Father: {father?.fullName || "Unknown"}
    </p>

  </div>

</Link>
  );
})}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default Tree;
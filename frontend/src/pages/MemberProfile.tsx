import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { people } from "../data/People";

function MemberProfile() {

  const { id } = useParams();

  const person = people.find(
    (p) => p.id === Number(id)
  );

  const father = people.find(
    (p) => p.id === person?.fatherId
  );
  const children = people.filter(
  (p) => p.fatherId === person?.id
);

  if (!person) {
    return (
      <div>
        <Navbar />

        <h1 className="p-10 text-4xl">
          Member not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto px-8 py-10">

        <div className="bg-white rounded-3xl shadow-sm p-10">

          <h1 className="text-5xl font-bold mb-8">
            {person.fullName}
          </h1>

          <div className="space-y-4 text-lg">

            <p>
              <span className="font-semibold">
                Profession:
              </span>{" "}
              {person.profession}
            </p>

            <p>
              <span className="font-semibold">
                Generation:
              </span>{" "}
              {person.generationLevel}
            </p>

 <p className="flex items-center gap-2">

  <span className="font-semibold">
    Father:
  </span>

  {father ? (
    <Link
      to={`/member/${father.id}`}
      className="
        bg-gray-100
        px-3
        py-1
        rounded-full
        text-gray-800
        hover:bg-gray-300
        hover:scale-105
        transition
        cursor-pointer
        border
        border-gray-300
      "
    >
      {father.fullName}
    </Link>
  ) : (
    "Unknown"
  )}

</p>

            <p>
              <span className="font-semibold">
                District:
              </span>{" "}
              {person.address.district}
            </p>

            <p>
              <span className="font-semibold">
                Municipality:
              </span>{" "}
              {person.address.municipality}
            </p>

            <p>
              <span className="font-semibold">
                Ward:
              </span>{" "}
              {person.address.ward}
            </p>

            <p>
              <span className="font-semibold">
                DOB:
              </span>{" "}
              {person.dob}
            </p>

            <p>
              <span className="font-semibold">
                Status:
              </span>{" "}
              {person.isDeceased
                ? "Deceased"
                : "Alive"}
            </p>
            <div className="mt-10">

  <h2 className="text-3xl font-bold mb-4">
    Children
  </h2>

  <div className="space-y-3">

    {children.length > 0 ? (
children.map((child) => (
  <Link
    key={child.id}
    to={`/member/${child.id}`}
    className="
      flex
      items-center
      justify-between
      bg-gray-100
      px-4
      py-3
      rounded-xl
      hover:bg-gray-200
      hover:translate-x-1
      transition
      cursor-pointer
      border
      border-gray-200
    "
  >
    <span>{child.fullName}</span>

    <span className="text-gray-400">
      →
    </span>
  </Link>
))
    ) : (
      <p>No children recorded</p>
    )}

  </div>

</div>

          </div>

        </div>

      </div>
      
    </div>
  );
}

export default MemberProfile;
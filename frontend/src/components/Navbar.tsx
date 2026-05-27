import { Link } from "react-router-dom";

import { family } from "../data/FamilyData";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-gray-900">
          {family.familyName} Vanshawali
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-black transition"
          >
            Home
          </Link>

          <Link
            to="/members"
            className="hover:text-black transition"
          >
            Members
          </Link>

          <Link
            to="/tree"
            className="hover:text-black transition"
          >
            Tree
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
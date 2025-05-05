import { AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-amber-900 sticky shadow-md top-0 z-10 py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-amber-900">
        <Link to="/">🍽️ Platéa</Link>
      </div>

      {/* Right side buttons */}
      <div className="">
        <Link
          to="/add-restaurant"
          className="bg-amber-900 flex gap-2 text-white px-4 py-2 rounded hover:bg-amber-800 transition"
        >
          <p>Add New</p>
          <AddCircleOutline />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

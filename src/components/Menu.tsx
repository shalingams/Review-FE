import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Menu() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <div className="flex justify-between items-center mx-auto px-6 py-3">
      <img src="/header.png" className="w-10 h-10" />
      <div>
        <ul className="flex gap-4 text-[#C7F9CC] text-xl">
          <li>
            <Link
              to="/"
              className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/countries"
              className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
            >
              Countries
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
            >
              About
            </Link>
          </li>
          {currentUser ? (
            <li>
              <Link
                to="/profile"
                className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
              >
                Profile
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/sign-in"
                  className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="hover:text-[#80ED99] hover:uppercase hover:text-bold hover:text-xl"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

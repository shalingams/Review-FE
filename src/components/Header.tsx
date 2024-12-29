import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from '../redux/store';

export default function Header() {
  const {currentUser} = useSelector((state: RootState) => state.user);
  
  return (
    
    <div className="border-b border-[#4646458a] ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-6 text-[#ad8a1f]">
        <h1 className="font-bold">Auth APP</h1>
        <div>
          <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
            {currentUser ? (
              <li><Link to="/profile">Profile</Link></li>
            ) : (
              <>
                <li><Link to="/sign-in">Sign In</Link></li>
                <li><Link to="/sign-up">Sign Up</Link></li>
              </>
            )}

          </ul>
        </div>
      </div>
    </div>
  )
}

import Logo from "../assets/walosh.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-10 flex w-full flex-col gap-3 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-6">
      <Link to="/">
        <img src={Logo} alt="Walosh logo" className="h-6 sm:h-8" />
      </Link>
      <div>
        <ul className="flex flex-wrap gap-4 text-sm text-black sm:gap-10 sm:text-base">
          <li className="cursor-pointer transition-all duration-200 hover:underline">
            <Link to="/services">Services</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 hover:underline">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

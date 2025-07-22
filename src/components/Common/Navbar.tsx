import Logo from "@/assets/images/logo.svg";
import PythonImg from "@/assets/images/python.png";
import Html5Img from "@/assets/images/html-5.png";
import JsImg from "@/assets/images/js.png";
import JavaImg from "@/assets/images/java.png";
import CImg from "@/assets/images/c-.png";
import RustImg from "@/assets/images/rust.png";
import RubyImg from "@/assets/images/ruby.png";
import GoLangImg from "@/assets/images/go-lang.png";
import PhpImg from "@/assets/images/php.png";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Email from "../ui/icon/Email";

const Navbar = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 mb-20order-b-2 border-slate-200">
      <div className="header-top bg-primary-500 text-white py-3">
        <div className="container">
          <div className="flex justify-between">
            <div className="left">
              <a
                href="mailto: admin@skillshikshya.com"
                className="flex hover:underline "
              >
                <Email className="text-2xl" />
                <span className="ml-2">admin@skillshikshya.com</span>
              </a>
            </div>
            <div className="ml-auto divider">
              <Link to="/login" className="text-base/6 font-semibold">
                Login
              </Link>
              <Link to="/register" className="text-base/6 font-semibold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 logo">
              <span className="sr-only">Skillshikshya</span>
              <span>
                <img src={Logo} alt="Skillshikshya" />
              </span>
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="hidden lg:flex lg:gap-x-8 items-center" id="menu">
            <Link
              to="/about"
              className="text-base/6 font-semibold text-gray-900"
            >
              About
            </Link>
            <Link
              to="/course"
              className="text-base/6 font-semibold text-gray-900"
            >
              Course
            </Link>
            <Link
              to="/successStories"
              className="text-base/6 font-semibold text-gray-900"
            >
              Success Stories
            </Link>
            <Link
              to="/compiler"
              className="text-base/6 font-semibold text-gray-900"
            >
              Compiler
            </Link>

            <div className="dropdown inline-block relative">
              <button
                type="button"
                className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <span className="mr-1">Verify Certiicates</span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                {[
                  { name: "Python", img: PythonImg },
                  { name: "HTML", img: Html5Img },
                  { name: "Javascript", img: JsImg },
                  { name: "Java", img: JavaImg },
                  { name: "C++", img: CImg },
                  { name: "Rust", img: RustImg },
                  { name: "Ruby", img: RubyImg },
                  { name: "Go lang", img: { GoLangImg } },
                  { name: "Php", img: PhpImg },
                ].map(({ name, img }) => (
                  <li key={name}>
                    <a className="flex justify-between" href="#">
                      {name}
                      <span className="icon">
                        <img src={img} alt={name} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <Button className="btn" variant={"outline"}>
              Log in
            </Button> */}
            <Button className="btn-gradient btn btn-shadow ml-3">
              Access Masterclass
            </Button>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

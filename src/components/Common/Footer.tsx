import "./Footer.css";
// import FooterLogo from "../assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer  0 m-5">
      <div className="text-center py-5">
        <ul className="flex justify-center gap-8">
          <li>
            <h2 className="font-bold whitespace-nowrap">Ready to Level Up?</h2>
          </li>
          <li>
            <span>
              <svg
                width="58"
                height="98"
                viewBox="0 0 58 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.1932 46.1676C46.1932 46.1676 51.9782 35.8935 43.1241 0C43.1241 0 46.3134 26.8028 42.061 40.0257C42.061 40.0257 31.4338 44.8679 19.274 30.225C19.274 30.225 31.4338 49.4696 46.1932 46.1639V46.1676Z"
                  fill="#E8F6F1"
                />
                <path
                  d="M53.6311 38.8463C56.0428 38.8463 58 36.8892 58 34.4775C58 32.0658 56.0428 30.1086 53.6311 30.1086C51.2194 30.1086 49.2623 32.0658 49.2623 34.4775C49.2623 36.8892 51.2194 38.8463 53.6311 38.8463Z"
                  fill="#E8F6F1"
                />
                <path
                  d="M3.56798 76.1558C3.56798 76.1558 23.5226 79.5818 38.6351 63.8757C30.3708 76.0356 17.7376 90.0887 0.615356 98C0.615356 98 46.3097 83.7139 50.9152 41.7949C50.9152 41.7949 39.9348 66.9448 3.56798 76.1558Z"
                  fill="#E8F6F1"
                />
              </svg>
            </span>
          </li>
          <li>
            <h2 className="font-bold whitespace-nowrap">Ready to Level Up?</h2>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="lg:flex justify-between md:py-11 pb-13">
          <div className="footer-info flex flex-col gap-4 lg:gap-8">
            <span>{/* <img src={FooterLogo} alt="SkillShikshya" /> */}</span>
            <p>
              Skill Shikshya, an innovative online learning site, is dedicated
              to offering skills that truly matter in today's fast-paced world.
            </p>
            <ul>
              <li>
                <strong>Call Us:</strong>+977 986-8730959
              </li>
              <li>Sankhamul, Baneshwor</li>
              <li>admin@skillshikshya.com</li>
            </ul>
          </div>
          <div className="quick-links flex justify-between">
            <div>
              <h5 className="text-6 font-bold pb-5">Company</h5>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">MasterclassName</a>
                </li>
                <li>
                  <a href="#">Success Stories</a>
                </li>
                <li>
                  <a href="#">Verify Cetificate</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-6 font-bold pb-5">Additional Links</h5>
              <ul>
                <li>
                  <a href="#">Code Complier</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Forms</a>
                </li>
                <li>
                  <a href="#">FQQs</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-6 font-bold pb-5">Social Media</h5>
              <ul className="flex justify-between social-link gap-3 xl:gap-6">
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li className="item-center">
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between footer-bottom">
          <p>
            Copyright © 2024 Skillshikshya. All rights reserved. Made with ❤️️
            By: Vrit Tech
          </p>
          <ul className="flex list-divider justify-center">
            <li>
              <a href="#">Privay Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Condition</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

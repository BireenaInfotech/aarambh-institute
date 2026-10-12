import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'auto';
      return newState;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(
      activeDropdown === dropdownName ? null : dropdownName
    );
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="font-sans text-dark relative overflow-x-hidden">

      {/* =========================================================
          TIER 1: LOGO HEADER
      ========================================================= */}

      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-3 sm:px-5">

          {/* Main Header Row */}
          <div className="min-h-[72px] sm:min-h-[78px] lg:min-h-[95px] flex items-center gap-2">

            {/* =====================================================
                LOGO + INSTITUTE NAME
            ===================================================== */}

            <Link
              to="/"
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                lg:gap-5
                min-w-0
                flex-1
                group
              "
            >

              {/* Logo */}
              <img
                src="/assets/images/logo/logo.png"
                alt="Aarambh Institute Logo"
                className="
                  w-[44px]
                  h-[44px]
                  sm:w-[55px]
                  sm:h-[55px]
                  lg:w-[75px]
                  lg:h-[75px]
                  object-contain
                  drop-shadow-md
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  shrink-0
                "
              />

              {/* Institute Name */}
              <div className="flex flex-col justify-center min-w-0 flex-1">

                <h1
                  className="
                    font-['Outfit']
                    font-black
                    text-[17px]
                    sm:text-[21px]
                    lg:text-[28px]
                    xl:text-[32px]
                    text-primary
                    uppercase
                    tracking-tight
                    leading-[0.95]
                    group-hover:text-accent
                    transition-colors
                    duration-500
                    m-0
                    p-0
                  "
                >

                  {/* Mobile Name */}
                  <span className="block sm:hidden">
                    AARAMBH
                  </span>

                  <span className="block sm:hidden">
                    INSTITUTE
                  </span>

                  {/* Tablet + Desktop Name */}
                  <span className="hidden sm:block whitespace-nowrap">
                    AARAMBH INSTITUTE
                  </span>

                </h1>


                {/* Tagline */}
                <span
                  className="
                    text-accent
                    font-bold
                    text-[7px]
                    sm:text-[8px]
                    lg:text-[10px]
                    tracking-[0.25em]
                    sm:tracking-[0.35em]
                    uppercase
                    mt-1.5
                    lg:mt-2
                    block
                    leading-none
                  "
                >
                  Path to Excellence
                </span>

              </div>

            </Link>


            {/* =====================================================
                DESKTOP GOVERNMENT REGISTRATION
            ===================================================== */}

            <div className="hidden xl:flex items-center shrink-0">

              <img
                src="/assets/govt.png"
                alt="Government Registered"
                className="
                  w-[230px]
                  xl:w-[245px]
                  h-auto
                  object-contain
                  drop-shadow-sm
                "
              />

            </div>


            {/* =====================================================
                MOBILE / TABLET MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              aria-label="Open menu"
              className="
                xl:hidden
                shrink-0
                w-10
                h-10
                sm:w-11
                sm:h-11
                flex
                items-center
                justify-center
                text-[23px]
                sm:text-[27px]
                text-primary
                rounded-lg
                hover:bg-gray-50
                hover:text-accent
                transition-all
                duration-300
                ml-1
              "
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>

          </div>


          {/* =====================================================
              MOBILE / TABLET GOVERNMENT REGISTRATION
          ===================================================== */}

          <div
            className="
              xl:hidden
              border-t
              border-gray-100
              py-2.5
              sm:py-3
              flex
              justify-center
              items-center
            "
          >

            <img
              src="/assets/govt.png"
              alt="Government Registered"
              className="
                w-[150px]
                sm:w-[180px]
                md:w-[205px]
                h-auto
                object-contain
                drop-shadow-sm
              "
            />

          </div>

        </div>
      </header>


      {/* =========================================================
          TIER 2: DESKTOP NAVIGATION
      ========================================================= */}

      <nav
        className="
          hidden
          xl:block
          bg-gradient-to-r
          from-[#0f172a]
          via-[#1e293b]
          to-[#0f172a]
          border-b-[3px]
          border-accent
          relative
          z-40
          shadow-lg
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            flex
            justify-between
            items-center
            h-[55px]
          "
        >

          {/* Main Navigation */}
          <ul className="flex items-center justify-center h-full flex-1 gap-1 lg:gap-2">

            {/* HOME */}
            <li className="h-full">

              <Link
                to="/"
                className="
                  flex
                  items-center
                  h-full
                  px-4
                  text-[12px]
                  font-bold
                  text-gray-200
                  uppercase
                  tracking-widest
                  hover:text-white
                  hover:bg-accent
                  transition-all
                  duration-300
                "
              >
                Home
              </Link>

            </li>


            {/* ABOUT US */}
            <li className="h-full">

              <Link
                to="/about-us"
                className="
                  flex
                  items-center
                  h-full
                  px-4
                  text-[12px]
                  font-bold
                  text-gray-200
                  uppercase
                  tracking-widest
                  hover:text-white
                  hover:bg-accent
                  transition-all
                  duration-300
                "
              >
                About Us
              </Link>

            </li>


            {/* =====================================================
                ADMISSION DROPDOWN
            ===================================================== */}

            <li className="relative group h-full">

              <Link
                to="#"
                className="
                  flex
                  items-center
                  h-full
                  px-4
                  text-[12px]
                  font-bold
                  text-gray-200
                  uppercase
                  tracking-widest
                  hover:text-white
                  hover:bg-accent
                  transition-all
                  duration-300
                "
              >
                Admission

                <i className="fas fa-chevron-down text-[9px] ml-1.5 opacity-70 group-hover:rotate-180 transition-transform duration-300"></i>
              </Link>


              <div
                className="
                  absolute
                  top-full
                  left-0
                  bg-white
                  min-w-[250px]
                  shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                  rounded-b-lg
                  opacity-0
                  invisible
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  z-50
                  border-t-[3px]
                  border-accent
                  overflow-hidden
                "
              >

                {[
                  {
                    to: '/bbose-10th',
                    label: 'BBOSE Board (10th)',
                  },
                  {
                    to: '/bbose-12th',
                    label: 'BBOSE Board (12th)',
                  },
                  {
                    to: '/bosse-10th',
                    label: 'BOSSE Board (10th)',
                  },
                  {
                    to: '/bosse-12th',
                    label: 'BOSSE Board (12th)',
                  },
                  {
                    to: '/nios-10th',
                    label: 'NIOS Board (10th)',
                  },
                  {
                    to: '/nios-12th',
                    label: 'NIOS Board (12th)',
                  },
                ].map((link, i) => (

                  <Link
                    key={i}
                    to={link.to}
                    className="
                      block
                      px-6
                      py-3
                      text-[13px]
                      font-semibold
                      text-gray-700
                      border-b
                      border-gray-50
                      hover:bg-gray-50
                      hover:text-accent
                      hover:pl-8
                      transition-all
                      duration-200
                    "
                  >
                    {link.label}
                  </Link>

                ))}

              </div>

            </li>


            {/* ON DEMAND */}
            <li className="h-full">

              <Link
                to="/nios-on-demand-exam"
                className="
                  flex
                  items-center
                  h-full
                  px-4
                  text-[12px]
                  font-bold
                  text-gray-200
                  uppercase
                  tracking-widest
                  hover:text-white
                  hover:bg-accent
                  transition-all
                  duration-300
                "
              >
                On Demand
              </Link>

            </li>


            {/* =====================================================
                UPCOMING DROPDOWN
            ===================================================== */}

            <li className="relative group h-full">

              <Link
                to="#"
                className="
                  flex
                  items-center
                  h-full
                  px-4
                  text-[12px]
                  font-bold
                  text-gray-200
                  uppercase
                  tracking-widest
                  hover:text-white
                  hover:bg-accent
                  transition-all
                  duration-300
                "
              >
                Upcoming

                <i className="fas fa-chevron-down text-[9px] ml-1.5 opacity-70 group-hover:rotate-180 transition-transform duration-300"></i>
              </Link>


              <div
                className="
                  absolute
                  top-full
                  left-0
                  bg-white
                  min-w-[250px]
                  shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                  rounded-b-lg
                  opacity-0
                  invisible
                  translate-y-4
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  z-50
                  border-t-[3px]
                  border-accent
                  overflow-hidden
                "
              >

                {[
                  {
                    to: '/UG-admission',
                    label: 'UG Admission',
                  },
                  {
                    to: '/PG-admission',
                    label: 'PG Admission',
                  },
                  {
                    to: '/medical-admission',
                    label: 'Medical Admission',
                  },
                ].map((link, i) => (

                  <Link
                    key={i}
                    to={link.to}
                    className="
                      flex
                      items-center
                      justify-between
                      px-6
                      py-3
                      text-[13px]
                      font-semibold
                      text-gray-700
                      border-b
                      border-gray-50
                      hover:bg-gray-50
                      hover:text-accent
                      hover:pl-8
                      transition-all
                      duration-200
                    "
                  >

                    {link.label}

                    <span
                      className="
                        bg-orange-100
                        text-orange-600
                        border
                        border-orange-200
                        text-[9px]
                        uppercase
                        tracking-wider
                        px-2
                        py-0.5
                        rounded-full
                        font-bold
                      "
                    >
                      Soon
                    </span>

                  </Link>

                ))}

              </div>

            </li>


            {/* OTHER DESKTOP LINKS */}

            {[
              {
                path: '/founder',
                label: 'Founder',
              },
              {
                path: '/director',
                label: 'Director',
              },
              {
                path: '/gallery',
                label: 'Gallery',
              },
              {
                path: '/contact-us',
                label: 'Contact',
              },
            ].map((item, idx) => (

              <li
                key={`rest-${idx}`}
                className="h-full"
              >

                <Link
                  to={item.path}
                  className="
                    flex
                    items-center
                    h-full
                    px-4
                    text-[12px]
                    font-bold
                    text-gray-200
                    uppercase
                    tracking-widest
                    hover:text-white
                    hover:bg-accent
                    transition-all
                    duration-300
                  "
                >
                  {item.label}
                </Link>

              </li>

            ))}

          </ul>


          {/* =====================================================
              AUTH BUTTONS
          ===================================================== */}

          <div className="h-full flex items-center ml-4 gap-3">

            <Link
              to="/login"
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r
                from-accent
                to-[#be123c]
                text-white
                px-5
                py-1.5
                rounded-full
                font-bold
                text-[12px]
                uppercase
                tracking-widest
                hover:shadow-[0_0_15px_rgba(225,29,72,0.5)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <i className="fas fa-sign-in-alt"></i>
              Login
            </Link>


            <Link
              to="/register"
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r
                from-accent
                to-[#be123c]
                text-white
                px-5
                py-1.5
                rounded-full
                font-bold
                text-[12px]
                uppercase
                tracking-widest
                hover:shadow-[0_0_15px_rgba(225,29,72,0.5)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <i className="fas fa-graduation-cap"></i>
              Enroll Now
            </Link>

          </div>

        </div>
      </nav>


      {/* =========================================================
          TIER 3: CONTACT INFORMATION
      ========================================================= */}

      <div
        className="
          bg-[#f8fafc]
          border-b
          border-gray-200
          py-2
          text-[11px]
          relative
          z-30
          shadow-inner
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-5
            flex
            justify-between
            items-center
            flex-col
            lg:flex-row
            gap-2
          "
        >

          {/* SOCIAL MEDIA */}

          <div className="flex items-center gap-3 sm:gap-4">

            <span
              className="
                font-bold
                uppercase
                tracking-widest
                text-primary
                flex
                items-center
                gap-1.5
                whitespace-nowrap
              "
            >

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-accent
                  animate-pulse
                "
              ></span>

              Connect With Us

            </span>


            <div className="flex gap-2.5 sm:gap-3">

              <a
                href="https://www.instagram.com/aarambh_institute_patna"
                className="text-gray-500 hover:text-accent hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-[13px]"></i>
              </a>


              <a
                href="https://www.facebook.com/share/1B9zGQGH1H/"
                className="text-gray-500 hover:text-accent hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-[13px]"></i>
              </a>


              <a
                href="https://www.linkedin.com/company/aarambh-institute-patna/"
                className="text-gray-500 hover:text-accent hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-[13px]"></i>
              </a>


              <a
                href="https://x.com/openadmission99"
                className="text-gray-500 hover:text-accent hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-[13px]"></i>
              </a>

              <a
                href="https://wa.me/9931003857"
                className="text-gray-500 hover:text-accent hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-[13px]"></i>
              </a>


              <a
                href="https://www.youtube.com/@aarambhinstitutepatna"
                className="text-gray-500 hover:text-accent hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-[13px]"></i>
              </a>

            </div>

          </div>


          {/* PHONE + EMAIL */}

          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-5
              flex-wrap
              justify-center
              font-bold
              tracking-wider
              text-primary
            "
          >

            <a
              href="tel:9931003857"
              className="
                inline-flex
                items-center
                gap-1.5
                hover:text-accent
                transition-colors
                group
              "
            >

              <div
                className="
                  w-5
                  h-5
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  group-hover:bg-green-200
                  transition-colors
                "
              >
                <i className="fas fa-phone-alt text-[9px] text-green-600"></i>
              </div>

              +91-9931003857

            </a>


            <a
              href="tel:9931006379"
              className="
                inline-flex
                items-center
                gap-1.5
                hover:text-accent
                transition-colors
                group
              "
            >

              <div
                className="
                  w-5
                  h-5
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  group-hover:bg-green-200
                  transition-colors
                "
              >
                <i className="fas fa-phone-alt text-[9px] text-green-600"></i>
              </div>

              +91-9931006379

            </a>


            <span className="text-gray-300 hidden xl:inline">
              |
            </span>


            <a
              href="mailto:info@openadmissions.in"
              className="
                inline-flex
                items-center
                gap-1.5
                hover:text-accent
                transition-colors
                group
              "
            >

              <div
                className="
                  w-5
                  h-5
                  rounded-full
                  bg-red-100
                  flex
                  items-center
                  justify-center
                  group-hover:bg-red-200
                  transition-colors
                "
              >
                <i className="fas fa-envelope text-[9px] text-accent"></i>
              </div>

              <span className="break-all">
                info@openadmissions.in
              </span>

            </a>

          </div>

        </div>
      </div>


      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================= */}

      <div
        className={`
          fixed
          inset-0
          bg-primary/40
          backdrop-blur-sm
          z-[999]
          transition-all
          duration-300
          ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
        onClick={closeMobileMenu}
      ></div>


      {/* =========================================================
          MOBILE SIDE MENU
      ========================================================= */}

      <div
        className={`
          fixed
          top-0
          right-0
          w-[min(300px,85vw)]
          h-screen
          bg-white
          z-[1000]
          pt-[80px]
          pb-5
          px-6
          shadow-[-5px_0_25px_rgba(0,0,0,0.15)]
          overflow-y-auto
          transition-transform
          duration-300
          ease-in-out
          ${
            isMobileMenuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >

        {/* CLOSE BUTTON */}

        <button
          type="button"
          aria-label="Close menu"
          className="
            absolute
            top-6
            right-6
            text-2xl
            text-gray-400
            hover:text-accent
            p-1
            transition-colors
          "
          onClick={closeMobileMenu}
        >
          <i className="fas fa-times"></i>
        </button>


        {/* MOBILE MENU LOGO */}

        <div className="absolute top-6 left-6">

          <Link
            to="/"
            onClick={closeMobileMenu}
          >
            <img
              src="/assets/images/logo/logo.png"
              alt="Aarambh Institute"
              className="h-[40px] w-auto object-contain"
            />
          </Link>

        </div>


        {/* MOBILE MENU LINKS */}

        <ul className="flex flex-col mt-8">

          {/* HOME */}
          <li className="border-b border-gray-100">

            <Link
              to="/"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              Home
            </Link>

          </li>


          {/* ABOUT */}
          <li className="border-b border-gray-100">

            <Link
              to="/about-us"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

          </li>


          {/* ADMISSION */}

          <li className="border-b border-gray-100">

            <div
              className="flex justify-between items-center cursor-pointer py-3"
              onClick={() => toggleDropdown('admission')}
            >

              <span
                className="
                  text-[14px]
                  font-semibold
                  text-primary
                  hover:text-accent
                  transition-colors
                "
              >
                Admission
              </span>

              <i
                className={`
                  fas
                  fa-chevron-down
                  text-xs
                  transition-transform
                  duration-300
                  ${
                    activeDropdown === 'admission'
                      ? 'rotate-180 text-accent'
                      : 'text-gray-400'
                  }
                `}
              ></i>

            </div>


            <div
              className={`
                pl-4
                bg-gray-50
                rounded-lg
                overflow-hidden
                transition-all
                duration-300
                ${
                  activeDropdown === 'admission'
                    ? 'max-h-[350px] opacity-100 py-2 mb-2'
                    : 'max-h-0 opacity-0'
                }
              `}
            >

              <Link
                to="/bbose-10th"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                BBOSE Board (10th)
              </Link>

              <Link
                to="/bbose-12th"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                BBOSE Board (12th)
              </Link>

              <Link
                to="/bosse-10th"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                BOSSE Board (10th)
              </Link>

              <Link
                to="/bosse-12th"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                BOSSE Board (12th)
              </Link>

              <Link
                to="/nios-10th"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                NIOS Board (10th)
              </Link>

              <Link
                to="/nios-12th"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                NIOS Board (12th)
              </Link>

            </div>

          </li>


          {/* ON DEMAND */}

          <li className="border-b border-gray-100">

            <Link
              to="/nios-on-demand-exam"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              On Demand
            </Link>

          </li>


          {/* UPCOMING */}

          <li className="border-b border-gray-100">

            <div
              className="flex justify-between items-center cursor-pointer py-3"
              onClick={() => toggleDropdown('upcoming')}
            >

              <span
                className="
                  text-[14px]
                  font-semibold
                  text-primary
                  hover:text-accent
                  transition-colors
                "
              >
                Upcoming
              </span>

              <i
                className={`
                  fas
                  fa-chevron-down
                  text-xs
                  transition-transform
                  duration-300
                  ${
                    activeDropdown === 'upcoming'
                      ? 'rotate-180 text-accent'
                      : 'text-gray-400'
                  }
                `}
              ></i>

            </div>


            <div
              className={`
                pl-4
                bg-gray-50
                rounded-lg
                overflow-hidden
                transition-all
                duration-300
                ${
                  activeDropdown === 'upcoming'
                    ? 'max-h-[220px] opacity-100 py-2 mb-2'
                    : 'max-h-0 opacity-0'
                }
              `}
            >

              <Link
                to="/UG-admission"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                UG Admission
              </Link>

              <Link
                to="/PG-admission"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                PG Admission
              </Link>

              <Link
                to="/medical-admission"
                className="block py-2 text-[13px] font-medium text-gray-600 hover:text-accent hover:translate-x-1 transition-transform"
                onClick={closeMobileMenu}
              >
                Medical Admission
              </Link>

            </div>

          </li>


          {/* FOUNDER */}

          <li className="border-b border-gray-100">

            <Link
              to="/founder"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              Founder
            </Link>

          </li>


          {/* DIRECTOR */}

          <li className="border-b border-gray-100">

            <Link
              to="/director"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              Director
            </Link>

          </li>


          {/* GALLERY */}

          <li className="border-b border-gray-100">

            <Link
              to="/gallery"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>

          </li>


          {/* CONTACT */}

          <li className="border-b border-gray-100">

            <Link
              to="/contact-us"
              className="
                block
                py-3
                text-[14px]
                font-semibold
                text-primary
                hover:text-accent
                transition-colors
              "
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

          </li>

        </ul>


        {/* =====================================================
            MOBILE AUTH BUTTONS
        ===================================================== */}

        <div className="flex flex-col gap-3 mt-6">

          <Link
            to="/login"
            className="
              flex
              items-center
              justify-center
              gap-2
              w-full
              py-3
              px-4
              bg-gradient-to-r
              from-accent
              to-[#be123c]
              text-white
              rounded-full
              font-bold
              text-[14px]
              hover:shadow-[0_8px_20px_rgba(225,29,72,0.3)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
            onClick={closeMobileMenu}
          >
            <i className="fas fa-sign-in-alt"></i>
            Login
          </Link>


          <Link
            to="/register"
            className="
              flex
              items-center
              justify-center
              gap-2
              w-full
              py-3
              px-4
              bg-gradient-to-r
              from-accent
              to-[#be123c]
              text-white
              rounded-full
              font-bold
              text-[14px]
              hover:shadow-[0_8px_20px_rgba(225,29,72,0.3)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
            onClick={closeMobileMenu}
          >
            <i className="fas fa-graduation-cap"></i>
            Enroll Now
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Header;
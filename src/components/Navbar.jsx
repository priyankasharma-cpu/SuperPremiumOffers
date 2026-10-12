import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { availableOfferCategories } from "../data/offerCategories";

import logo from "../images/weblogo.png";

/* =========================================
   OFFER CATEGORIES — ALPHABETICAL ORDER
========================================= */

const categories = availableOfferCategories;

const navItems = [
  { label: "Home", id: "home" },
  { label: "Offer Categories", id: "categories", dropdown: true },
  { label: "How It Works", id: "how-it-works" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] =
    useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isCategoryPage =
    location.pathname === "/offers" || location.pathname.startsWith("/offers/");

  /* =========================================
     SCROLL STATE
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================
     ACTIVE SECTION
  ========================================= */

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = "home";

      navItems.forEach((item) => {
        if (item.dropdown || item.path) return;

        const element = document.getElementById(item.id);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleActiveSection);
  }, [location.pathname]);

  /* =========================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================= */

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileCategoriesOpen(false);
  }, [location.pathname, location.hash, location.search]);

  /* =========================================
     MOBILE BODY SCROLL
  ========================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================
     CLOSE DROPDOWN ON OUTSIDE CLICK / ESC
  ========================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
        setMobileCategoriesOpen(false);
        const desktopTrigger = dropdownRef.current?.querySelector("button");
        if (desktopTrigger?.getClientRects().length) desktopTrigger.focus();
        else document.querySelector('[aria-label="Open navigation menu"]')?.focus();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================
     NAVIGATION HELPERS
  ========================================= */

  const goHome = () => {
    setMobileOpen(false);
    setDropdownOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToSection = (sectionId) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setActiveSection(sectionId);

    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate(`/#${sectionId}`);
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  // Arrow/Home/End keys move focus and scroll focused categories into view.
  const handleCategoryKeys = event => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const buttons = [...event.currentTarget.querySelectorAll("button")];
    const index = buttons.indexOf(document.activeElement);
    if (index < 0 || !buttons.length) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next].focus();
  };

  const goToCategory = (slug) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    setMobileCategoriesOpen(false);

    navigate(`/offers/${slug}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleNavClick = (item) => {
    if (item.id === "home") {
      goHome();
      return;
    }

    if (item.path) {
      setMobileOpen(false);
      navigate(item.path);
      return;
    }

    goToSection(item.id);
  };

  /* =========================================
     SHARED NAV BUTTON STYLES
  ========================================= */

  const navButtonClass = (active) => `
    group relative flex items-center gap-1.5
    whitespace-nowrap rounded-[13px]
    px-3 py-2.5
    text-[13px] font-extrabold
    transition-all duration-300
    ${active
      ? "bg-blue-50 text-blue-700 shadow-[inset_0_0_0_1px_rgba(191,219,254,0.7)]"
      : "text-slate-600 hover:bg-blue-50/70 hover:text-blue-700"
    }
  `;

  return (
    <>
      {/* =====================================
          MAIN NAVBAR
      ===================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500
          ${scrolled
            ? "border-b border-blue-100/80 bg-white/90 shadow-[0_12px_45px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
            : "border-b border-white/50 bg-white/75 backdrop-blur-xl"
          }
        `}
      >
        {/* Top Gradient Line */}
        <div
          className="
            pointer-events-none absolute inset-x-0 top-0 h-[2px]
            bg-gradient-to-r from-transparent via-blue-500 to-transparent
            opacity-70
          "
        />

        {/* Background Glow */}
        <div
          className="
            pointer-events-none absolute left-[15%] top-[-80px]
            h-[140px] w-[300px] rounded-full
            bg-blue-300/20 blur-[70px]
          "
        />

        <div
          className="
            pointer-events-none absolute right-[10%] top-[-100px]
            h-[160px] w-[280px] rounded-full
            bg-indigo-300/15 blur-[80px]
          "
        />

        <div
          className="
            relative mx-auto flex h-[82px]
            max-w-[1420px] items-center justify-between
            px-5 sm:px-7 lg:px-8
          "
        >
          {/* LOGO */}

          <button
            type="button"
            onClick={goHome}
            aria-label="Super Premium Offers home"
            className="group relative z-10 flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Super Premium Offers"
              className="
                h-[64px] w-auto max-w-[210px] object-contain
                transition-transform duration-300
                group-hover:scale-[1.025]
                sm:h-[72px] lg:h-[76px]
                lg:max-w-[250px]
              "
            />
          </button>

          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}

          <nav
            aria-label="Main navigation"
            className="
              hidden xl:block
            "
          >
            <div
              className="
                flex items-center gap-0.5
                rounded-[18px] border border-blue-100/80
                bg-white/70 p-1.5
                shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                backdrop-blur-xl
              "
            >
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.id}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdownOpen(false); }}
                    >
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setDropdownOpen(true); requestAnimationFrame(() => document.querySelector("#offer-categories-menu button")?.focus()); } }}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        aria-controls="offer-categories-menu"
                        className={navButtonClass(
                          isCategoryPage || dropdownOpen
                        )}
                      >
                        Offer Categories

                        <ChevronDown
                          size={15}
                          className={`
                            transition-transform duration-300
                            ${dropdownOpen ? "rotate-180" : ""}
                          `}
                        />
                      </button>

                      {/* DROPDOWN */}

                      {dropdownOpen && (
                        <div
                          id="offer-categories-menu"
                          className="
                            absolute left-1/2 top-full z-50
                            w-[min(320px,calc(100vw-32px))] -translate-x-1/2
                            pt-3
                          "
                        >
                          <div
                            className="
                              overflow-hidden rounded-[22px]
                              border border-blue-100
                              bg-white/95 p-2.5
                              shadow-[0_25px_70px_rgba(15,23,42,0.16)]
                              backdrop-blur-2xl
                            "
                          >
                            <div className="px-3 pb-3 pt-2">
                              <div className="flex items-center gap-2">
                                <Sparkles
                                  size={15}
                                  className="text-blue-600"
                                />

                                <span
                                  className="
                                    text-[11px] font-black uppercase
                                    tracking-[0.12em] text-blue-700
                                  "
                                >
                                  Browse Categories
                                </span>
                              </div>

                              <p className="mt-1 text-[12px] text-slate-500">
                                Explore offers by category
                              </p>
                            </div>

                            <div onKeyDown={handleCategoryKeys} className="category-scroll max-h-[min(420px,calc(100dvh-230px))] space-y-1 overflow-y-auto overscroll-contain p-1">
                              {categories.map((category) => {
                                const Icon = category.icon;
                                const active =
                                  location.pathname ===
                                  `/offers/${category.slug}`;

                                return (
                                  <button
                                    key={category.slug}
                                    type="button"
                                    aria-current={active ? "page" : undefined}
                                    onClick={() =>
                                      goToCategory(category.slug)
                                    }
                                    className={`
                                      group flex w-full items-center
                                      gap-3 rounded-[14px]
                                      px-3 py-2.5 text-left
                                      transition-all duration-300
                                      ${active
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-slate-700 hover:bg-blue-50"
                                      }
                                    `}
                                  >
                                    <span
                                      className="
                                        flex h-10 w-10 shrink-0
                                        items-center justify-center
                                        rounded-[12px] bg-blue-50
                                        text-blue-600
                                        transition-all duration-300
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                      "
                                    >
                                      <Icon size={18} />
                                    </span>

                                    <span
                                      className="
                                        flex-1 text-[13px]
                                        font-bold
                                      "
                                    >
                                      {category.label}
                                    </span>

                                    <ChevronRight
                                      size={15}
                                      className="
                                        text-slate-400
                                        transition-transform
                                        group-hover:translate-x-1
                                        group-hover:text-blue-600
                                      "
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const active =
                  location.pathname === "/" &&
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={navButtonClass(
                      item.path
                        ? location.pathname === item.path
                        : active
                    )}
                  >
                    {item.label}

                    {active && (
                      <span
                        className="
                          absolute bottom-[5px] left-1/2
                          h-[2px] w-[18px] -translate-x-1/2
                          rounded-full
                          bg-gradient-to-r from-blue-600 to-indigo-600
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* =================================
              DESKTOP RIGHT ACTIONS
          ================================= */}

          <div
            className="
              relative z-10 hidden items-center gap-2
              xl:flex
            "
          >
            {/* EXPLORE OFFERS */}

            <button
              type="button"
              onClick={() => navigate("/offers")}
              className="
                group relative inline-flex h-[48px]
                items-center justify-center gap-2
                overflow-hidden rounded-[14px]
                bg-gradient-to-r from-blue-600
                via-indigo-600 to-violet-600
                px-4 text-[12px] font-extrabold text-white
                shadow-[0_10px_28px_rgba(37,99,235,0.24)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_16px_35px_rgba(79,70,229,0.30)]
              "
            >
              <span className="relative">Explore Offers</span>

              <span
                className="
                  relative flex h-7 w-7
                  items-center justify-center
                  rounded-[9px] bg-white/15
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </div>

          {/* =================================
              MOBILE MENU BUTTON
          ================================= */}

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="
              relative z-10 flex h-11 w-11
              items-center justify-center
              rounded-[13px] border border-blue-100
              bg-white/80 text-slate-800
              shadow-[0_7px_20px_rgba(15,23,42,0.07)]
              transition-all duration-300
              hover:bg-blue-50 hover:text-blue-700
              xl:hidden
            "
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* =====================================
          MOBILE NAVIGATION
      ===================================== */}

      <div
        className={`
          fixed inset-0 z-40 bg-[#07152e]/35
          backdrop-blur-[5px] transition-all duration-300
          xl:hidden
          ${mobileOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
          }
        `}
        onClick={() => setMobileOpen(false)}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={`
            absolute left-4 right-4 top-[94px]
            max-h-[calc(100dvh-110px)] overflow-y-auto
            rounded-[28px] border border-white/80
            bg-white/95
            shadow-[0_30px_80px_rgba(15,23,42,0.25)]
            backdrop-blur-2xl
            transition-all duration-300
            ${mobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-[0.97] opacity-0"
            }
          `}
        >
          {/* MOBILE HEADER */}

          <div
            className="
              border-b border-blue-100
              bg-gradient-to-r from-blue-50
              via-indigo-50/70 to-violet-50/60
              px-5 py-5
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-[12px]
                  bg-gradient-to-br from-blue-600 to-indigo-600
                  text-white
                "
              >
                <Sparkles size={17} />
              </span>

              <div>
                <p
                  className="
                    text-[10px] font-extrabold uppercase
                    tracking-[0.15em] text-blue-600
                  "
                >
                  Navigation
                </p>

                <p className="mt-1 text-[15px] font-black text-[#07152e]">
                  Super Premium Offers
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE LINKS */}

          <nav className="p-3" aria-label="Mobile navigation">
            {navItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <div key={item.id} className="mb-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileCategoriesOpen((prev) => !prev)
                      }
                      aria-expanded={mobileCategoriesOpen}
                      aria-controls="mobile-offer-categories"
                      className="
                        flex w-full items-center justify-between
                        rounded-[16px] px-3.5 py-3
                        text-left transition-all duration-300
                        hover:bg-blue-50
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            flex h-9 w-9 items-center justify-center
                            rounded-[11px] bg-blue-50
                            text-blue-600
                          "
                        >
                          <WalletCards size={17} />
                        </span>

                        <span className="text-[15px] font-extrabold text-slate-700">
                          Offer Categories
                        </span>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`
                          text-blue-600
                          transition-transform duration-300
                          ${mobileCategoriesOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    {mobileCategoriesOpen && (
                      <div id="mobile-offer-categories" onKeyDown={handleCategoryKeys}
                        className="
                          category-scroll max-h-[min(320px,calc(100dvh-300px))] overflow-y-auto overscroll-contain mb-3 ml-4 space-y-1
                          border-l-2 border-blue-100
                          pl-3
                        "
                      >
                        {categories.map((category) => {
                          const Icon = category.icon;

                          return (
                            <button
                              key={category.slug}
                              type="button"
                              aria-current={location.pathname === `/offers/${category.slug}` ? "page" : undefined}
                              onClick={() =>
                                goToCategory(category.slug)
                              }
                              className="
                                flex w-full items-center gap-3
                                rounded-[13px] px-3 py-3
                                aria-[current=page]:bg-blue-50 aria-[current=page]:ring-1 aria-[current=page]:ring-blue-200
                                text-left transition-all
                                hover:bg-blue-50
                              "
                            >
                              <Icon
                                size={17}
                                className="text-blue-600"
                              />

                              <span
                                className="
                                  flex-1 text-[13px]
                                  font-bold text-slate-700
                                "
                              >
                                {category.label}
                              </span>

                              <ChevronRight
                                size={15}
                                className="text-slate-400"
                              />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const active =
                item.path
                  ? location.pathname === item.path
                  : location.pathname === "/" &&
                  activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`
                    group mb-1 flex w-full items-center
                    justify-between rounded-[16px]
                    px-3.5 py-3 text-left
                    transition-all duration-300
                    ${active
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50/70"
                      : "hover:bg-blue-50/70"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`
                        flex h-9 w-9 items-center justify-center
                        rounded-[11px] text-[11px] font-black
                        ${active
                          ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                          : "bg-slate-50 text-slate-400"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        text-[15px] font-extrabold
                        ${active
                          ? "text-blue-700"
                          : "text-slate-700"
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ChevronRight
                    size={15}
                    className="text-slate-400"
                  />
                </button>
              );
            })}
          </nav>

          {/* MOBILE CTA */}

          <div className="border-t border-blue-100 bg-[#f8faff] p-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                navigate("/offers");
              }}
              className="
                flex h-[52px] w-full
                items-center justify-center gap-2.5
                rounded-[15px]
                bg-gradient-to-r from-blue-600
                via-indigo-600 to-violet-600
                text-[13px] font-extrabold text-white
                shadow-[0_12px_30px_rgba(37,99,235,0.24)]
              "
            >
              <Sparkles size={15} />
              Explore Offers
              <ArrowRight size={16} />
            </button>

            <p
              className="
                mt-3 px-3 text-center
                text-[10.5px] font-medium
                leading-5 text-slate-400
              "
            >
              Explore categories and review available offers
              from participating providers.
            </p>
          </div>
        </div>
      </div>

      {/* NAVBAR SPACER */}
      <div className="h-[82px]" />
    </>
  );
};

export default Navbar;
import React, { useEffect, useState } from "react";

import {
    BadgeCheck,
    Phone,
    PhoneCall,
    ShieldCheck,
    X,
} from "lucide-react";

/*
  Add the real phone number here when available.

  Example:
  const PHONE_NUMBER = "+18005551234";
  const DISPLAY_NUMBER = "(800) 555-1234";
*/

const PHONE_NUMBER = "";
const DISPLAY_NUMBER = "";

const POPUP_COOLDOWN = 90 * 1000; // 90 seconds
const STORAGE_KEY = "spo_call_popup_closed_at";

const CallPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hasPhoneNumber = Boolean(PHONE_NUMBER);

    const canShowPopup = () => {
        const closedAt = localStorage.getItem(STORAGE_KEY);

        if (!closedAt) {
            return true;
        }

        const elapsed = Date.now() - Number(closedAt);

        return elapsed >= POPUP_COOLDOWN;
    };

    const openPopup = () => {
        if (canShowPopup()) {
            setIsOpen(true);
        }
    };

    const closePopup = () => {
        setIsOpen(false);

        localStorage.setItem(
            STORAGE_KEY,
            Date.now().toString()
        );
    };

    useEffect(() => {
        /*
          First page load
          Small delay feels better than showing
          popup at the exact same millisecond.
        */

        const initialTimer = setTimeout(() => {
            openPopup();
        }, 1200);

        /*
          Desktop exit intent
        */

        const handleMouseLeave = (event) => {
            if (event.clientY <= 5) {
                openPopup();
            }
        };

        document.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        /*
          After cooldown finishes,
          popup can automatically appear again.
        */

        const cooldownChecker = setInterval(() => {
            if (!isOpen && canShowPopup()) {
                setIsOpen(true);
            }
        }, 5000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(cooldownChecker);

            document.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };
    }, [isOpen]);

    /*
      ESC key
    */

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape" && isOpen) {
                closePopup();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen]);

    /*
      Prevent body scrolling while popup is open
    */

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-slate-950/60
        p-4
        backdrop-blur-[5px]
      "
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    closePopup();
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="call-popup-title"
                className="
          relative w-full max-w-[430px]
          overflow-hidden rounded-[28px]
          border border-white/10
          bg-[#0b1020]
          shadow-[0_35px_100px_rgba(0,0,0,0.45)]
        "
            >
                {/* BACKGROUND */}

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-28 -top-28 h-[260px] w-[260px] rounded-full bg-violet-600/25 blur-[90px]" />

                    <div className="absolute -bottom-28 -right-28 h-[260px] w-[260px] rounded-full bg-blue-500/20 blur-[90px]" />

                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                            backgroundSize: "38px 38px",
                        }}
                    />
                </div>

                {/* CLOSE */}

                <button
                    type="button"
                    onClick={closePopup}
                    aria-label="Close popup"
                    className="
            absolute right-4 top-4 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full border border-white/10
            bg-white/[0.07]
            text-slate-400
            transition
            hover:bg-white/[0.12]
            hover:text-white
          "
                >
                    <X size={16} />
                </button>

                {/* CONTENT */}

                <div className="relative px-6 pb-6 pt-9 sm:px-8 sm:pb-8">

                    {/* PHONE ANIMATION */}

                    <div className="relative mx-auto flex h-[92px] w-[92px] items-center justify-center">

                        {/* outer pulse */}
                        <span className="absolute inset-0 animate-ping rounded-full bg-violet-500/10" />

                        <span className="absolute inset-[10px] rounded-full border border-violet-400/20 bg-violet-500/10" />

                        <span className="absolute inset-[20px] rounded-full bg-violet-600 shadow-[0_12px_35px_rgba(124,58,237,0.35)]" />

                        <PhoneCall
                            size={25}
                            className="relative z-10 animate-[wiggle_1.2s_ease-in-out_infinite] text-white"
                        />

                    </div>

                    {/* STATUS */}

                    <div className="mt-4 flex justify-center">
                        <span
                            className="
                inline-flex items-center gap-2
                rounded-full border border-emerald-400/15
                bg-emerald-400/10 px-3 py-1.5
                text-[9px] font-extrabold uppercase
                tracking-[0.13em] text-emerald-300
              "
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                            Need help?
                        </span>
                    </div>

                    {/* TEXT */}

                    <div className="mt-4 text-center">
                        <h2
                            id="call-popup-title"
                            className="
                text-[25px] font-extrabold
                leading-tight tracking-[-0.03em]
                text-white sm:text-[28px]
              "
                        >
                            Want to discuss your options?
                        </h2>

                        <p className="mx-auto mt-3 max-w-[340px] text-[12px] leading-6 text-slate-400">
                            Review available offers online, or use the phone option when
                            contact information is available.
                        </p>
                    </div>

                    {/* PHONE / PLACEHOLDER */}

                    <div
                        className="
              mt-6 rounded-[18px]
              border border-white/[0.08]
              bg-white/[0.055]
              p-4
            "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-xl bg-white/[0.07]
                  text-violet-300
                "
                            >
                                <Phone size={18} />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                                    Phone
                                </p>

                                <p className="mt-1 text-[14px] font-extrabold text-white">
                                    {hasPhoneNumber
                                        ? DISPLAY_NUMBER
                                        : "Phone number coming soon"}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* CALL BUTTON */}

                    {hasPhoneNumber ? (
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="
                group mt-4 flex h-[52px] w-full
                items-center justify-center gap-2.5
                rounded-xl bg-white
                text-[13px] font-extrabold text-slate-950
                shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-violet-100
              "
                        >
                            <PhoneCall size={16} />

                            Call Now
                        </a>
                    ) : (
                        <button
                            type="button"
                            disabled
                            className="
                mt-4 flex h-[52px] w-full
                cursor-not-allowed
                items-center justify-center gap-2.5
                rounded-xl
                bg-white/10
                text-[13px] font-extrabold
                text-white/40
              "
                        >
                            <PhoneCall size={16} />

                            Call Option Unavailable
                        </button>
                    )}

                    {/* TRUST ROW */}

                    <div className="mt-5 grid grid-cols-2 gap-2">

                        <div
                            className="
                flex items-center justify-center gap-2
                rounded-xl border border-white/[0.07]
                bg-white/[0.035] px-3 py-3
              "
                        >
                            <BadgeCheck
                                size={14}
                                className="text-violet-300"
                            />

                            <span className="text-[9px] font-semibold text-slate-400">
                                Explore Options
                            </span>
                        </div>

                        <div
                            className="
                flex items-center justify-center gap-2
                rounded-xl border border-white/[0.07]
                bg-white/[0.035] px-3 py-3
              "
                        >
                            <ShieldCheck
                                size={14}
                                className="text-violet-300"
                            />

                            <span className="text-[9px] font-semibold text-slate-400">
                                Review Terms
                            </span>
                        </div>

                    </div>

                    {/* FOOTNOTE */}

                    <p className="mt-5 text-center text-[9px] leading-4 text-slate-500">
                        Availability, eligibility, rates, fees, and terms are determined
                        by individual providers.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CallPopup;
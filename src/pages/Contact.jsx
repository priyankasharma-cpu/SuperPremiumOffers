import React, { useState } from "react";
import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    Clock3,
    Mail,
    MessageSquareText,
    Phone,
    Send,
    ShieldCheck,
    Sparkles,
    User,
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        /*
          IMPORTANT:
          Connect your backend/API here.
    
          Example:
          await axios.post("/api/contact", formData);
    
          Only set submitted=true after the API confirms success.
        */

        console.log("Contact form data:", formData);

        setSubmitted(true);
    };

    return (
        <main className="overflow-hidden bg-[#f7f9ff]">
            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
                {/* BACKGROUND */}

                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="
              absolute inset-0
              opacity-[0.4]
              [background-image:radial-gradient(#bfdbfe_0.8px,transparent_0.8px)]
              [background-size:28px_28px]
            "
                    />

                    <div
                        className="
              absolute
              -left-[260px] top-[-180px]
              h-[600px] w-[600px]
              rounded-full
              bg-blue-300/25
              blur-[150px]
            "
                    />

                    <div
                        className="
              absolute
              -right-[250px] top-[40px]
              h-[580px] w-[580px]
              rounded-full
              bg-violet-300/20
              blur-[160px]
            "
                    />
                </div>

                <div className="relative mx-auto max-w-[1420px] px-5 sm:px-7 lg:px-10">
                    <div className="mx-auto max-w-[760px] text-center">
                        {/* EYEBROW */}

                        <div
                            className="
                mx-auto
                inline-flex
                items-center gap-2
                rounded-full
                border border-blue-200/80
                bg-white/80
                px-4 py-2
                shadow-[0_8px_30px_rgba(37,99,235,0.07)]
                backdrop-blur-xl
              "
                        >
                            <span
                                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-600
                  text-white
                "
                            >
                                <Sparkles size={11} />
                            </span>

                            <span
                                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-blue-700
                "
                            >
                                Contact Us
                            </span>
                        </div>

                        <h1
                            className="
                mt-6
                text-[38px]
                font-black
                leading-[1.06]
                tracking-[-0.045em]
                text-[#07152e]
                sm:text-[48px]
                lg:text-[58px]
              "
                        >
                            Have a question?{" "}
                            <span
                                className="
                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
                            >
                                Get in touch.
                            </span>
                        </h1>

                        <p
                            className="
                mx-auto mt-5
                max-w-[640px]
                text-[15px]
                font-medium
                leading-7
                text-slate-500
                sm:text-[16px]
              "
                        >
                            Have a question about Super Premium Offers or need help
                            navigating the website? Send us a message using the form below.
                        </p>
                    </div>
                </div>
            </section>

            {/* =====================================================
          CONTACT AREA
      ====================================================== */}

            <section className="relative pb-24 lg:pb-28">
                <div
                    className="
            relative
            mx-auto
            grid
            max-w-[1220px]
            gap-6
            px-5
            sm:px-7
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-7
            lg:px-10
          "
                >
                    {/* =================================================
              LEFT PANEL
          ================================================== */}

                    <div
                        className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-[#071b3b]
              p-7
              text-white
              shadow-[0_25px_70px_rgba(15,23,42,0.16)]
              sm:p-8
              lg:p-9
            "
                    >
                        {/* decorative backgrounds */}

                        <div
                            className="
                pointer-events-none
                absolute
                -left-28 -top-28
                h-[320px] w-[320px]
                rounded-full
                bg-blue-500/30
                blur-[90px]
              "
                        />

                        <div
                            className="
                pointer-events-none
                -bottom-28 -right-24
                absolute
                h-[340px] w-[340px]
                rounded-full
                bg-violet-500/25
                blur-[100px]
              "
                        />

                        <div
                            className="
                pointer-events-none
                absolute inset-0
                opacity-[0.06]
                [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
                [background-size:38px_38px]
              "
                        />

                        <div className="relative">
                            <div
                                className="
                  flex h-[56px] w-[56px]
                  items-center justify-center
                  rounded-[18px]
                  border border-white/15
                  bg-white/10
                  text-blue-300
                  backdrop-blur-xl
                "
                            >
                                <MessageSquareText size={24} />
                            </div>

                            <p
                                className="
                  mt-7
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-blue-300
                "
                            >
                                Contact Support
                            </p>

                            <h2
                                className="
                  mt-3
                  text-[27px]
                  font-black
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-white
                "
                            >
                                We’re here to help with website questions.
                            </h2>

                            <p
                                className="
                  mt-4
                  text-[13px]
                  font-medium
                  leading-6
                  text-slate-300
                "
                            >
                                Send us a message if you have questions about the website,
                                available offer information, or how to navigate to a provider.
                            </p>

                            {/* INFORMATION CARDS */}

                            <div className="mt-8 space-y-3">
                                <InfoItem
                                    icon={Mail}
                                    title="Send a Message"
                                    text="Use the contact form and provide the details of your question."
                                />

                                <InfoItem
                                    icon={Clock3}
                                    title="Your Message"
                                    text="Include enough information so your inquiry can be reviewed."
                                />

                                <InfoItem
                                    icon={ShieldCheck}
                                    title="Provider Questions"
                                    text="For offer-specific terms or eligibility, contact the applicable provider."
                                />
                            </div>

                            {/* NOTICE */}

                            <div
                                className="
                  mt-8
                  rounded-[20px]
                  border border-white/10
                  bg-white/[0.07]
                  p-4
                  backdrop-blur-xl
                "
                            >
                                <div className="flex items-start gap-3">
                                    <BadgeCheck
                                        size={18}
                                        className="mt-0.5 shrink-0 text-blue-300"
                                    />

                                    <p
                                        className="
                      text-[11px]
                      font-medium
                      leading-5
                      text-slate-300
                    "
                                    >
                                        Super Premium Offers presents offer information for
                                        exploration. Individual providers determine their own
                                        eligibility requirements, rates, fees, terms, and
                                        application decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
              FORM CARD
          ================================================== */}

                    <div
                        className="
              relative
              overflow-hidden
              rounded-[30px]
              border border-blue-100/80
              bg-white/90
              p-6
              shadow-[0_20px_65px_rgba(15,23,42,0.07)]
              backdrop-blur-xl
              sm:p-8
              lg:p-10
            "
                    >
                        {/* top gradient line */}

                        <div
                            className="
                absolute inset-x-0 top-0
                h-[4px]
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-violet-600
              "
                        />

                        {/* pastel glow */}

                        <div
                            className="
                pointer-events-none
                absolute
                -right-28 -top-28
                h-[300px] w-[300px]
                rounded-full
                bg-blue-100/60
                blur-[90px]
              "
                        />

                        <div className="relative">
                            {/* FORM HEADER */}

                            <div
                                className="
                  flex flex-col gap-4
                  border-b border-slate-100
                  pb-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
                            >
                                <div>
                                    <p
                                        className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-blue-600
                    "
                                    >
                                        Contact Form
                                    </p>

                                    <h2
                                        className="
                      mt-2
                      text-[25px]
                      font-black
                      tracking-[-0.03em]
                      text-[#07152e]
                    "
                                    >
                                        Send us a message
                                    </h2>

                                    <p
                                        className="
                      mt-1.5
                      text-[12px]
                      font-medium
                      text-slate-500
                    "
                                    >
                                        Fill out the fields below with your inquiry.
                                    </p>
                                </div>

                                <div
                                    className="
                    flex h-12 w-12
                    shrink-0
                    items-center justify-center
                    rounded-[15px]
                    bg-gradient-to-br
                    from-blue-50
                    to-indigo-50
                    text-blue-600
                    ring-1 ring-blue-100
                  "
                                >
                                    <Send size={20} />
                                </div>
                            </div>

                            {/* FORM */}

                            <form
                                onSubmit={handleSubmit}
                                className="mt-7"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <FormField
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        icon={User}
                                        required
                                    />

                                    <FormField
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        icon={Mail}
                                        required
                                    />

                                    <FormField
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Optional"
                                        icon={Phone}
                                    />

                                    <FormField
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What can we help with?"
                                        icon={MessageSquareText}
                                        required
                                    />
                                </div>

                                {/* MESSAGE */}

                                <div className="mt-5">
                                    <label
                                        htmlFor="message"
                                        className="
                      mb-2
                      block
                      text-[11px]
                      font-extrabold
                      text-slate-700
                    "
                                    >
                                        Message
                                        <span className="ml-1 text-blue-600">*</span>
                                    </label>

                                    <div
                                        className="
                      group
                      relative
                      overflow-hidden
                      rounded-[17px]
                      border border-slate-200
                      bg-[#fbfcff]
                      transition-all duration-300
                      focus-within:border-blue-400
                      focus-within:bg-white
                      focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]
                    "
                                    >
                                        <MessageSquareText
                                            size={17}
                                            className="
                        absolute
                        left-4 top-4
                        text-slate-400
                        transition-colors
                        group-focus-within:text-blue-600
                      "
                                        />

                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how we can help..."
                                            className="
                        min-h-[150px]
                        w-full
                        resize-none
                        bg-transparent
                        py-3.5
                        pl-11
                        pr-4
                        text-[13px]
                        font-medium
                        leading-6
                        text-slate-800
                        outline-none
                        placeholder:text-slate-400
                      "
                                        />
                                    </div>
                                </div>

                                {/* DISCLAIMER */}

                                <div
                                    className="
                    mt-5
                    flex items-start gap-3
                    rounded-[17px]
                    border border-blue-100
                    bg-gradient-to-r
                    from-blue-50/70
                    to-indigo-50/50
                    p-4
                  "
                                >
                                    <ShieldCheck
                                        size={17}
                                        className="mt-0.5 shrink-0 text-blue-600"
                                    />

                                    <p
                                        className="
                      text-[10.5px]
                      font-medium
                      leading-5
                      text-slate-500
                    "
                                    >
                                        Please do not include sensitive financial information,
                                        account credentials, passwords, or other confidential
                                        information in your message.
                                    </p>
                                </div>

                                {/* SUBMIT */}

                                <div
                                    className="
                    mt-6
                    flex flex-col gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                                >
                                    <div
                                        className="
                      flex items-center gap-2
                      text-[10.5px]
                      font-semibold
                      text-slate-400
                    "
                                    >
                                        <ShieldCheck
                                            size={14}
                                            className="text-blue-500"
                                        />

                                        Please review your information before submitting.
                                    </div>

                                    <button
                                        type="submit"
                                        className="
                      group
                      relative
                      flex h-[50px]
                      w-full
                      items-center
                      justify-center
                      gap-2.5
                      overflow-hidden
                      rounded-[15px]
                      bg-gradient-to-r
                      from-blue-600
                      via-indigo-600
                      to-violet-600
                      px-7
                      text-[13px]
                      font-extrabold
                      text-white
                      shadow-[0_12px_30px_rgba(37,99,235,0.24)]
                      transition-all duration-300

                      hover:-translate-y-0.5
                      hover:shadow-[0_17px_38px_rgba(79,70,229,0.30)]

                      sm:w-auto
                    "
                                    >
                                        <span
                                            className="
                        absolute
                        -left-14 top-[-30%]
                        h-[160%] w-9
                        rotate-[18deg]
                        bg-white/20
                        blur-sm
                        transition-all duration-700
                        group-hover:left-[120%]
                      "
                                        />

                                        <Send
                                            size={15}
                                            className="relative"
                                        />

                                        <span className="relative">
                                            Send Message
                                        </span>

                                        <ArrowRight
                                            size={15}
                                            className="
                        relative
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                                        />
                                    </button>
                                </div>

                                {/* TEMP FRONTEND STATE */}

                                {submitted && (
                                    <div
                                        className="
                      mt-5
                      flex items-start gap-3
                      rounded-[17px]
                      border border-amber-200
                      bg-amber-50
                      p-4
                    "
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-0.5 shrink-0 text-amber-600"
                                        />

                                        <p
                                            className="
                        text-[11px]
                        font-semibold
                        leading-5
                        text-amber-800
                      "
                                        >
                                            The form UI is working, but your backend/API still needs
                                            to be connected before messages can actually be sent.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

/* =========================================================
   FORM FIELD
========================================================= */

const FormField = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    icon: IconComponent,
    required = false,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="
          mb-2
          block
          text-[11px]
          font-extrabold
          text-slate-700
        "
            >
                {label}

                {required && (
                    <span className="ml-1 text-blue-600">*</span>
                )}
            </label>

            <div
                className="
          group
          relative
          flex h-[52px]
          items-center
          overflow-hidden
          rounded-[16px]
          border border-slate-200
          bg-[#fbfcff]
          transition-all duration-300
          focus-within:border-blue-400
          focus-within:bg-white
          focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]
        "
            >
                {IconComponent && (
                    <IconComponent
                        size={16}
                        className="
              absolute left-4
              text-slate-400
              transition-colors
              group-focus-within:text-blue-600
            "
                    />
                )}

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className="
            h-full w-full
            bg-transparent
            pl-11 pr-4
            text-[13px]
            font-medium
            text-slate-800
            outline-none
            placeholder:text-slate-400
          "
                />
            </div>
        </div>
    );
};

/* =========================================================
   LEFT INFO ITEM
========================================================= */

const InfoItem = ({ icon: IconComponent, title, text }) => {
    return (
        <div
            className="
        group
        flex items-start gap-3.5
        rounded-[18px]
        border border-white/[0.08]
        bg-white/[0.055]
        p-4
        transition-all duration-300

        hover:translate-x-1
        hover:border-blue-400/20
        hover:bg-white/[0.08]
      "
        >
            <span
                className="
          flex h-10 w-10
          shrink-0
          items-center justify-center
          rounded-[13px]
          bg-blue-500/10
          text-blue-300
          transition-all duration-300

          group-hover:bg-blue-500
          group-hover:text-white
        "
            >
                {IconComponent && <IconComponent size={17} />}
            </span>

            <div>
                <h3
                    className="
            text-[12px]
            font-extrabold
            text-white
          "
                >
                    {title}
                </h3>

                <p
                    className="
            mt-1
            text-[10.5px]
            font-medium
            leading-5
            text-slate-400
          "
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Contact;
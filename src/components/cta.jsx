import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { isLoggedIn } from "../lib/session";

export default function CTASection({
  heading,
  description,
  buttonText = "Get Started",
  buttonLink = "/register",
}) {
  const loggedIn = isLoggedIn();
  const resolvedButtonText = loggedIn ? "Go to Dashboard" : buttonText;
  const resolvedButtonLink = loggedIn ? "/dashboard" : buttonLink;

  return (
    <section className="py-10 md:py-20 px-6 max-w-[1152px] mx-auto">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-20 text-center"
        style={{
          background:
            "linear-gradient(120deg,#1E1B4B,#312E81 45%,#4F46E5)",
        }}
      >
        <span className="absolute w-60 h-60 rounded-full bg-orange-500 opacity-50 blur-sm -right-16 -top-24" />
        <span className="absolute w-32 h-32 rounded-full bg-orange-500 opacity-40 blur-sm left-[8%] -bottom-16" />

        <div className="relative z-10">
          <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight mb-4 md:px-40">
            {heading}
          </h2>

          <p className="text-indigo-100/90 text-sm md:text-lg mb-8 md:px-36 max-w-5xl mx-auto">
            {description}
          </p>

          <Link
            to={resolvedButtonLink}
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold text-sm px-7 py-3.5 rounded-xl hover:-translate-y-0.5 transition-transform shadow-[0_18px_40px_-12px_rgba(0,0,0,0.4)]"
          >
            {resolvedButtonText}
            <ArrowRight size={16} />
          </Link>

          {!loggedIn && (
            <p className="text-indigo-200/85 text-xs mt-4">
              No credit card required
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
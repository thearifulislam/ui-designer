import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface LocationState {
  pageName?: string;
}

const NotFound = () => {
  const location = useLocation();
  // Try to get pageName from location state or fallback to generic
  const state = location.state as LocationState | null;
  // Try to extract page name from pathname if not provided
  let pageName = state?.pageName;
  if (!pageName && location.pathname && location.pathname !== "/404") {
    // Remove leading slash and replace dashes with spaces, capitalize
    const path = location.pathname.replace(/^\//, "");
    if (path) {
      pageName = path
        .split("/")
        .filter(Boolean)
        .map(
          (part) =>
            part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ")
        )
        .join(" / ");
    }
  }
  // Fallback
  if (!pageName) pageName = "Page";

  // Use CSS variables for primary/secondary colors for consistency
  const primary = "var(--color-primary, #6c47ff)";
  const primaryDark = "#5636d6"; // fallback for hover
  const secondary = "var(--color-secondary, #ffe03a)";
  const accent = "#f3f4f6";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-indigo-50 to-fuchsia-100">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center animate-fade-in">
        {/* Extra space above */}
        <div className="h-12 sm:h-20" />
        <div
          className="flex flex-col items-center max-w-lg w-full rounded-3xl shadow-2xl p-10 border transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.96)",
            borderColor: primary,
          }}
        >
          {/* Illustration */}
          <div className="mb-6">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle
                cx="60"
                cy="60"
                r="58"
                fill={accent}
                stroke={primary}
                strokeWidth="4"
              />
              <text
                x="50%"
                y="54%"
                textAnchor="middle"
                fill={primary}
                fontSize="48"
                fontWeight="bold"
                dy=".3em"
                style={{ fontFamily: "inherit" }}
              >
                404
              </text>
              <ellipse cx="60" cy="90" rx="28" ry="8" fill={secondary} />
            </svg>
          </div>
          <h1
            className="text-4xl font-extrabold mb-2"
            style={{ color: primary }}
          >
            {pageName} Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sorry, the {pageName.toLowerCase()} you are looking for doesn't
            exist or an error occurred.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mb-4">
            <Link to="/" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto text-white px-6 py-2 rounded-full shadow transition-all duration-200"
                style={{
                  background: primary,
                  borderColor: primary,
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    primaryDark;
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    primaryDark;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    primary;
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    primary;
                }}
              >
                Go to Homepage
              </Button>
            </Link>
            <Link to="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-2 rounded-full border transition-all duration-200"
                style={{
                  color: primary,
                  borderColor: primary,
                  background: "white",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    primary;
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    primary;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "white";
                  (e.currentTarget as HTMLButtonElement).style.color = primary;
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    primary;
                }}
              >
                View Projects
              </Button>
            </Link>
          </div>
          <div
            className="mt-6 text-sm"
            style={{ color: primary, opacity: 0.6 }}
          >
            If you think this is a server error, please{" "}
            <a
              href="mailto:support@example.com"
              className="underline transition-colors duration-200"
              style={{ color: secondary }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  primaryDark;
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = secondary;
              }}
            >
              contact support
            </a>
            .
          </div>
        </div>
        {/* Extra space below */}
        <div className="h-12 sm:h-20" />
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

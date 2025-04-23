
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center animate-fade-in">
      <h1 className="text-6xl font-bold text-green mb-2">404</h1>
      <p className="text-2xl font-medium mb-3">Page Not Found</p>
      <p className="text-muted-foreground max-w-lg mb-8">The page you are looking for doesn't exist or an error occurred.</p>
      <Link to="/">
        <Button className="theme-bg-secondary text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">Go Home</Button>
      </Link>
      <div className="mt-10 flex flex-col gap-4 w-full max-w-sm mx-auto">
        <a
          href="/"
          className="w-full block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium shadow hover:bg-yellow-200 transition"
        >
          Go to Website Home
        </a>
      </div>
      <div className="mt-10 text-sm text-gray-400">Server Error? Try visiting the <Link to="/" className="underline">Homepage</Link>.</div>
    </div>
  );
};
export default NotFound;

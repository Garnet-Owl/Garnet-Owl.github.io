import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}

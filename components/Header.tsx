import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adetoke Faderin</h1>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200 transition">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

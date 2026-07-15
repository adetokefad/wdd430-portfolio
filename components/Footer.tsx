export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} | Xavier Rodriguez | All
          rights reserved
        </p>
      </div>
    </footer>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="text-2xl font-bold">malicc</div>
      <div className="space-x-6 text-sm text-gray-300">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#how" className="hover:text-white">How it works</a>
        <a
          href="#cta"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}

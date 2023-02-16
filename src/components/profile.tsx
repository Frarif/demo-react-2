export function Navbar() {
  return (
    <div className="h-20">
      <nav className="flex justify-evenly content-center items-center">
        <a href="#">
          <img src="src/images/header-logo.png" alt="Header Logo" />
        </a>
        <ul className="flex gap-20">
          <li className="font-bold text-lg text-green-800 hover:text-cyan-500 ">
            HOME
          </li>
          <li className="font-bold text-lg text-green-800 hover:text-cyan-500 ">
            ABOUT US
          </li>
          <li className="font-bold text-lg text-green-800 hover:text-cyan-500 ">
            EXPLORE
          </li>
          <li className="font-bold text-lg text-green-800 hover:text-cyan-500 ">
            CONTACT US
          </li>
        </ul>
        <button className="p-2.5 bg-cyan-500 text-white border rounded-lg hover:bg-cyan-700">
          SIGN UP
        </button>
      </nav>
    </div>
  );
}

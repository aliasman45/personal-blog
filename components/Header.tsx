import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">Home</Link>
      </div>
      <div>
        {/* <input
          type="search"
          className="outline-none border-2 rounded-md"
          placeholder="search....."
        /> */}
      </div>
    </header>
  );
}

export default Header;

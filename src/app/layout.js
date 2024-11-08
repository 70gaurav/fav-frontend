import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faUsers,
  faRocket,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen bg-gray-100 flex flex-col">
          <div className="flex flex-grow h-full">
            {/* Sidebar with Icons */}
            <div className="bg-white w-16 pt-24 p-4 flex flex-col items-center space-y-6 rounded-lg mt-2 mb-2 ml-3 shadow-lg">
              <SidebarLink href="/" icon={faHome} />
              <SidebarLink href="/inbox" icon={faEnvelope} />
              <SidebarLink href="/customers" icon={faUsers} />
              <SidebarLink href="/pipeline" icon={faRocket} />
              <SidebarLink href="/settings" icon={faWrench} />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

function SidebarLink({ href, icon }) {
  return (
    <Link href={href}>
      <div
        tabIndex={0} // Makes the element focusable
        className="flex items-center justify-center w-9 h-9 p-2 rounded-md bg-gray-300 text-black
        hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white
        active:bg-pink-500 active:text-white transition duration-300 cursor-pointer"
      >
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
    </Link>
  );
}

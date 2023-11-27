// components/Footer.js
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { footerData } from "@/app/lib/footerData";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="flex flex-col items-center justify-center">
        <div>Reach me out</div>
        <div className="flex gap-4">
          <Link href={footerData.linkedin} className="text-2xl">
            <FaLinkedin />
          </Link>
          <Link href={footerData.email} className="text-2xl">
            <FaEnvelope />
          </Link>
        </div>
        <div>
          &copy;{footerData.copyright} {footerData.author}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

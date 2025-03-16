import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-4 right-4 flex space-x-3 px-8">
      {/* Social Media Icons */}
      {[
        {
          icon: <FaMapMarkerAlt />,
          link: "https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw",
        },
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/chirocare.kadikoy/#",
        },
        { icon: <FaPhone />, link: "tel:05464213365" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center bg-[#acf48c] text-black rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

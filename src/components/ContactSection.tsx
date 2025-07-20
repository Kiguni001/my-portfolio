import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-[2%] pb-8 px-6 relative border-t border-[#2e5aac]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold text-[#ffffff] mb-4">Portfolio</h2>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl font-semibold text-[#8ab4f8] mb-4">
            ติดต่อฉัน
          </h3>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#"
              className="p-2 bg-[#1a1a1a] rounded-full text-[#8ab4f8] hover:bg-[#2e5aac] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-[#1a1a1a] rounded-full text-[#8ab4f8] hover:bg-[#2e5aac] transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="p-2 bg-[#1a1a1a] rounded-full text-[#8ab4f8] hover:bg-[#2e5aac] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-[#1a1a1a] rounded-full text-[#8ab4f8] hover:bg-[#2e5aac] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        {/* Center */}
        <div>
          <h3 className="text-xl font-semibold text-[#8ab4f8] mb-4">
            โทรศัพท์
          </h3>

          <p className="text-gray-400">095-505-5823</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;

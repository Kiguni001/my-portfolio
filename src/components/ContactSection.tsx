import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-8 px-6 relative border-t border-[#2e5aac]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-[#8ab4f8] mb-4">Do_TaRart</h2>
          <p className="text-gray-400">
            เว็บไซต์ Portfolio ของฉัน <br />
            พัฒนาและออกแบบด้วยความรักในเทคโนโลยี 💙
          </p>
        </div>

        {/* Center */}
        <div>
          <h3 className="text-xl font-semibold text-[#8ab4f8] mb-4">ติดต่อ</h3>
          <p className="text-gray-400">อีเมล: your@email.com</p>
          <p className="text-gray-400">โทร: 012-345-6789</p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl font-semibold text-[#8ab4f8] mb-4">
            ติดตามฉัน
          </h3>
          <div className="flex justify-center md:justify-start gap-4">
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
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Do_TaRart. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactSection;

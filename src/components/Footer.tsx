import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-red-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap text-lg justify-center mt-6">
            {["Home", "About", "Projects", "Contact"].map((section) => (
              <a
                key={section}
                onClick={() => scrollToSection(section)}
                className="mx-4 text-white dark:text-white cursor-pointer hover:underline"
                aria-label={section}
              >
                {section}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-white" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-white dark:text-white text-center">
            © 2024, Made by Njoel.
          </p>

          <div className="flex flex-wrap justify-center mt-4 sm:mt-0 -mx-2">
            <a href="https://github.com/panjiiiiiii" className="mx-2 text-white dark:text-white" aria-label="Github">
              <FaGithub className="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/panji-putra-ardian" className="mx-2 text-white dark:text-white" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a href="https://www.instagram.com/panpanjoel" className="mx-2 text-white dark:text-white" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FiLinkedin, FiTwitter, FiGithub, FiMail } from "react-icons/fi";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-900 dark:text-gray-100 hover:animate-bounce transition px-2 text-xl"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="w-full max-w-2xl pb-14">
        <div className="flex items-center justify-center">
          <ExternalLink href="https://twitter.com/rsinghcodes">
            <FiTwitter />
          </ExternalLink>
          <ExternalLink href="https://github.com/rsinghcodes">
            <FiGithub />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rsingh428">
            <FiLinkedin />
          </ExternalLink>
          <ExternalLink href="mailto:raghvendrasingh.success02@gmail.com">
            <FiMail />
          </ExternalLink>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-900 dark:text-gray-100 text-sm mt-4">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

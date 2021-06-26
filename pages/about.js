import Link from "next/link";

import Container from "@/components/Container";

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="About – Raghvendra Singh">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Raghvendra. I work at{" "}
            <a
              href="https://magazine3.company/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magazine3 Technologies
            </a>{" "}
            as a developer.
          </p>
          <p>
            I'm passionate Front-end developer highly skilled in web development
            technologies: JavaScript (ES5, ES6+), HTML, CSS, React.js, Redux,
            REST, Git, MySQL, and more. I love to work on projects that give me
            a chance to express my creativity. I have a strong passion for
            learning and constant improvement.
          </p>
          <p>I am passionate about code reusability and best practices.</p>
        </div>
      </div>
    </Container>
  );
}

import Container from "@/components/Container";

const Step = ({ children }) => {
  return (
    <li className="flex text-gray-900 dark:text-gray-100 mb-2">
      •<p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const ProjectCard = ({ title, link, children }) => (
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

const HeadTitle = ({ children }) => (
  <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
    {children}
  </h2>
);

export default function About() {
  return (
    <Container title="About – Raghvendra Singh">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="leading-6 text-gray-600 dark:text-gray-400 mt-5 mb-8">
          <p className="mb-4">Hey, I’m Raghvendra Singh. </p>
          <ul>
            <Step>Undergraduate in Information Technology, Batch of '22.</Step>
            <Step>
              Self taught front-end software developer who has extensive
              background in various coding languages, developing web
              applications, and building websites from the ground up.
            </Step>
            <Step>Passionate about traveling and learning new things!</Step>
            <Step>
              How people know{" "}
              <a
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/rsinghcodes"
              >
                me
              </a>
              .
            </Step>
            <Step>Time Zone: Indian Standard Time (GMT+5:30)</Step>
          </ul>
        </div>
        <HeadTitle>Stuff I've built in past</HeadTitle>
        <ProjectCard
          title="Hulu Clone"
          link="https://hulu-yt-clone.vercel.app/"
        >
          Hulu-Clone is a clone website of Hulu Official, built using Nextjs and
          Tailwind CSS. This is a mobile-first responsive web app.
        </ProjectCard>
        <ProjectCard title="MyMart" link="https://mymartstore.netlify.app/">
          MyMart is an online mini-mart, responsive e-commerce web app built
          using React.js, Material-UI, Redux and Firebase.
        </ProjectCard>
        <ProjectCard
          title="Github profiles"
          link="https://profilesgithub.netlify.app/"
        >
          This app gets the profile of a github user using their github username
          and is built using React.js and CSS3.
        </ProjectCard>
        <ProjectCard
          title="Quizymarker"
          link="http://www.quizymarker.epizy.com/"
        >
          Quizymarker is a quiz app where students can check their knowledge in
          Physics, Mathematics and English. This app is built using HTML, CSS,
          Bootstrap and vanilla JavaScript.
        </ProjectCard>
        <HeadTitle>Experience</HeadTitle>
        <ul className="mb-8">
          <Step>HTML5 / CSS3</Step>
          <Step>SASS, Material UI, and Tailwind CSS</Step>
          <Step>JavaScript (ES5, ES6+)</Step>
          <Step>ReactJS, Redux</Step>
          <Step>Next.js</Step>
          <Step>Firebase</Step>
          <Step>C++ / Python / Java (Basics)</Step>
          <Step>Figma (UI/UX tools)</Step>
        </ul>
        <HeadTitle>Footnote</HeadTitle>
        <p className="prose text-gray-600 dark:text-gray-400">
          This site is built using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>
          . Thank you for visting : )
        </p>
      </div>
    </Container>
  );
}

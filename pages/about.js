import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

const HeadTitle = ({ marginBottom, children }) => {
  return (
    <h2
      className={`font-bold text-3xl tracking-tight ${marginBottom} text-black dark:text-white`}
    >
      {children}
    </h2>
  );
};

export default function About() {
  return (
    <Container title="About – Raghvendra Singh">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Raghvendra undergraduate in <b>Information Technology</b>,
            batch of '22.
          </p>
          <p>
            <b>Self taught</b> front-end software developer who has extensive
            background in various coding languages, developing web applications,
            and building websites from the ground up.
          </p>
          <p>
            I know my ways on back-end but what I really like doing the most is
            Front-end work. Ideally, I love working on all stages of building a
            web apps - from the first design, implementation to the finished
            product. Currently, my main area of focus has been Javascript and
            thier frameworks/libraries.
          </p>
          <p>
            Beside that, I'm passionate about traveling and learning new things
            that is constantly expanding with new and interesting topics.
          </p>
          <p>Time Zone: Indian Standard Time (GMT+5:30)</p>
        </div>
        <HeadTitle marginBottom="mb-4">Stuff I've built in past</HeadTitle>
        <ProjectCard
          title="Hulu Clone"
          link="https://hulu-yt-clone.vercel.app/"
        >
          Hulu-Clone is a clone website of Hulu Official, built using Nextjs and
          Tailwind CSS. This is a mobile-first responsive web app.
        </ProjectCard>
        <ProjectCard title="MyMart" link="https://mymartstore.netlify.app/">
          MyMart is an online mini-mart, responsive e-commerce web app built
          using React.js, Styled-components, Material-UI, Redux and Firebase.
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
        <div className="prose dark:prose-dark max-w-none w-full">
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Bootstrap and SASS</li>
            <li>Styled-components, Material UI, and Tailwind CSS</li>
            <li>JavaScript (ES5, ES6+)</li>
            <li>ReactJS, Redux and Next.js</li>
            <li>Git (Version Control)</li>
            <li>Firebase</li>
            <li>C++ / Python / Java (Basics)</li>
            <li>Figma (UI/UX tool)</li>
          </ul>
        </div>
        <HeadTitle marginBottom="mb-4">Footnote</HeadTitle>
        <p className="prose text-gray-600 dark:text-gray-400">
          This site is built using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          and Tailwind CSS. Thank you for visting : )
        </p>
      </div>
    </Container>
  );
}

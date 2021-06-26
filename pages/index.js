import Link from "next/link";

// import Timeline from "../components/Timeline";
import Container from "../components/Container";
// import BlogPost from "../components/BlogPost";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Raghvendra Singh
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a Front-end software developer, and blog writer. I work as a
          developer at{" "}
          <a
            href="https://magazine3.company/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Magazine3 Technologies.
          </a>{" "}
          You’ve found my personal slice of the internet –&nbsp;
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          My Blog Posts
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        /> */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="My Mart"
          description="MyMart is an online mini-mart, responsive e-commerce web app built using React.js, Material-UI, Redux and Firebase."
          href="https://mymartstore.netlify.app/"
          icon="react2025"
        />
        <ProjectCard
          title="Github Profiles"
          description="This app gets the profile of a github user using their github username and is built using React.js and CSS3."
          href="https://profilesgithub.netlify.app/"
          icon="nextjs"
        />
        <ProjectCard
          title="Quizymarker"
          description="Quizymarker is a quiz app where students can check their knowledge in Physics, Mathematics and English. This app is built using HTML, CSS, Bootstrap and vanilla JavaScript."
          href="http://www.quizymarker.epizy.com/"
          icon="react2025"
        />

        {/* <Timeline /> */}
      </div>
    </Container>
  );
}

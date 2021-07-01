import Link from "next/link";

import Container from "../components/Container";
import BlogPost from "../components/BlogPost";

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
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Blog Posts ☕
        </h3>
        <BlogPost
          title="8 JavaScript hacks you should know as front-end or full stack developer."
          publishDate="June 30, 2021"
          readTime="5 min read"
          slug="style-guides-component-libraries-design-systems"
        />
      </div>
    </Container>
  );
}

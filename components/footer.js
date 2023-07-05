import Link from "next/link";
import { sections, sections_name } from "./sidebar";

const Footer = () => {
  return (
    <footer>
      <nav>
        <span className="logo">
          {/* <img src={require(`../images/o5.png`)} alt="" /> */}
          <a href="">Techmaster Tools</a>
        </span>
      </nav>
      <span className="sp2">
        {sections_name.map((section) => {
          return (
            <Link
              href={`/${section}`}
              className="a section_selector"
              key={section}
            >
              {sections[section].title}
            </Link>
          );
        })}
        <a
          className="a section_selector"
          target="_blank"
          href="https://blog.techmastertools.net/blogs"
        >
          Blog
        </a>
      </span>
    </footer>
  );
};

export default Footer;

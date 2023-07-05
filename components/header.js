import { sections, sections_name } from "./sidebar";
import { client_domain } from "../libs/services";
import Link from "next/link";

const Header = () => {
  const toggle_sidebar = () => {
    let is_on = document.getElementById("sidebar").style.display === "flex";

    document.getElementById("sidebar").style.display = is_on ? "none" : "flex";
    document.getElementById("x").style.display = is_on ? "none" : "flex";
    document.getElementById("i").style.display = is_on ? "flex" : "none";
  };

  return (
    <header>
      <nav>
        <span className="logo">
          {/* <img src={require(`../images/o5.png`)} alt="" /> */}
          <a href={client_domain}>Techmaster Tools</a>
        </span>
        <span className="nav2">
          {sections_name.map((section) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={section}
                href={`/${section}`}
                id="sc_1"
              >
                {sections[section].title}
              </Link>
            );
          })}
          <a
            href="https://blog.techmastertools.net/blogs"
            target="_blank"
            style={{ textDecoration: "none" }}
            id="sc_1"
          >
            Blog
          </a>
        </span>
        <i
          className="material-icons-outlined i"
          id="i"
          onClick={toggle_sidebar}
        >
          menu
        </i>
      </nav>
    </header>
  );
};

export default Header;

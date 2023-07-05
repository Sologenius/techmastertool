import React from "react";
import Contact from "../sections/contact";
import IP from "../sections/ip";
import Mac_address from "../sections/mac_address";
import Password_generator from "../sections/password_generator";
import Port_finder from "../sections/port_finder";
import Student_loan_calculator from "../sections/student_loan_calculator";
import Link from "next/link";

const sections = new Object({
  student_loan_calculator: {
    component: <Student_loan_calculator />,
    title: "Student Loan Repayment",
  },
  password_generator: {
    component: <Password_generator />,
    title: "Password Generator",
  },
  ip: { component: <IP />, title: "IPV4 / IPV6 Subnet Calculator" },
  mac_address: { component: <Mac_address />, title: "MAC Address Finder" },
  port_finder: { component: <Port_finder />, title: "TCP / UDP Port Finder" },
  contact: { component: <Contact />, title: "Contact" },
});

const sections_name = Object.keys(sections);

const Sidebar = () => {
  const toggle_sidebar = () => {
    let is_on = document.getElementById("sidebar").style.display === "flex";

    document.getElementById("sidebar").style.display = is_on ? "none" : "flex";
    document.getElementById("x").style.display = is_on ? "none" : "flex";
    document.getElementById("i").style.display = is_on ? "flex" : "none";
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="content">
        <nav>
          <span className="logo">
            <a href="">Techmaster Tools</a>
          </span>
          <i
            className="material-icons-outlined x"
            id="x"
            onClick={toggle_sidebar}
          >
            close
          </i>
        </nav>
        {sections_name.map((section) => {
          return (
            <Link
              className="a section_selector"
              key={section}
              href={`/${section}`}
              onClick={toggle_sidebar}
            >
              {sections[section].title}
            </Link>
          );
        })}
        <a
          className="a section_selector"
          target="_blank"
          href="https://news.techmastertools.net"
        >
          Blog
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
export { sections, sections_name };

import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { get_request } from "../libs/services";
import Contact from "../sections/contact";
import IP from "../sections/ip";
import Mac_address from "../sections/mac_address";
import Password_generator from "../sections/password_generator";
import Port_finder from "../sections/port_finder";
import Student_loan_calculator from "../sections/student_loan_calculator";
import Site_head from "./head";

export const getServerSideProps = async (context) => {
  let data = await get_request(`tool_data/${context.query.section}`);

  return { props: { data } };
};

const Section = ({ data }) => {
  return (
    <div id="body">
      <Site_head section={data?.title} />

      <Sidebar />
      <Header />
      <main>
        {data ? (
          data.tool === "ip" ? (
            <IP data={data} />
          ) : data.tool === "port_finder" ? (
            <Port_finder data={data} />
          ) : data.tool === "password_generator" ? (
            <Password_generator data={data} />
          ) : data.tool === "mac_address" ? (
            <Mac_address data={data} />
          ) : data.tool === "contact" ? (
            <Contact data={data} />
          ) : data.tool === "student_loan_calculator" ? (
            <Student_loan_calculator data={data} />
          ) : null
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default Section;

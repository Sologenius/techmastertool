import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { get_request } from "../libs/services";
import Student_loan_calculator from "../sections/student_loan_calculator";
import Site_head from "./head";

export const getServerSideProps = async () => {
  return {
    props: { data: await get_request("tool_data/student_loan_calculator") },
  };
};

export default function Home({ data }) {
  return (
    <div id="body">
      <Site_head />

      <Sidebar />
      <Header />

      <main>{data ? <Student_loan_calculator data={data} /> : null}</main>

      <Footer />
    </div>
  );
}

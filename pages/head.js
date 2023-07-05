import Head from "next/head";

const Site_head = ({ section }) => {
  return (
    <Head>
      <meta
        name="description"
        content="Welcome to our website - your one-stop destination for quick tech tools! We understand that time is of the essence when it comes to technology, and that's why we've curated a collection of efficient tools to help you get things done in no time. Need a secure password for your account? Try our password generator tool that generates complex and random passwords with just a click. Or maybe you need to calculate a subnet for your network? Our subnet calculator tool is just what you need to get accurate results quickly. Our website also offers a variety of other tech tools such as binary/hexadecimal converters, IP address lookup, and more. With our easy-to-use tools, you'll be able to simplify your tech tasks and save valuable time. Try our tools today and experience the convenience of quick tech tools at your fingertips!"
      />
      <meta
        name="keywords"
        content="Tech tools,Quick tools,Password generator,Secure password,Student loan calculator,IP subnet calculator,MAC address finder,Port finder,Networking tools,Online calculator,Web-based tools,Free tools,Easy-to-use tools,Internet tools,Network utilities,Network calculator,IP address lookup,Random number generator,IP address lookup, Student loan calculator,Student loan repayment calculator,Student loan interest calculator,Student loan payoff calculator,Federal student loan calculator,Private student loan calculator,Student loan refinancing calculator,Student loan forgiveness calculator,Student loan repayment options,Student loan interest rates,Student loan consolidation,Student loan eligibility,Student loan payments,Student loan refinance rates,Student loan default,Student loan repayment plans,Student loan deferment,Student loan forbearance,Student loan forgiveness programs,Student loan counseling,Student loan advice,How to pay off student loans, Password generator,Secure passwords,Strong passwords,Random passwords,Password manager,Password strength,Password complexity,Password security,Password safety,Password suggestions,Password tips,Password guidelines,Password rules,Password best practices,Password policies, IP subnet calculator, Subnet mask calculator, CIDR calculator, IPv4 subnet calculator, IPv6 subnet calculator, Network address calculator, IP addressing tool, Subnetting tool, IP subnetting calculator, Network planning tool, IP address range calculator, IP address calculator online, IP subnet calculator online, Free subnet calculator, Online subnet calculator, IP address range generator, IPv4 subnetting tool, IPv6 subnetting tool, Network subnet calculator"
      />

      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600&family=DM+Sans:ital,wght@0,400;0,700;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@400;500;600&family=Raleway:wght@600;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      <title>{section ? `${section} |` : ""} Techmaster Tools</title>
    </Head>
  );
};

export default Site_head;

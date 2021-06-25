import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copyright &#169; {year}</p>
      </footer>
    </>
  );
};
export default Footer;

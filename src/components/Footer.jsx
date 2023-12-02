import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "#109648",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    margin: "5px 5px",
    display: "flex",
    gap: "40%"
  };
//   const copyRightStyle = {

//   }
  return (
    <>
      <div className="bg-dark pt-3">
        <div style={footerStyle} className="">
          <h3 className="py-2 ms-5">Pakistan's Traditional Food</h3>
          <div className="footer-copyright text-center py-3">
            © {new Date().getFullYear()} Copyright:
              <span className="ms-2">Food Lovers❤️</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

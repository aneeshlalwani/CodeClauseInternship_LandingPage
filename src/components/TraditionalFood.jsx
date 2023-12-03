import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import biryani from "../assests/images/biryani.jpg";
import sajji from "../assests/images/lamb-sajji.jpg";
import khadiKabab from "../assests/images/Khadi-Kabab.jpg";
import chicken from "../assests/images/balochi-sajji.jpg";
import nihari from "../assests/images/niharrri.jpg";
import haleem from "../assests/images/haleem.jpg";

const TraditionalFood = () => {
  const titleStyle = {
    fontFamily: "Dancing Script, cursive, Poppins, sans-serif",
    color: "white",
    fontWeight: "bold",
    background: "rgba(0, 0, 0, 0.3)",
  };
  const biryaniImage = {
    background: `url(${biryani})`,
    backgroundSize: "cover",
  };
  const sajjiImage = {
    background: `url(${sajji})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const chickenImage = {
    background: `url(${chicken})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
   const khadiKababImage = {
    background: `url(${khadiKabab})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const nihariImage = {
    background: `url(${nihari})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const haleemImage = {
    background: `url(${haleem})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="container-fluid" style={{background: '#000'}}>
        <h2 className="text-center text-white pt-2" style={{fontFamily: 'Source Code Pro, monospace'}}>Explore the Pakistani Desi Food</h2>
        {/* FIRST ROW */}
        <Row className="text-center px-2 py-3">
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-danger py-4"
            style={biryaniImage}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Biryani
              </h2>
            </div>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-success py-3"
            style={sajjiImage}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Lamb Sajji
              </h2>
            </div>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-primary py-3"
            style={chickenImage}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Balouchi Chicken Sajji
              </h2>
            </div>
          </Col>
        </Row>
        {/* SECOND ROW */}
        <Row className="text-center px-2 py-3">
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-danger py-4"
            style={khadiKababImage}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Khadi Kabab
              </h2>
            </div>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-success py-3"
            style={nihariImage}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Niharri
              </h2>
            </div>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-primary py-3"
            style={haleemImage}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Haleem
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TraditionalFood;

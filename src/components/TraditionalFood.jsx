import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import biryani from "../assests/images/biryani.jpg";
import sajji from "../assests/images/lamb-sajji.jpg";
// import chapliKabab from "../assests/images/chapli-kebab.jpeg";
import chicken from "../assests/images/balochi-sajji.jpg";

const TraditionalFood = () => {
  const titleStyle = {
    fontFamily: "Dancing Script, cursive, Poppins, sans-serif",
    color: "white",
    fontWeight: "bold",
    background: "rgba(0, 0, 0, 0.3)",
  };
  const karachi = {
    background: `url(${biryani})`,
    backgroundSize: "cover",
  };
  const islamabad = {
    background: `url(${sajji})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  const lahore = {
    background: `url(${chicken})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <>
      <div className="container-fluid bg-dark">
        <h2 className="text-center text-white pt-2">
          Pakistan's Desi Food
        </h2>
        <Row className="text-center px-2">
          <Col
            lg={4}
            md={12}
            sm={12}
            className="border border-danger py-4"
            style={karachi}
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
            style={islamabad}
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
            style={lahore}
          >
            <div className="py-5">
              <h2 className="fs-1" style={titleStyle}>
                Balouchi Chicken Sajji
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TraditionalFood;

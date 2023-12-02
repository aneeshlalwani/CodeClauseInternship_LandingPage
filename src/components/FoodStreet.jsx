import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import burnsRoad from "../assests/images/burns-road.jpg";
import melodyPark from "../assests/images/melody_park.jpg";
import lakshmiChowk from "../assests/images/lakshmi-chowk.jpg";

const FoodStreet = () => {
  const titleStyle = {
    fontFamily: "Dancing Script, cursive, Poppins, sans-serif",
    color: "white",
  };
  const karachi = {
    background: `url(${burnsRoad})`,
    backgroundSize: "cover",
  };
  const islamabad = {
    background: `url(${melodyPark})`,
    backgroundSize: "cover",
  };
  const lahore = {
    background: `url(${lakshmiChowk})`,
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="container-fluid bg-dark">
        <h2 className="text-center text-white pt-2">
          Pakistan's Most Popular Food Streets
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
              <h3 className="fs-2" style={titleStyle}>
                Burns Road
              </h3>
              <h2 className="fs-1" style={titleStyle}>
                Karachi
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
              <h3 className="fs-2" style={titleStyle}>
                Melody Park
              </h3>
              <h2 className="fs-1" style={titleStyle}>
                Islamabad
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
              <h3 className="fs-2" style={titleStyle}>
                Lakshmi Chow
              </h3>
              <h2 className="fs-1" style={titleStyle}>
                Lahore
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FoodStreet;

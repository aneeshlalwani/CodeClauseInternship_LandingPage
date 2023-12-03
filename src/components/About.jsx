import food from "../assests/images/traditional_dishes.png"
const About = () => {
    const aboutStyle = {
        background: "#000"
    }
    const ImageSectionStyle = {
        background: "orange",
        borderRadius: "10px",
        width: "80%",
    }
    const foodImage = {
        width: "50%",
        height: "auto",
        objectFit: "cover",
    }
  return (
    <>
      <div style={aboutStyle}>
        <h2 className="text-center text-white pt-4" style={{fontFamily: 'Source Code Pro, monospace'}}>
          Explore the Pakistan's traditional food
        </h2>
        <div className="py-3 text-center mx-auto" style={ImageSectionStyle}>
        <p className="px-5 fs-5 fw-bold" style={{fontFamily: 'Nova Square, sans-serif'}}>
          Discover the delicious world of Pakistan's authentic cuisine! Immerse
          yourself in the flavors of tradition, with every bite telling a story
          of aromatic spices, bold textures, and timeless recipes. Let the heart
          of Pakistani cuisine take you on a flavorful journey, inviting you to
          savor the rich culinary heritage of this vibrant nation.
        </p>
        <img src={food} alt="traditional-dishes-of-Pakistan" className="" style={foodImage}/>
        </div>
      </div>
    </>
  );
};

export default About;

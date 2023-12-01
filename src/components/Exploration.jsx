// import Button from 'react-bootstrap/Button';

const Exploration = () => {
    // const mainStyle = {
    //     background: 'linear-gradient(45deg, #A10100, #DA1F05, #F33C04, #FE650D, #FFC11F, #FFF75D)',
    //     // "#023020"
    // }
    const videoSectionStyle = {
        background: "#e25822", 
        width: "70%",
        height: 'auto', 
        margin: 'auto',
        borderRadius: '10px'
    }
  return (
    <>
      <div style={{background: "#000"}}> 
        <h1 className="text-white text-center p-3">Exploration</h1>\
        <div className="" style={videoSectionStyle}>
          <iframe
            width="950"
            height="570"
            className="p-5"
            // style={videoStyle}
            src="https://www.youtube.com/embed/vQMo2Sg1p-Y?si=vwQ2PvwYN1yizHQu"
            title="YouTube video player"
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <Button className='m-auto' variant="success">Get More</Button>{' '} */}
        </div>
        
      </div>
    </>
  );
};

export default Exploration;

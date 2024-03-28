import React, {useState} from "react";
import {Link} from "react-router-dom";
import image3 from "../Images/notepad_image3.jpg";
import image4 from "../Images/notepad_image4.jpg";

function About () {
  const [oneHovered, setOneHovered] = useState(false);
  const [twoHovered, setTwoHovered] = useState(false);
  const [threeHovered, setThreeHovered] = useState(false);
  const [fourHovered, setFourHovered] = useState(false);
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center"
    },

    one: {
      width: "230px",
      height: "400px",
      margin: "20px",
      borderRadius: "10px",
      transition: "transform 0.3s ease-in",
      backgroundColor: "white",
      cursor: "pointer",
      justifyContent: "center"
    },

    two: {
      width: "230px",
      height: "400px",
      margin: "20px",
      borderRadius: "10px",
      transition: "transform 0.3s linear",
      backgroundColor: "white",
      cursor: "pointer",
      justifyContent: "center",
    },

    three: {
      width: "230px",
      height: "400px",
      margin: "20px",
      borderRadius: "10px",
      transition: "transform 0.3s linear",
      backgroundColor: "white",
      cursor: "pointer",
      justifyContent: "center",
    },

    four: {
      width: "230px",
      height: '400px',
      margin: '20px',
      borderRadius: '10px',
      transition: 'transform 0.3s ease-in',
      backgroundColor: "white",
      cursor: 'pointer',
      justifyContent: "center",
    },

    "one:hover": {
      boxShadow: "8px 8px 1px -5px rgba(0, 0, 0, 0.9)",
      transition: "transform 0.3s linear",
      transform: "scale(1.1)",
    },

    "two:hover": {
      boxShadow: "8px 8px 1px -5px rgba(0, 0, 0, 0.9)",
      transition: "transform 0.3s linear",
      transform: "scale(1.1)",
    },

    "three:hover": {
      boxShadow: "8px 8px 1px -5px rgba(0, 0, 0, 0.9)",
      transition: "transform 0.3s linear",
      transform: "scale(1.1)",
    },

    "four:hover": {
      boxShadow: "8px 8px 1px -5px rgba(0, 0, 0, 0.9)",
      transition: "transform 0.3s linear",
      transform: "scale(1.1)",
    },
  }

  const linkStyles = {
    easeInOut: {
      transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    },
    transitionShadow: {
      transitionProperty: "box-shadow",
      transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
      transitionDuration: "0.15s",
    },
    p8: {
      padding: "2rem",
    },
    border: {
      borderWidth: "1px",
    },
    roundedLg: {
      borderRadius: "10px",
    },
    justifyBetween: {
      justifyContent: "space-between",
    },
    flexCol: {
      flexDirection: "column",
    },
    maxW260px: {
      maxWidth: "260px",
    },
    hFull: {
      height: "100%",
    },
    flex: {
      display: "flex",
    },
  };

  // const mediaQueryStyles = {
  //   '@media (max-width: 768px)': {
  //     container: {
  //       flexDirection: 'column', /* Change to vertical layout */
  //     },
  //   },
  // };

  // merging all the styles in linkStyles
  const combinedStyles = Object.values(linkStyles).reduce((acc, val) => {
    return { ...acc, ...val };
  }, {});
  
  
  
    return (
      <div>
       <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis" style={{fontFamily: 'Times New Roman, serif' }}>Why choose PixelPen?</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" style={{fontFamily: 'Helvetica, sans-serif' }}>PixelPen is not only for note-taking and project planning, but also managing tasks anywhere you are, so you can stay on top of your priorities.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link className="btn btn-primary mx-2 text-black" to="./login" role="button">Start for free</Link>
          </div>
        </div>
        <div className="overflow-hidden">
      </div>
      </div>
      <div className="container" style={{...styles.container }}>
        <div className="one" style={{...styles.one, ...(oneHovered && styles["one:hover"])}} 
          onMouseEnter={() => setOneHovered(true)}
          onMouseLeave={() => setOneHovered(false)}>
          <Link className="flex h-full max-w-[260px] flex-col justify-between rounded-lg border border-black p-8 md:max-w-[310px] undefined transition-shadow ease-in-out hover:-translate-y-px hover:shadow-button" to="/login" style={{...combinedStyles, textDecoration: "none"}}><div><h5 className="headline headline--5 mb-2 font-semibold text-black">Reliable</h5><p style={{color: "black"}}>PixelPen is like having a digital extension of your brain. It helps you capture everything important. <span style={{color: "blue"}}>Start with us today!</span></p></div></Link>
        </div>
        <div className="two" style={{...styles.two, ...(twoHovered && styles["two:hover"])}} 
          onMouseEnter={() => setTwoHovered(true)}
          onMouseLeave={() => setTwoHovered(false)}>
          <Link className="flex h-full max-w-[260px] flex-col justify-between rounded-lg border border-black p-8 md:max-w-[310px] undefined transition-shadow ease-in-out hover:-translate-y-px hover:shadow-button" to="/" style={{...combinedStyles, textDecoration: "none"}}><div><h5 className="headline headline--5 mb-2 font-semibold text-black">Organized</h5><p style={{color: "black"}}>Capture everything important and access it on your devices. Feel the calm of being more organized. <span style={{color: "blue"}}>Contact us</span></p></div></Link>
       </div>
      <div className="three" style={{...styles.three, ...(threeHovered && styles["three:hover"])}} 
          onMouseEnter={() => setThreeHovered(true)}
          onMouseLeave={() => setThreeHovered(false)}>
        <Link className="flex h-full max-w-[260px] flex-col justify-between rounded-lg border border-black p-8 md:max-w-[310px] undefined transition-shadow ease-in-out hover:-translate-y-px hover:shadow-button" to="/notes" style={{...combinedStyles, textDecoration: "none"}}><div><h5 className="headline headline--5 mb-2 font-semibold text-black">Accessible</h5><p style={{color: "black"}}>Writing down your thought is like putting a leash on a wild idea. Explore PixelPen and <span style={{color: "blue"}}>discover note taking</span></p></div></Link>
      </div>
      <div className="four" style={{...styles.four, ...(fourHovered && styles["four:hover"])}} 
          onMouseEnter={() => setFourHovered(true)}
          onMouseLeave={() => setFourHovered(false)}>
        <Link className="flex h-full max-w-[260px] flex-col justify-between rounded-lg border border-black p-8 md:max-w-[310px] undefined transition-shadow ease-in-out hover:-translate-y-px hover:shadow-button" to="/todo" style={{...combinedStyles, textDecoration: "none"}}><div><h5 className="headline headline--5 mb-2 font-semibold text-black">Task management</h5><p style={{color: "black"}}>The palest ink is better than the best memory. Utilize our <span style={{color: "blue"}}>todo list feature</span> for better task management</p></div></Link>
      </div>
      </div>
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src={image3} class="d-block mx-lg-auto img-fluid" alt="notepad" width="700" height="500" loading="lazy" />
        </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{fontFamily: 'Times New Roman, serif', marginTop: "-50px" }}>More than a notebook</h1>
        <p class="lead" style={{fontFamily: 'Helvetica, sans-serif' }}>Keep all your project materials together and organized- including checklists, emails and minutes. Smart search puts it all at your fingertips.</p>
      </div>
      </div>
    </div>
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={image4} className="d-block mx-lg-auto img-fluid" alt="notepad" width="700" height="500" loading="lazy" />
        </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{fontFamily: 'Times New Roman, serif', marginTop: "-50px" }}>Never lose an idea</h1>
        <p className="lead" style={{fontFamily: "Helvetica, sans-serif", marginTop: "-10px"}}>Write down ideas, inspirations and insights whenever they come and anywhere you are, passing thoughts into plans for action.</p>
      </div>
      </div>
    </div>
  </div>
    );
}

export default About;


    

 


    
  
  





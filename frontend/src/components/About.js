import React, {useState} from "react";
import {Link} from "react-router-dom";
import image from "../Images/work.jpg";

function About () {
  const [oneHovered, setOneHovered] = useState(false);
  const [twoHovered, setTwoHovered] = useState(false);
  const [threeHovered, setThreeHovered] = useState(false);
  const [fourHovered, setFourHovered] = useState(false);
  const styles = {
    container: {
      display: "flex",
    },
    one: {
      width: "250px",
      height: "400px",
      margin: "20px",
      borderRadius: "10px",
      transition: "transform 0.3s ease-in",
      cursor: "pointer",
      textAlign: "center",
      justifyContent: "center"
    },

    two: {
      width: "250px",
      height: "400px",
      margin: "20px",
      borderRadius: "10px",
      transition: "transform 0.3s linear",
      cursor: "pointer",
      textAlign: "center",
      justifyContent: "center",
    },

    three: {
      width: "250px",
      height: "400px",
      margin: "20px",
      borderRadius: "10px",
      transition: "transform 0.3s linear",
      cursor: "pointer",
      textAlign: "center",
      justifyContent: "center",
    },

    four: {
      width: "250px",
      height: '400px',
      margin: '20px',
      borderRadius: '10px',
      transition: 'transform 0.3s ease-in',
      cursor: 'pointer',
      textAlign: "center",
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
  // merging all the styles in linkStyles
  const combinedStyles = Object.values(linkStyles).reduce((acc, val) => {
    return { ...acc, ...val };
  }, {});
  
  
  
    return (
      <div>
       <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 text-body-emphasis">Organize yours thoughts effortlessly</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">With our intuitive and user-friendly interface, you can quickly create, edit, and manage notes wherever you go, whether you're at home, work, or on the go</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <Link className="btn btn-outline-primary mx-2 text-black" to="./login" role="button">Start for free</Link>
      </div>
    </div>
    <div className="overflow-hidden">
    </div>
  </div>
  <div className="container" style={{...styles.container}}>
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
        <img src={image} class="d-block mx-lg-auto img-fluid" alt="PIC" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
      </div>
    
    );
}

export default About;


    

 


    
  
  





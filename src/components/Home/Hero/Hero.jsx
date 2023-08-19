import './Hero.css';
function Hero() {
  return (
 <>
 <div className="container">
    <div className="textData">
        <div className="headingText">
        <p className='whiteText'>Learn<span className='purpleText'>. </span>Build<span className='purpleText'>.</span></p>
        <p className='purpleText'>Share<span className='whiteText'>. </span></p>
        </div>
        <p className='paraText'>Project Vault, a dynamic platform dedicated to sharing your projects and sparking innovation. Here, we believe that knowledge shared is innovation multiplied.</p>
        <button className='outlineButton'>
            Checkout Project
        </button>
    </div>
    <div className="imageData">
        <div className="vertical-img"></div>
        <div className="displayVer">
            <div className="horizontal1-img"></div>
            <div className="horizontal2-img"></div>
        </div>
        <div className="vertical2-img"></div>
    </div>
 </div>
 </>

  )
}

export default Hero;
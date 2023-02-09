
import React,{useState,useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import "animate.css"
import TrackVisibility from 'react-on-screen';
import 'lazysizes';


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web 3.0 Enthusiast","Blockchain"]
    const [text, setText] = useState("");
    const period = 2000;
    const [delta, setDelta] = useState(300-Math.random()*100);

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();
        },delta)
        return ()=> {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length+1)
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        } else if(isDeleting && updatedText ===""){
            setIsDeleting(false);
            setLoopNum(loopNum +1)
            setDelta(500);
        }
    }

    return (
    <section className='banner' id="home" >
        <Container >
            <Row>
                    <TrackVisibility>
                    {({ isVisible })=> 
                    <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    </div>}
                    </TrackVisibility>
                    <h1>{`Hi I'm Jawid `}<span className='wrap'>{text}</span></h1>
                    <p>One Line of Code at a Time</p>
                    <TrackVisibility>
                    {({ isVisible })=> 
                    <div className={isVisible ? "animate__animated animate__bounceInLeft": ""}>
                    <button onClick={()=> console.lop("meow") }>Lets Connent<ArrowRightCircle size={25} /></button>
                    </div>
                    }
                    </TrackVisibility>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
import { useRef } from "react"

const CourierGame = (props: any) => {

  const animationRef: any = useRef(null)
  const destinationRef: any = useRef(null)

  const animationWrapperStyles = {
    position: "absolute",
    height: "40vh",
    width: "100%",
    overflow: "hidden",
    background: "#fff3da"
    
  } as React.CSSProperties

  const animationImgStyles = {
    top: "20%",
    width: '100px',
    left: 0,
    position: "absolute",
    transition: "all .4s linear",
    
  } as React.CSSProperties

  const finishStyle = {
    top: "20%",

    width: "100px",
    height: "100px",
    position: "absolute",
    right: 0
  } as React.CSSProperties


  const handleKey = (e: any) => {
    if (animationRef.current ) {
      const destinationPos = destinationRef.current.getBoundingClientRect()
      const courierPos = animationRef.current.getBoundingClientRect()
      switch(e.key) {
        case "ArrowRight": 
          animationRef.current.style.transform = `rotate3d(0, 1, 0, 0deg)`;
          animationRef.current.style.left = `${courierPos.x + 100}px`;
          console.log()
          if (courierPos.x + parseInt(destinationRef.current.style.width) >= destinationPos.x) {
            alert("Ai luat comanda, acu hai cu ea ca mi-e foame")
          }
         break

        case "ArrowLeft": 
          animationRef.current.style.transform = `rotate3d(0, 1, 0, 180deg)`;
          animationRef.current.style.left = `${courierPos.x - 100}px`;
          break
        
        default: animationRef.current.style.left = "0vw";
      }
    }
  }

  document.addEventListener('keydown', (e) => handleKey(e))


  return (
    <div style={animationWrapperStyles} className="courier-slide" >
      <img style={animationImgStyles} src={props.image} alt={props.altText} ref={animationRef} />
      <img style={finishStyle} src={props.finishImage} alt="finish" ref={destinationRef} />
    </div>
    
  )
}

export default CourierGame
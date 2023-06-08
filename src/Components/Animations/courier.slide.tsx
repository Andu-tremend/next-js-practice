import { useEffect, useRef } from "react"

const CourierAnimation = (props: any) => {

  const animationRef: any = useRef(null)

  const animationWrapperStyles = {
    position: "absolute",
    height: "40vh",
    width: "100%",
    overflow: "hidden"
    
  } as React.CSSProperties

  const animationImgStyles = {
    width: '100px',
    zIndex: -1,
    left: 0,
    position: "absolute",
    transition: "all 4s linear",
    
  } as React.CSSProperties

  

  useEffect(() => {

    document.onscroll = () => {
      const animationTop = animationRef.current.getBoundingClientRect().top
      if (animationTop < window.innerHeight) {
        animationRef.current.style.left = "100vw"
        animationRef.current.style.animation = "transform 1s linear"
      }
    }
  }, [])

  return (
    <div style={animationWrapperStyles} className="courier-slide" >
      <img style={animationImgStyles} src={props.image} alt={props.altText} ref={animationRef} />
    </div>
    
  )
}

export default CourierAnimation
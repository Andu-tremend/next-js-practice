import { Restaurant } from "@/Interfaces/restaurant"

interface CardHeader extends Restaurant {
  description?: string,
  hasBackground?: boolean
}

const CardHeader = ({picture, discount, discountValue, name, hasBackground, description}: CardHeader) => {
  if (hasBackground) { 
   return (
    <div className="card__card-header" style={{backgroundImage: `url(${picture})`}}>
      { discount &&
        <div className="card__discount-badge">
          { discount && "-" + discountValue + "%" }
        </div>
      }
        <h3>{name}</h3>
    </div>
  ) 
    } else {
  return (
    <div className="card__card-header-no-bg">
        { picture && 
        <img style={{maxWidth: "80px", height: "80px", aspectRatio: "1 / 1", objectFit: "contain"}} src={picture} alt="" />
        }
        <div>
          <h3>{name}</h3>
          {description && 
            <p>{description}</p>
          }
        </div>
    </div>
  )
    }
}

export default CardHeader
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import RatingIcon from "../../../StaticFiles/Images/rating-icon.png";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Restaurant } from "@/Interfaces/restaurant";

interface RestaurantProps extends Restaurant {
  justifyContent?: string
}

const CardFooter = ({rating, delivery, justifyContent}: RestaurantProps) => {

  const justifyStyle = {
    justifyContent,
    gap: "1rem"
  }

  return (
    <div className="card__info" style={justifyStyle}>
        <div className="card__delivery-rating">
           <img src={RatingIcon.src} alt="rating" /> {rating}%
        </div>
        <div className="card__delivery-info">
          {delivery && 
          <div className="card__delivery-price">
            <DeliveryDiningOutlinedIcon /> {delivery?.fee} RON
          </div>
          }
          <FiberManualRecordIcon sx={{maxWidth: 8}}/>
          <div className="card__delivery-time">
            {delivery?.time} min
          </div>
        </div>
    </div>
  )
}

export default CardFooter
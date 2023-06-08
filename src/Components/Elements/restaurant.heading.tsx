import Box from "@mui/material/Box"

import { Restaurant } from '@/Interfaces/restaurant';

const RestaurantHeading = ({ name }:Restaurant) => {
  return (
      <Box sx={{padding: "1rem"}}>
        <h1 className='restaurant-heading__heading'>
            {name}
        </h1>
      </Box>
  )
}

export default RestaurantHeading
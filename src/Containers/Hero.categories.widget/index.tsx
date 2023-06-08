import HeroCategories from '@/Containers/Hero.categories';
import ModalWithChildren from '@/Components/Modals';
import useFetch from '@/Hooks/useFetch';
import { Server } from "@/Classes/Enums/server.enums";
import Container from '@mui/material/Container';
import RestaurantsRepository from '@/Classes/Repositories/restaurants.repository';

interface Categories {
  [index: string]: any;
  orice: {icon: string, label: string}[]
  magazine: {icon: string, label: string}[]
  supermarket: {icon: string, label: string}[]
}

const containerSx = {
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  gap: "0.5rem",
  flexWrap: "wrap", 
  padding: "3rem"
}

const CategoriesWidget = () => {

  const categoriesServer = {
    url: Server.url,
    path: Server.pathFakeCategories
  }
  
  const restaurantRepoInstante = new RestaurantsRepository(Server.url)
  const allCategories = useFetch(restaurantRepoInstante, categoriesServer.path)

  const categories:Array<Categories> = allCategories?.data

  const renderCategories = categories.map( (category, index) => {

    const mainCategory = allCategories.data[0].orice[index]
  
    const innerCategories = () => {
      for (const innerCateg in category) {
        return (
          <ModalWithChildren  key={index} buttonImage={mainCategory.icon} label={mainCategory.label}>
            <HeroCategories categories={category[innerCateg]} />
          </ModalWithChildren>
        )
      }
    }
   
    return (
      <div>
        {innerCategories()}
      </div>
    )

  })

  return (
    <Container maxWidth="sm" sx={containerSx}> 
      {renderCategories}
    </Container>
  )
    
}

export default CategoriesWidget
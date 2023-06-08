import { useEffect, useState } from 'react';
import RestaurantsRepository from '@/Classes/Repositories/restaurants.repository';
import { useFetchParams } from '@/Interfaces/fetch';
import { useSelector } from 'react-redux';
import Repository from '@/Classes/Repositories/respository';



// Takes an instance of the repository, a path to the specific endpoint and the query if exists
const useFetch = (repository:Repository<any>, path:useFetchParams["path"], query?:useFetchParams["query"]) => {
  
  // const store: any = useSelector( state => state)
  const [data, setData] = useState(Array<any> )
  const [loaded, setLoaded] = useState(true)
  
  useEffect( () => {
    repository.get(path, query).then( (res) => {
      return res.data
    })
    .then( resData => {
      setData(resData)
      setLoaded(false)
    })

  }, [])

  return {
    data, 
    loaded
  }

}

export default useFetch
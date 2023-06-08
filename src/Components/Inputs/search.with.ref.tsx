import { filterAction, searchAction } from "@/Stores/Actions"
import { useDispatch } from "react-redux"
import { forwardRef, useRef, useState } from "react"
import { useRouter } from 'next/router';

const SearchWithRefs = forwardRef((props:any, ref: any) => {
  {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    const router = useRouter()
  
    const handleSearch = (searchInput: string) => {
      setInputValue(searchInput)
      router.push(`/search?q=${searchInput}`)
      dispatch(searchAction(searchInput))
      dispatch(filterAction(""))
    }

    
  
    return (
      <div className="search-bar">
        <input type="text" 
        ref={ref}
        value={inputValue} 
        onChange={ (e) => {handleSearch(e.target.value)}} 
        placeholder={props.placeholder} 
         />
      </div>
    )
  }
})

export default SearchWithRefs
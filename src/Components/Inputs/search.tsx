import { filterAction, searchAction } from "Stores/Actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = (props:any) => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (searchInput: string) => {
    setInputValue(searchInput)
    navigate("/search")
    dispatch(searchAction(searchInput))
    dispatch(filterAction(""))
    const delayed = () => {

    }
    setTimeout( delayed, 500)
  }

  return (
    <div className="search-bar">
      <input type="text" 
      value={inputValue} 
      onChange={ (e) => {handleSearch(e.target.value)}} 
      placeholder={props.placeholder} 
       />
    </div>
  )
}

export default Search
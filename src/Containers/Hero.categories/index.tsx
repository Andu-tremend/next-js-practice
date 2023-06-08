import ModalButton from "@/Components/Buttons/modal.button"

// categories instead of category

const HeroCategories = (props: {categories: {icon: string, label: string}[]}) => {
  
  const returnCssTransform = (number: number, categories: {icon:string, label:string}[]) => {
    const numberOfItems = 360 / categories.length
    const degreees = number * numberOfItems
    return `rotate(${degreees}deg) translate(130px) rotate(-${degreees}deg)`
  }

  const categories = props.categories.map( ({icon, label}: {icon: string, label: string}, index: number) => {
    return (
      <div style={{transform: returnCssTransform(index, props.categories)} } key={index} className="bubble-item">
        <ModalButton icon={icon} label={label}/> 
      </div>
    )
  })

  return (
    <div className="bubble-wrapper" style={{width: "220px", height: "220px"}}>
      {categories}
    </div>
  )
}


export default HeroCategories
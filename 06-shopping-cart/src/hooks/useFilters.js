import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters(){
  
    const {filters, setFilters }= useContext(FiltersContext)
    console.log(filters)
    // const [filters, setFilters] = useState({
    //   'category': 'all',
    //   'minPrice': 0
    // })
  
    const filterProducts = (products) => {
      return products.filter(
        product => product.price >= filters.minPrice &&
        (
          filters.category === 'all' || product.category === filters.category
        )
      )
    }
  
    return { filters, filterProducts , setFilters }
  }
  
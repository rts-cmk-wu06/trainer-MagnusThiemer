import { useState } from "react";
import { Link } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

const Search = ({data, placeholder}) => {
  const [filterResults, setFilterResults] = useState([])
  const [searchResults, setSearchResults] = useState(false)
  const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (event) => {
      setSearchResults(false)
      const searchWord = event.target.value.toLowerCase();
      setWordEntered(event.target.value)
      const newFilter = data.filter((value) => {
        if(value.className.toLowerCase().includes(searchWord)){ return true }
        if(value.classDescription.toLowerCase().includes(searchWord)){ return true }
        if(value.classDay.toLowerCase().includes(searchWord)){ return true }
        if(value.trainer.trainerName.toLowerCase().includes(searchWord)){ return true }
      })
      if(searchWord === ''){
        setFilterResults([])
      } else {
        setFilterResults(newFilter)
      }
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setSearchResults(filterResults)
      setFilterResults([])
    }
    const clearSearch = () => {
      setFilterResults([])
      setSearchResults(false)
      setWordEntered('')
    }
  return ( 
    <section className="w-full p-6">
      <form className="flex w-full relative" onSubmit={handleSubmit}>
        <input className='border border-tertiary p-3 rounded-3xl' type="text" placeholder={placeholder} onChange={handleFilter} value={wordEntered} />
        <div>
          {!searchResults && <button className="absolute right-3 top-3" onClick={handleSubmit}><AiOutlineSearch className="text-2xl"/></button>}
          {searchResults && <button className="absolute right-3 top-3" onClick={clearSearch}><AiOutlineClose className="text-2xl" /></button>}
        </div>
      </form>
      {filterResults.length != 0 && 
      <div className="flex flex-col">
        {filterResults.map((item, index) => (
          <Link className="p-3 border-b border-tertiary" key={index} to={`/classdetails/${item.id}`}>{item.className}</Link>
        ))}
      </div>}
      {searchResults && 
      <div className="flex flex-col gap-4">
        {searchResults.length == 0 &&  <p className='p-3'>Your search did not produce any results, please search again</p>}
        {searchResults.length > 0 && searchResults.map((item, index) => (
          <SearchResult data={item} key={index}/>
        ))}
      </div>
     }
    </section>
   );
}
 
export default Search;
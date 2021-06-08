import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const {data} = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(data);
      setItems(data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

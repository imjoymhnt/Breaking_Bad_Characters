import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const {data} = await axios.get('https://www.breakingbadapi.com/api/characters')
      console.log(data);
      setItems(data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])


  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;

import {useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import TicketListItem from './components/TicketListItem';
import Navigation from './components/Navigation';
import PrimaryButton from './components/PrimaryButton';
import CreateButton from './components/CreateButton';
import TopNavigation from './components/TopNavigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {
    axios.get('http://localhost:3000/projects')
    .then((response) => {
      console.log(response.data)
    })
  }, [])
  
  return (
    <div className="App">
    <Navigation isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
    <TopNavigation isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
    <PrimaryButton />
    <CreateButton />
    </div>
  );
}

export default App;

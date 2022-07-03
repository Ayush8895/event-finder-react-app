
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateEvent from './components/CreateEvent';
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from "react";


const App = () => {

  const [isOpen, setIsOpen] = useState(false);

const [eventList, setEventList] = useState([])
const saveEvent = (eventObj) => {
  let tempList = eventList
  tempList.push(eventObj)
  setEventList(tempList)
}
  return (<>
  <Navbar/>
  <CreateEvent/>
  <Footer/>

  </>
  );
}

export default App;

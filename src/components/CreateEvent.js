import React, {useEffect, useState} from 'react';
import NewEvent from '../components/Modal';

import Card from './Card';

const CreateEvent= () => {

const [modal, setModal] = useState(false);
const [eventList, setEventList]= useState([ ])

useEffect(() => {
  let arr = localStorage.getItem("eventList")
  if(arr){
    let obj = JSON.parse(arr)
    setEventList(obj)
  }
}, [])

const deleteEvent = (index) => {
  let tempList = eventList
  tempList.splice(index, 1)
  localStorage.setItem("eventList", JSON.stringify(tempList))
  setEventList(tempList)
  window.location.reload()
}

const updateListArray = (obj, index) => {
  let tempList = eventList
  tempList[index] = obj
  localStorage.setItem("eventList", JSON.stringify(tempList))
  setEventList(tempList)
  window.location.reload()
}


const toggle = ()=>{
  setModal(!modal);
}
const saveEvent = (eventObj) => {
  let tempList = eventList
  tempList.push(eventObj)
 localStorage.setItem("eventList", JSON.stringify(tempList))
  setModal(false)
  setEventList(tempList)
}

  return(
 <>
    <div className ="header text-center">
         <h2> <b>EVENT-FINDER</b></h2>
         <button  className="primary" onClick = {()=> setModal(true)}>
      <b> Create Event</b>
      </button>
    </div>
    <div className="event-container">
    {eventList && eventList.map((obj , index) => <Card eventObj = {obj} index = {index} deleteTask = {deleteEvent} updateListArray = {updateListArray}/> )}    </div>
    <NewEvent toggle = {toggle} modal = {modal} save= {saveEvent}/>
 </>

  );
};

export default CreateEvent;
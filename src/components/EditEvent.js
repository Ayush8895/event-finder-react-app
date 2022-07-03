import React,{useState,  useEffect} from 'react';
 import styles from "./Modal.module.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const EditEvent =({modal, toggle, update, eventObj}) => {

  const [eventName, setEventName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');

  const handleChange =(e)=> {
    const {name, value} =e.target
    
    if(name === "eventName"){
      setEventName(value)
      
    }
    else if(name ==="dateTime"){
      setDateTime(value)
    }
    else{
    
      setDescription(value)
    }
  }

  useEffect(() => {
    setEventName(eventObj.Name)
    setDateTime(eventObj.DateTime)
    setDescription(eventObj.Description)
},[])

const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = eventName
    tempObj['DateTime'] = dateTime
    tempObj['Description'] = description
    update(tempObj)
}
  const [eventList, setEventList] = useState([])
  const saveEvent = (eventObj) => {
    let tempList = eventList
    tempList.push(eventObj)
    setEventList(tempList)
   }


   
  return(
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      Edit Event
    </ModalHeader>
    <ModalBody>
                <div className={styles.modalContent}>
             <form>
              <div className="form-group">
                <lable>Event name</lable>
               <input type="text" className ="form-control" value={eventName} onChange={handleChange} name = "eventName"/>
              </div>
              <div className="form-group">
              <label>Date and Time:</label>
                <input type="datetime-local" className ="form-control" value={dateTime} onChange={handleChange} name = "dateTime" />
                </div> 
               <div className="form-group">
             <lable>Discription</lable>
                <textarea rows ="5" className ="form-control" value={description} onChange={handleChange} name = "description"></textarea>
              
              </div>
             </form>
           </div>
    </ModalBody>
    <ModalFooter>
      <button  className={styles.deleteBtn} onClick={handleUpdate}> Update</button>
      <button className={styles.cancelBtn} onClick={toggle}> Cancel</button>
      </ModalFooter>
  </Modal>
  );
}
export default EditEvent;
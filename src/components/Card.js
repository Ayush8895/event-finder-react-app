import React, {useState} from 'react';
import EditEvent from './EditEvent';

const Card = ({eventObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
        },
        {
            primaryColor : "#F9D288",
        },
        {
            primaryColor : "#5DC250",
        },
        {
            primaryColor : "#F48687",
        },
        {
            primaryColor : "#B964F7",
          
        }
    ]


    const toggle = () => {
        setModal(!modal);
    }

    const update = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <div class = "card-wrapper mr-5">
        <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
        <div class = "event-holder">
            <span class = "card-header" style={{"background-color": colors[index%5].primaryColor, "border-radius": "10px"}}>{eventObj.Name}</span>
            <p className = "mt-3" >{eventObj.DateTime}</p>
            <p className = "mt-3" >{eventObj.Description}</p>

            <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
            </div>
    </div>
    <EditEvent modal = {modal} toggle = {toggle} update = {update} eventObj = {eventObj}/>
    </div>
    );
};

export default Card;
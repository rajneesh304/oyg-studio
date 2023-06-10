import React, { useState } from 'react'
import { doc, setDoc, Timestamp } from "firebase/firestore";
import "./contact.scss"
import { db } from '../../firebase';
import { auth } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [brief, setBrief] = useState("");


  // Add a new document in collection "test"
  const sendData = async (e) => {
    e.preventDefault();
    console.log(email)
    await setDoc(doc(db, "queries", uuidv4()), {
      email: email,
      brief: brief,
      name: name,
      number: number,
      creationTime: Timestamp.fromDate(new Date())
    })
    setBrief("");
    setName("");
    setNumber("");
    setEmail("");
  }

  return (
    <div className='contact'>
      <div className="contactUs">
        <div className="details">
          <div className="item">
            <label>Phone</label>
            <p><a href="tel">+917665824414</a></p>
          </div>
          <div className="item">
            <label>Email</label>
            <p><a href="mailto:raza@oyg.studio">raza@oyg.studio</a></p>
          </div>
          <div className="item">
            <label>Adress</label>
            <p>A-71, Kabir Nagar, Jodhpur, Rajasthan</p>
          </div>
        </div>
      </div>

      <div className="query">
        <div className='name'>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className='number'>
          <label htmlFor="number">Contact Number</label>
          <input type="number" id='number' onChange={(e) => setNumber(e.target.value)} value={number} />
        </div>
        <div className='emailId'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='projectBrief'>
          <label htmlFor="brief">Project Brief</label>
          <textarea onChange={(e) => setBrief(e.target.value)} value={brief} rows="1" />
        </div>
        <button onClick={sendData}>SUBMIT BRIEF</button>
      </div>
    </div >
  )
}

export default Contact

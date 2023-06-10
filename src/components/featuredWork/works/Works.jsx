import React, { useEffect, useState } from 'react'
import "./works.scss"
import Work from '../work/Work'
import { db } from "../../../firebase.jsx"
import { getDocs, collection, query } from "firebase/firestore";

const Works = () => {
  //temp data

  const [works, setWorks] = useState([]);

  const fetchWorks = async () => {
    const newWork = []
    const queriesRef = collection(db, "works");
    const q = query(queriesRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((item) => {
      newWork.push(item.data());
      setWorks(newWork);
    })
  }

  useEffect(() => {
    fetchWorks();
  }, [])


  function divideIntoGroups(arr, k) {
    const groups = [];
    const n = arr.length;
    const numGroups = Math.floor(n / k); // Number of complete groups
    const remainder = n % k; // Number of elements left after forming complete groups

    // Form complete groups
    for (let i = 0; i < numGroups; i++) {
      const group = arr.slice(i * k, (i + 1) * k);
      groups.push(group);
    }

    // Form group with remaining elements, if any
    if (remainder > 0) {
      const group = arr.slice(numGroups * k);
      groups.push(group);
    }

    return groups;
  }

  window.addEventListener('load', async () => {
    await fetchWorks();
    console.log(works);
  });

  const group = divideIntoGroups(works, 2);

  return (
    <div className='works'>
      <div className="header">
        FEATURED WORK aka ✨ STUFF
        {/* <button onClick={getData}>btn</button> */}
      </div>
      {group.map((group, index) => (
        <div className='container' key={index}>
          {group.map((item) => (
            <Work work={item} />
            // <p key={item}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Works

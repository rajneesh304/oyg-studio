import React from 'react'
import "./works.scss"
import Work from '../work/Work'
const Works = () => {
  //temp data
  const works = [
    {
      title: "sampleTitle",
      image: "https://res.cloudinary.com/doq9fvxos/image/upload/v1684031380/Fakebook/ktgplsia59ky2p9fl5hk.jpg"
    },
    {
      title: "sampleTitle2",
      image: "https://res.cloudinary.com/doq9fvxos/image/upload/v1673712315/cld-sample-4.jpg"
    },
    {
      title: "sampleTitle3",
      image: "https://res.cloudinary.com/doq9fvxos/image/upload/v1674566283/YelpCamp/zq3mp7pezl2dhhxhedhp.jpg"
    },
    {
      title: "sampleTitle4",
      image: "https://res.cloudinary.com/doq9fvxos/image/upload/v1683978598/Fakebook/mjxynulujxd7toqp3mnw.jpg"
    },
  ]

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
  const groups = divideIntoGroups(works, 2);

  return (
    <div className='works'>
      <div className="header">
        FEATURED WORK aka ✨ STUFF
      </div>
      {groups.map((group, index) => (
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

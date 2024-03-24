// import React from 'react';

// function ChildComponent({ onDataReceived }) {
//   // Your other code...

//   const fetchData = async () => {
//     try {
//       // Fetch data from an API or other source
//       const response = await fetch('https://fakestoreapi.com/users');
//       const data = await response.json();

//       // Pass the data to the parent component
//       onDataReceived(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Your child component UI... */}
//       <button onClick={fetchData}>Fetch Data and Send to Parent</button>
//       {/* Your other code... */}
//     </div>
//   );
// }

// export default ChildComponent;


// Child.js
import React, { useEffect } from 'react';

const ChildComponent = ({ onDataReceived }) => {
  useEffect(() => {
    // Simulate fetching data (replace with your actual API call)
    fetch('https://fakestoreapi.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        // Call the parent callback function with the fetched data
        onDataReceived(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run once on mount

  return <p>Fetching data...</p>;};


export default ChildComponent;

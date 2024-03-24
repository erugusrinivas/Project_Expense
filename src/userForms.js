
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newComment = { name, comment };
//     setComments([...comments, newComment]);
//     setName('');
//     setComment('');
//   };

//   return (
//     <div className="App">
//       <h1>Leave your comment!</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nickname or Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Comments:
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             rows="8"
//             cols="20"
//           ></textarea>
//         </label>
//         <br />
//         <button type="submit">Comment!</button>
//       </form>
//       <div id="comments">
//         {comments.map((comment, index) => (
//           <div key={index}>
//             <strong>{comment.name}:</strong> {comment.comment}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
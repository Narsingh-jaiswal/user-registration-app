// import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import "./Snakbar.css"
// const Snakbar = (props) => {
//   const [Status, setStatus] = useState({
//     deleteReducer: props.getState.deleteReducer.Mode,
//     editReducer: props.getState.editReducer.Mode,
//     registerUserReducer: props.getState.registerUserReducer.Mode
//   })

//   useEffect(() =>
//     () => {
//       return setTimeout(() =>console.log('end of snakbar'), 3000);
//     })

//   return (
//     <>
//       <div className="snakbar-head">
//         <h1>{Status.deleteReducer}</h1>
//         <h1>{Status.editReducer}</h1>
//         <h1>{Status.registerUserReducer}</h1>
//       </div>
//     </>
//   )
// }

// const mapstatetoprops = (state) => ({
//   getState: state
// })

// export default connect(mapstatetoprops, null)(Snakbar)
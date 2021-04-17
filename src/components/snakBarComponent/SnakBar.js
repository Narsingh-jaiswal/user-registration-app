import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import "./Snakbar.css"

const Snakbar = (props) => {
  const [Display, setDisplay] = useState(false)
  useEffect(() => {
    let timer
    if (props.getState.appStatus.length > 0) {
      setDisplay(true)
      timer = setTimeout(dontshow, 3000)
    }
    return () => {
      setDisplay(false)
      clearTimeout(timer)
    }
  }, [props.getState.appStatus.length])

  const dontshow = () => {
    props.clear()
    setDisplay(false);
  }
  return (
    <>
      { Display &&
        <>
          <div className="snakbarcontainer">
            <button onClick={dontshow} className="closebutton">&#10008;</button>
            <h4 className="h1class">{props.getState.appStatus}</h4>
          </div>
        </>
      }
    </>
  )
}

const mapstatetoprops = (state) => ({
  getState: state
})

const mapdispatchtoprops = (dispatch) => ({
  clear: () => dispatch({ type: "clean" })
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Snakbar)
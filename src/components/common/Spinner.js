import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const spinner = ({color,size}) => {
    const override  = {
        display: "block",
        margin: "0 auto",
        borderColor: "black",
        // borderColor: `${color}`,
      };
  return (
    <>
        <ClipLoader
          color={color}
          // loading={loading}
          cssOverride={override}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </>
  )
}

export default spinner
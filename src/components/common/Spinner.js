import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const spinner = () => {
    const override  = {
        display: "block",
        margin: "0 auto",
        borderColor: "white",
      };
  return (
    <>
        <ClipLoader
          color={"white"}
          // loading={loading}
          cssOverride={override}
          size={16}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </>
  )
}

export default spinner
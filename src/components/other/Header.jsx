import { useState } from "react"

const Header = ({data}) => {
  const userLogOut = () =>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

    return(
        <div className="flex flex-col text-2xl">
        <h2>Hello,</h2>
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">{data.firstName}</h1>
          <button onClick={userLogOut} className="bg-red-600 text-sm font-bold rounded-lg px-2">
            Log Out
          </button>
        </div>
        <hr className="mt-7"></hr>
      </div>
    )
}

export default Header
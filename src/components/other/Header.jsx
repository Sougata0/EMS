const Header = ({data}) => {
    return(
        <div className="flex flex-col">
        <h2>Hello,</h2>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">{data.firstName}</h1>
          <button className="bg-red-600 text-sm font-bold rounded-[5px] px-2">
            Log Out
          </button>
        </div>
      </div>
    )
}

export default Header
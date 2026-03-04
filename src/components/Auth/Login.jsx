import { useState } from "react"

const Login = ({handleLogin}) => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(email, password);
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center py-10">
            <h1 className="text-white font-bold text-4xl">Log in Page</h1>
            <div className="mt-10 border-2 border-green-400 rounded-2xl flex flex-col py-10 px-7">
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className="flex flex-col items-center justify-center gap-2.5">
                    <input 
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        className="outline-none bg-transparent border-2 border-green-400 rounded-full text-white placeholder:text-gray-400 px-5 py-2 " type="email" required placeholder="Enter your email..." 
                    />
                    <input 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        className="outline-none bg-transparent border-2 border-green-400 rounded-full text-white placeholder:text-gray-400 px-5 py-2 " type="password" required placeholder="Enter password..."
                    />
                    <button className="mt-5 border-0 w-full bg-green-400 rounded-full text-white px-5 py-2 font-bold">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
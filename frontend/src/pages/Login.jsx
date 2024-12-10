import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/frontend_assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [loginLoader, setLoginLoader] = useState(false)
  const { token, setToken, navigate, backendURL } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoginLoader(true)
    try {
      if (currentState === "Sign up") {
        const response = await axios.post(backendURL + "/api/user/register", {name, email, password})
        if (response.data.success) {
          setLoginLoader(false)
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success("Sign up successful")
        } else {
          setLoginLoader(false)
          toast.error(response.data.message)
        }
          
      } else {
        const response = await axios.post(backendURL + "/api/user/login", {email, password})
        if (response.data.success) {
          setLoginLoader(false)
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success("Login successful")
        } else {
          setLoginLoader(false)
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      setLoginLoader(false)
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate(`/`)
    }
  
    return () => {
      null
    }
  }, [token])
  

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p className="cursor-pointer" onClick={() => setCurrentState("Sign up")}>
            Create Account
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => setCurrentState("Login")}>
            Login Here
          </p>
        )}
      </div>
      {loginLoader ? (
        <img src={assets.loading_gif} alt="loader" className="w-10 h-10 mt-4"/>
      ) : (
        <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
      )}
    </form>
  );
};

export default Login;

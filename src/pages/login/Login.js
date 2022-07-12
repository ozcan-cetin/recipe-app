import Logincontainer, {Input, Button} from "./Style"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  // const [start, setStart] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user",user);
    sessionStorage.setItem("password",password);
    navigate("/home")
    // setStart(true)
    // navigate("../../components/navbar", {state:start})
  }
  return (
    <form onSubmit={handleSubmit}>
        <Logincontainer>
      <Input type="text" value={user} placeholder='username' required onChange={(e)=>setUser(e.target.value)}/>
      <Input type="password" value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
      <Button type='submit'>LOGIN</Button>
    </Logincontainer>
      </form>
  )
}

export default Login;
import Logincontainer, {Input, Button} from "./Style"

const Login = () => {
  return (
    <Logincontainer>
      <Input type="text" placeholder='usenname' required />
      <Input type="password" placeholder='password' required />
      <Button type='submit'>LOGIN</Button>
    </Logincontainer>
  )
}

export default Login
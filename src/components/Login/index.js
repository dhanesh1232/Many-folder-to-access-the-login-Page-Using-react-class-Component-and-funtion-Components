// Write your code here
import './index.css'

const Login = props => {
  const {onLogin} = props

  return (
    <button type="button" className="btn" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login

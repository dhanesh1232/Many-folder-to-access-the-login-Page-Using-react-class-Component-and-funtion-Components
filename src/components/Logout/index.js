// Write your code here
import './index.css'

const Logout = props => {
  const {onLogout} = props
  return (
    <button type="button" className="btn" onClick={onLogout}>
      Logout
    </button>
  )
}

export default Logout

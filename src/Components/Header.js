import { Link } from "react-router-dom"


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">PollFrenzy</a>
    </div>
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col"><Link to="/create">Create</Link></div>
                <div className="col"><Link to="/monitor">Monitor</Link></div>
                <div className="col"><Link to="/vote">Vote</Link></div>
            </div>
        </div>
    </div>
  </nav>
  )
}

export default Header
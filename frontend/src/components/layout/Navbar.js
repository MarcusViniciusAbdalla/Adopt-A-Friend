import {Link} from 'react-router-dom'

import Logo from '../../assets/img/Logo.png'

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="Adopt a Friend"/>
        <h2>Adopt A Friend</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Adotar</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/register">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
import { Link } from "react-router-dom"

const Nav = () => {

    return(
        <nav>
          <ul>
            <li> <Link to="/" > Home </Link> </li>
            <li> <Link to="/products" > Produtos </Link> </li>
            <li> <Link to="/users" > Users </Link> </li>
          </ul>
        </nav>
    )
}

const Footer = () => {
  return(
      <footer>
        <h3>  Desenvolvido por Pedro Nest </h3>
      </footer>
  )
}

export {Footer, Nav}
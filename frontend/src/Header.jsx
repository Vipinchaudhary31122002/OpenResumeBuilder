/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"

const Header = (props) => {
  return (
    <>
    <h1>{props.info}</h1>
    <Outlet/>
    </>
  )
}

export default Header
import { useState } from 'react'
import Header from 'components/Header'
import { Outlet, NavLink} from "react-router"

export default function Layout() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header></Header>
      <article>
        <div className = "article">
          <Outlet></Outlet>
        </div>
      </article>
    </>
  )
}



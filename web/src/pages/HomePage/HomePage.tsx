import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <main className="bg">
        <h1>Hello world!!</h1>
      </main>
    </>
  )
}

export default HomePage

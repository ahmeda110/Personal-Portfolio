import NavBar from "./components/NavBar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Contact />
        <Footer />
    </>
  )
}

export default App

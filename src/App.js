import "./App.css"
import NavBar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import SearchBar from "./components/SearchBar"
import InspirationList from "./components/InspirationList"
import { Container } from "react-bootstrap"
import DiscoverList from "./components/DiscoverList"

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar></NavBar>
        <SearchBar></SearchBar>
      </div>

      <Container>
        <h2 className="section-title">Inspiration for your next trip</h2>
        <InspirationList></InspirationList>
        <h2 className="section-title">Discover Airbnb Experiences</h2>
        <DiscoverList></DiscoverList>
      </Container>
    </div>
  )
}

export default App

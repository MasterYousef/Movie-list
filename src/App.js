import { Container } from "react-bootstrap";
import Header from "./components/Header";
import CardList from "./components/CardList";
import MovieDetails from "./components/MovieDetails";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="font">
      <Header/>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList/>}/>
          <Route path="/Movie/:id" element={<MovieDetails/>}/>
        </Routes>
        </BrowserRouter>
      </Container>
      
    </div>
  );
}
export default App;

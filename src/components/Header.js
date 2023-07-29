import React from 'react'
import {Container,Form,Navbar} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { SearchMovie, getAllMovie } from '../redux/actions/movieAction'
const Header = () => {
  const dispatch = useDispatch()
  let Search = async (word)=>{
    if(word === ""){
      dispatch(getAllMovie())
    }else{
      dispatch(SearchMovie(word))
    }
  }
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">اللوجو</Navbar.Brand>
          <Form className="d-flex w-100 justify-content-center">
            <Form.Control
              type="search"
              placeholder="البحث"
              className="me-2 w-75"
              aria-label="Search"
              onChange={(e)=>Search(e.target.value)}
            />
          </Form>
      </Container>
    </Navbar>
  )
}
export default Header
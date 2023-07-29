import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

 function MovieDetails() {
  const [details,setDetails] = useState('')
  const id = useParams();
  let getmo = async ()=> {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id.id}?api_key=f9b842bc2cb16debe17693165a90be7a&language=ar`);
    setDetails(res.data)
  }
  getmo()
  return (
    <div>
      <Row className='justify-content-center mt-5 section p-4 rounded mb-3'>
      <Col sm={12} md={4}>
          <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt='' className='cardDetal'></img>
        </Col>
        <Col sm={12} md={8} className='groub justify-content-center d-flex flex-column align-items-center'>
          <p className='fs-3'>اسم الفلم : {details.title}</p>
          <p className='fs-3'>تاريخ الاصدار : {details.release_date} </p>
          <p className='fs-3'>عدد المقيمين : {details.vote_count}</p>
          <p className='fs-3'>التقييم: {details.vote_average}</p>
        </Col>
      </Row>
      <Row className='section p-4 rounded mb-3'>
        {
          details.overview === "" ? null :             <Col sm={12} >
          <h1 className='groub'>القصة :</h1>
        </Col>
            


        }
        <Col sm={12} className='groub justify-content-center d-flex flex-column align-items-center'>
          <p>{details.overview}</p>
        </Col>
        <Col sm={12} className='justify-content-center d-flex mt-5'>
          <Link to='/'>
          <Button className='mx-4'>عودة الي الصفحة</Button>
          </Link>
          {
            details.homepage === "" ? null : <a href={details.homepage}>
            <Button className='mx-4'>مشاهدة</Button>
            </a>
          }
        </Col>
      </Row>
    </div>
  )
}
export default MovieDetails

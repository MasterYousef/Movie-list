import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Cards from './Cards'
import Pagenum from './Pagenum'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../redux/actions/movieAction';

 function CardList() {
    const [movie,setMovie] = useState([]);
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getAllMovie())
    },[]);
    const felms = useSelector((state) => state.movies)
    useEffect(()=>{
      setMovie(felms)
    },[felms]);
  return (
    <Row className='justify-content-start mt-5 flex-wrap'>
        {
            movie.length >=1 ? (movie.map((mov)=>{
                return(
                    <Cards key={mov.id} mov={mov}/>
                )
            })) : <h2 className='er'>لا يوجد افلام حاليا </h2>
        };
        {
            movie.length >=1 ? (<Pagenum/>) : null
        }
        
    </Row>
  )
}
export default CardList

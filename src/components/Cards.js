import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ mov }) {
  console.log(mov);

  return (
    <Col sm={3} className="mb-3">
      <Link to={`/Movie/${mov.id}`}>
        <div className="w-100 con position-relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
            className="img-hand position-absolute"
            alt="img"
          />
          <div className="overlay position-absolute">
            <h5>اسم الفلم : {mov.title}</h5>
            <p>تاريخ الاصدار : {mov.release_date}</p>
            <p>عدد المقيمين : {mov.vote_count}</p>
            <p> التقييم: {mov.vote_average} </p>
          </div>
        </div>
      </Link>
    </Col>
  );
}
export default Cards;

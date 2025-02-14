import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { GetPage } from "../redux/actions/movieAction";
function Pagenum() {
  const dispatch = useDispatch();
  let handlePageClick = (data) => {
    dispatch(GetPage(data.selected + 1));
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      pageCount={500}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center p-3 ul"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-link"
      activeClassName="active"
    />
  );
}
export default Pagenum;

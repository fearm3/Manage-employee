import React, { useState } from "react";

const Pagination = () => {
  const pages = 5;

  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  return (
    <div clasName="clearfix">
      <div clasName="hint-text">
        Showing <b>5</b> out of <b>25</b> entries
      </div>
      <ul clasName="pagination">
        <li clasName="page-item disabled">
          <a href="#">Previous</a>
        </li>
        <li clasName="page-item">
          <a href="#" clasName="page-link">
            1
          </a>
        </li>
        <li clasName="page-item">
          <a href="#" clasName="page-link">
            2
          </a>
        </li>
        <li clasName="page-item active">
          <a href="#" clasName="page-link">
            3
          </a>
        </li>
        <li clasName="page-item">
          <a href="#" clasName="page-link">
            4
          </a>
        </li>
        <li clasName="page-item">
          <a href="#" clasName="page-link">
            5
          </a>
        </li>
        <li clasName="page-item">
          <a href="#" clasName="page-link">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

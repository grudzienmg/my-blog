import React, { Fragment, useEffect, useState } from 'react';

import Tile from './styles/tile';

const Pagination = ({...props}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const pagesCount = Math.ceil(props.totalRecords / props.pageSize);
    setTotalPages(pagesCount);
  }, []);

  const handleClick = (selectedPage) => {
    setCurrentPage(selectedPage);
    props.onChange(selectedPage);
  }

  const prepareTiles = () => {
    let tiles = [];

    for (let i = 1; i <= totalPages; i++) {
      tiles.push(
        <Tile
          key={i}
          selected={i === currentPage}
          onClick={() => handleClick(i)}
        >{i}</Tile>
      );
    }

    return tiles;
  }
  return (
    <Fragment>
      {prepareTiles()}
    </Fragment>
  );
}

export default Pagination;
import React from 'react';
import { Pagination } from 'react-bootstrap';
import IProps from './IProps';
import { ContainerBackground } from './styled';

export default function PaginationPokemon(props: IProps): JSX.Element {
  const { page, setPage, totalPages } = props;
  const [pageIndex, setPageIndex] = React.useState<Array<number>>([]);

  React.useEffect(() => {
    const indexArray = [];
    for (let i = 1; i <= totalPages; ++i) indexArray.push(i);

    setPageIndex(indexArray);
  }, [totalPages]);

  return (
    <ContainerBackground>
      <Pagination>
        {page > 1 ? (
          <Pagination.Prev onClick={() => setPage(page - 1)} />
        ) : (
          <></>
        )}
        {pageIndex.map((i) => {
          return (
            <Pagination.Item
              key={i}
              active={i === page}
              onClick={() => setPage(i)}
            >{`${i}`}</Pagination.Item>
          );
        })}
        {page < totalPages ? (
          <Pagination.Next onClick={() => setPage(page + 1)} />
        ) : (
          <></>
        )}
      </Pagination>
    </ContainerBackground>
  );
}

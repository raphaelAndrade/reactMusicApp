import React from 'react';
import { Container, PageItem, Link } from './styles'

interface IPaginationProps {
    itemPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({
    itemPerPage, totalItems, paginate
}) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Container>
            {pageNumbers?.map((number: number) => (
                <PageItem key={number}>
                    <Link href="!#" onClick={() => paginate(number)}>
                        {number}
                    </Link>
                </PageItem>
            ))}
        </Container>

    )
}
export default Pagination;
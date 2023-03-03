import React from 'react';
import {usePagination} from "../utils/usePagination";
import BootstrapPag from 'react-bootstrap/Pagination';

export const Pagination = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize}) => {
    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize});
    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <div className={'container_pagination'}>
            <BootstrapPag>
                <BootstrapPag.Prev onClick={onPrevious}/>
                {
                    paginationRange.map((el,i)=>{
                        if (typeof el === 'number') {
                            let activated = (el=== currentPage)
                            return <BootstrapPag.Item key={i} className={activated ? "active" : "" }
                                                      onClick={() => onPageChange(el)}>{el}</BootstrapPag.Item>
                        } else {
                            return <BootstrapPag.Ellipsis key={i}/>
                        }
                    })
                }
                <BootstrapPag.Next onClick={onNext}/>
            </BootstrapPag>
        </div>

    );
};
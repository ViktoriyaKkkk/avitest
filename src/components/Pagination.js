import React from 'react';
import {usePagination} from "../utils/usePagination";
import BootstrapPag from 'react-bootstrap/Pagination';

export const Pagination = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, lastPage}) => {
    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize});
    // Если меньше 2х страниц, то пагинацию не показываем
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    let firstPage = 1
    const onNext = () => {
            onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
            onPageChange(currentPage - 1);
    };

    return (
        <div className={'container_pagination'}>
            <BootstrapPag>
                <BootstrapPag.Prev onClick={onPrevious} className={firstPage>currentPage-1 ? "disabled" : "" }/>
                {
                    paginationRange?.map((el,i)=>{
                        if (typeof el === 'number') {
                            return <BootstrapPag.Item key={i} className={(el=== currentPage) ? "active" : "" }
                                                      onClick={() => onPageChange(el)}>{el}</BootstrapPag.Item>
                        } else {
                            return <BootstrapPag.Ellipsis key={i}/>
                        }
                    })
                }
                <BootstrapPag.Next onClick={onNext} className={lastPage<currentPage+1 ? "disabled" : "" }/>
            </BootstrapPag>
        </div>

    );
};
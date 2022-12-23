import React from 'react';
export interface PaginationInterface {
page:number;
setPage:React.Dispatch<React.SetStateAction<number>>
}

const Pagination : React.FC<PaginationInterface> = ({page,setPage}) => {

  const handleChangePagePrevius=()=>{
    if( page!==1){
      setPage(page-1);
    }
  }

  const handleChangePageNext=()=>{
  setPage(page+1);
  }
	return (
<nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px mt-4 ">
    <li>
      <button onClick={handleChangePagePrevius}>
      <a href="#previous" className="px-5 py-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
      </button>
    </li>

    <li>
      <a href="#" className="px-5 py-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</a>
    </li>
 
    <li>
    <button onClick={handleChangePageNext}>
      <a href="#" className="px-5 py-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </button>
    </li>
  </ul>
</nav>

		)
};

export default Pagination;

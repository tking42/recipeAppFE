const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className='flex justify-center gap-4 mb-6'>
            <button
                onClick={() => onPageChange('prev')}
                className='text-2xl text-blue-500 disabled:text-gray-500'
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <p className='text-2xl'>
                 {currentPage} of {totalPages}
            </p>
            <button
                onClick={() => onPageChange('next')}
                className='text-2xl text-blue-500 disabled:text-gray-500'
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination

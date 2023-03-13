import React from "react";



const MultiStepFormFooter = ({ steps, page, setPage }) => {

    const prevPage = () => {
        if (page !== 0) {
            setPage(page - 1)
        }
    }
    const nextPage = () => {
        if (page < steps.length) {
            setPage(page + 1)
        }
    }

    return (<div className="form-footer">
        {page === 0 ? <></> : <div onClick={prevPage} className="prev-button">Prev</div>}
        {page === steps.length - 1 ? <></> : <div onClick={nextPage} className="next-button">Next</div>}
    </div>)
}

export default MultiStepFormFooter;
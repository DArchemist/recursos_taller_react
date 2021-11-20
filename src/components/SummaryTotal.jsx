const SummaryTotal = ( { total }) => {
    return (
        <div className="mt-5">
            <p className="summary-total"><b>{ `Total________________________________________________________________________$${ total.toFixed(2) }` }</b></p>   
        </div>
    )
}

export default SummaryTotal

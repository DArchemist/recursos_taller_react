const AddRemoveForm = () => {
    return (
        <form className="form-inline mx-4">
            <div className="btn-remove-1 text-center scalable"><b>-</b></div>
            <div className="form-group mx-1">
                <input type="text" className="add-remove-input" readonly/>
            </div>
            <div className="btn-add-1 text-center scalable"><b>+</b></div>
        </form>
    )
}

export default AddRemoveForm

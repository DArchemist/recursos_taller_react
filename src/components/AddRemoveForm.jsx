const AddRemoveForm = ( {amount, add, remove, id } ) => {
    return (
        <form className="form-inline mx-4">
            <div className="btn-remove-1 text-center scalable" onClick={ (e) => remove(id) }><b>-</b></div>
            <div className="form-group mx-1">
                <input type="text" className="add-remove-input" readonly value={ amount }/>
            </div>
            <div className="btn-add-1 text-center scalable" onClick={ (e) => add(id) }><b>+</b></div>
        </form>
    )
}

export default AddRemoveForm

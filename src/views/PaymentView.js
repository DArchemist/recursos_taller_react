import CardRepresentation from "../components/CardRepresentation"
import PaymentForm from "../components/PaymentForm"

const PaymentView = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-5 mx-5">
                <PaymentForm />
            </div>
            <div className="col- 12 col-lg-6">
                <CardRepresentation />
            </div>
            
        </div>
    )
}

export default PaymentView

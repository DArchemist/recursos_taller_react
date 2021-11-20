const SummaryItem = ({ title, amount, price }) => {
    const formatter = () => {
        const seed = `${title} (x${amount})`
        const paddedSeed = seed.padEnd(55, '_')
        const priceString = ((price * amount).toFixed(2)).toString()
        const lenPriceString = priceString.length
        const finalString = paddedSeed.slice(0, paddedSeed.length - lenPriceString) + `$${priceString}`
        return finalString
    }
    return (
        <div className="my-4">
            <p className="summary-item">{ formatter() }</p>
        </div>
    )
}

export default SummaryItem

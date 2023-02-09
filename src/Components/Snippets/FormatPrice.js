
export default function FormatPrice({ price }) {
    return (
        <h4>{Intl.NumberFormat("en-IN",
            { style: "currency", currency: "INR" }
        ).format(price)}</h4>
    )
}

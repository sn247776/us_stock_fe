import React from 'react'

const FinancialModel = (props) => {
  let data = props.data
  return (
    <>
    <table className="table table-hover table-striped table-bordered">
        <tbody>
            <tr>
                <th scope="col">Value:</th>
                <td >{data['value']}</td>
            </tr>
            <tr>
                <th scope="col">Security Type:</th>
                <td >{data['securitytype']}</td>
            </tr>
            <tr>
                <th scope="col">Market Capitalization:</th>
                <td >{data['marketCapitalization']}</td>
            </tr>
            <tr>
                <th scope="col">Minus Cash And Cash Equivalents:</th>
                <td >{data['minusCashAndCashEquivalents']}</td>
            </tr>
            <tr>
                <th scope="col">Add Total Debt:</th>
                <td >{data['addTotalDebt']}</td>
            </tr>
            <tr>
                <th scope="col">Enterprise Value:</th>
                <td >{data['enterpriseValue']}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default FinancialModel

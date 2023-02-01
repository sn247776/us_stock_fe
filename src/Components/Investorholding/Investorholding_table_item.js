import React from 'react'
import { useNavigate } from "react-router-dom";


const Investorholding_table_item = (props) => {
    let data = props.data
    const navigate = useNavigate();
    const filter_by_ticker = (data) => {
        navigate(`/Investorholding?tickerFilter=${data}&page=${1}`);
    }
    
    return (
        <>
            <tr onClick={() => filter_by_ticker(data["ticker"])} style={{cursor:'pointer'}}>
            <td>{data['id']}</td>
            <td>{data['si_cik']}</td>
            <td>{data['ticker']}</td>
            <td>{data['company']}</td>
            <td>{data['filing_date']}</td>
            <td>{data['issuer_name']}</td>
            <td>{data['cusip']}</td>
            <td>{data['si_value']}</td>
            <td>{data['othermanager']}</td>
            <td>{data['sshprnamt']}</td>
            <td>{data['sshprnamttype']}</td>
            <td>{data['titleofclass']}</td>
            <td>{data['voteauthsole']}</td>
            <td>{data['voteauthshared']}</td>
            <td>{data['voteauthnone']}</td>
            <td>{data['insert_date']}</td>
            <td>{data['update_date']}</td>
            <td>{data['insert_by']}</td>
            <td>{data['update_by']}</td>
            </tr>
        </>
  )
}

export default Investorholding_table_item

import React from 'react';
import Tableitem from './Investorholding_table_item.js';
import FinancialModel from './FinancialModel.js';

import { useState, useEffect } from "react";
import { useSearchParams  } from 'react-router-dom';

const Investorholding = () => {
    const [data, setData] = useState([{}])
    const [searchValue, setSearchValue] = useState("")
    const [financialData, setFinancialData] = useState([{}])
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        let params = {}
        for(let entry of searchParams.entries()) {
            params[entry[0]] = entry[1];
          }
        if (searchParams.get("page") === null){
            setSearchParams({...params, page: 1})
        }
        if (searchParams.get("tickerFilter") !== null){
            fetch(`/api/Investorholding?page=${searchParams.get("page")}&tickerFilter=${searchParams.get("tickerFilter")}&sortby=${searchParams.get("sortby")}&searchby=${searchValue}`)
            .then(response => response.json())
            .then(data => setData(data))

            fetch(`/api/Figiref?ticker=${searchParams.get("tickerFilter")}`)
            .then(response => response.json())
            .then(data => setFinancialData(data))
        } else {
            fetch(`/api/Investorholding?page=${searchParams.get("page")}&filter=${searchParams.get("filter")}&sortby=${searchParams.get("sortby")}&searchby=${searchValue}`)
            .then(response => response.json())
            .then(data => setData(data))
        }
    }, [searchParams, setSearchParams, searchValue, setSearchValue])


    function prevPage() {
        if (parseInt(searchParams.get("page")) !== 1){
            let params = {}
            for(let entry of searchParams.entries()) {
                params[entry[0]] = entry[1];
            }
            setSearchParams({...params, page: parseInt(searchParams.get("page")) - 1})
        }
    }
    
    function nextPage() {
        let params = {}
        for(let entry of searchParams.entries()) {
            params[entry[0]] = entry[1];
          }
        setSearchParams({...params, page: parseInt(searchParams.get("page")) + 1})
    }

    function sortby(data) {
        let params = {}
        for(let entry of searchParams.entries()) {
            params[entry[0]] = entry[1];
          }
        if (searchParams.get("sortby") === null){
            setSearchParams({...params, sortby: `${data}-ASC`})
        } else if (searchParams.get("sortby").split("-")[0] === data && searchParams.get("sortby").split("-")[1] === 'ASC'){
            setSearchParams({...params, sortby: `${data}-DESC`})
        } else{
            setSearchParams({...params, sortby: `${data}-ASC`})
        }
    }
    
    return (
        <>
        <div className="p-5">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" onClick={prevPage}>Previous</button></li>
                        <li className="page-item"><button className="page-link" onClick={nextPage}>Next</button></li>
                    </ul>
                </nav>
            </div>
            {typeof financialData.data === 'undefined' || searchParams.get("tickerFilter") === null ? <></>:(
            <div className="row">
                    <div className="col-sm-4 h-100 d-flex align-items-center justify-content-center">
                        <p>Ratios API goes here</p>
                    </div>
                    <div className="col-sm-4 h-100 d-flex align-items-center justify-content-center">
                        <FinancialModel data={financialData.data} />
                    </div>
                    <div className="col-sm-4 h-100 d-flex align-items-center justify-content-center">
                        <p>Graph Goes Here</p>
                    </div>
            </div>
            )}
            <form className="h-100 d-flex flex-row-reverse" onSubmit={e => {e.preventDefault();}} onChange={e => setSearchValue(e.target.value)}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{'width': '25vh'}}/>
            </form>
            <div className="scrollable-div">
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col" onClick={() => sortby('id')}>Id</th>
                        <th scope="col" onClick={() => sortby('si_cik')}>si_cik</th>
                        <th scope="col" onClick={() => sortby('ticker')}>ticker</th>
                        <th scope="col" onClick={() => sortby('company')}>company</th>
                        <th scope="col" onClick={() => sortby('filing_date')}>filing_date</th>
                        <th scope="col" onClick={() => sortby('issuer_name')}>issuer_name</th>
                        <th scope="col" onClick={() => sortby('cusip')}>cusip</th>
                        <th scope="col" onClick={() => sortby('si_value')}>si_value</th>
                        <th scope="col" onClick={() => sortby('othermanager')}>othermanager</th>
                        <th scope="col" onClick={() => sortby('sshprnamt')}>sshprnamt</th>
                        <th scope="col" onClick={() => sortby('sshprnamttype')}>sshprnamttype</th>
                        <th scope="col" onClick={() => sortby('titleofclass')}>titleofclass</th>
                        <th scope="col" onClick={() => sortby('voteauthsole')}>voteauthsole</th>
                        <th scope="col" onClick={() => sortby('voteauthshared')}>voteauthshared</th>
                        <th scope="col" onClick={() => sortby('voteauthnone')}>voteauthnone</th>
                        <th scope="col" onClick={() => sortby('insert_date')}>insert_date</th>
                        <th scope="col" onClick={() => sortby('update_date')}>update_date</th>
                        <th scope="col" onClick={() => sortby('insert_by')}>insert_by</th>
                        <th scope="col" onClick={() => sortby('update_by')}>update_by</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof data.data === 'undefined' ? console.log("LOADING..."): (
                    data.data.map(function(object, i){
                        return <Tableitem data={object} key={i}/>;
                    }))}
                </tbody>
            </table>
            </div>
        </div>
        </>
  )
}


export default Investorholding

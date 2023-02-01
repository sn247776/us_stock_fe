import React from 'react'
import { useState, useEffect } from "react";
import { useSearchParams  } from 'react-router-dom';
import Tableitem from './Superinvestor_table_item.js'
import './Superinvestor.css'

const Superinvestor = () => {
    const [data, setData] = useState([{}])
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        fetch(`/api/Superinvestor?&sortby=${searchParams.get("sortby")}&searchby=${searchValue}`).then(response => response.json()).then(data => setData(data))
    }, [searchParams, setSearchParams, searchValue, setSearchValue])
    
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
        <div className="p-5">
            <form className="h-100 d-flex flex-row-reverse" onSubmit={e => {e.preventDefault();}} onChange={e => setSearchValue(e.target.value)}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{'width': '25vh'}}/>
            </form>
            <div className="scrollable-div">
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col" onClick={() => sortby('Id')}>Id</th>
                        <th scope="col" onClick={() => sortby('si_cik')}>si_cik</th>
                        <th scope="col" onClick={() => sortby('si_name')}>si_name</th>
                        <th scope="col" onClick={() => sortby('si_company')}>si_company</th>
                        <th scope="col" onClick={() => sortby('si_notes')}>si_notes</th>
                        <th scope="col" onClick={() => sortby('ticker')}>ticker</th>
                        <th scope="col" onClick={() => sortby('flag')}>flag</th>
                        <th scope="col" onClick={() => sortby('category_id')}>category_id</th>
                        <th scope="col" onClick={() => sortby('insert_date')}>insert_date</th>
                        <th scope="col" onClick={() => sortby('update_date')}>update_date</th>
                        <th scope="col" onClick={() => sortby('insert_by')}>insert_by</th>
                        <th scope="col" onClick={() => sortby('update_by')}>update_by</th>
                        <th scope="col" onClick={() => sortby('cutoff_date')}>cutoff_date</th>
                        <th scope="col" onClick={() => sortby('latest_checked_date')}>latest_checked_date</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof data.data === 'undefined' ? console.log("LOADING..."): (
                    data.data.map(function(object, i){
                        return <Tableitem data={object} key={i} />;
                    }))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Superinvestor

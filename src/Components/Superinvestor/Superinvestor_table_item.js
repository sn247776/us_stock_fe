import React from "react";
import { useNavigate } from "react-router-dom";

const Superinvestor_table_item = (props) => {
  let data = props.data;
  const navigate = useNavigate();
  const filter_by_sicik = (data) => {
    navigate(`/Investorholding?filter=${data}&page=${1}`);
  };

  return (
    <>
      <tr
        onClick={() => filter_by_sicik(data["si_cik"])}
        style={{ cursor: "pointer" }}
      >
        <td>{data["id"]}</td>
        <td>{data["si_cik"]}</td>
        <td>{data["si_name"]}</td>
        <td>{data["si_company"]}</td>
        <td>{data["si_notes"]}</td>
        <td>{data["ticker"]}</td>
        <td>{data["flag"]}</td>
        <td>{data["category_id"]}</td>
        <td>{data["insert_date"]}</td>
        <td>{data["update_date"]}</td>
        <td>{data["insert_by"]}</td>
        <td>{data["update_by"]}</td>
        <td>{data["cutoff_date"]}</td>
        <td>{data["latest_checked_date"]}</td>
      </tr>
    </>
  );
};

export default Superinvestor_table_item;

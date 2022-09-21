import DataTable from "react-data-table-component";
import { tableData } from "./data";
import {useState, useEffect} from "react";

export function Table() {
  let[search,setSearch] = useState("");
  let [data,setData] = useState(tableData);

  let columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Position",
      selector: (row) => row.position,
    },
    {
      name: "Office",
      selector: (row) => row.office,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Start date",
      selector: (row) => row.startDate,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
    },
  ];

  useEffect(() =>{
    let result = data.filter(name => search.toLowerCase()===name.name.toLowerCase());
    console.log(`result is ${result}`);
    if(result.length !== 0){
      setData(result)
    }
    else{
      setData(tableData);
    }
  }, [search])

  return (
    <div>
      <DataTable columns={columns} data={data} pagination fixedHeader highlightOnHover
      subHeader
      subHeaderComponent={
        <form className="d-flex gap-1 align-items-center">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" placeholder="Name" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
      } />
    </div>
  );
}
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Table from 'react-bootstrap/Table';
import Recordsrow from "./Recordsrow"
import { useEffect } from "react";

//a query must also be sent from front end to conect to backend
const Records = () => {
  
    

    const getRecords=gql`
{
    records{
        id 
        name 
        position
        level
    }
}
`
useEffect(() => {

   
},[getRecords]);
      
    const { loading, error, data } = useQuery(getRecords);


  

    if (loading) return <p>Please be patient...</p>;
    if (error) return <p>Error : {error.message}</p>;



    return (<div>
        <br></br>
<h1>All records</h1>
<div className="container">
<Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>

                    <th>position</th>
                    <th>Level</th>
                    <th>Operations</th>


                </tr>
            </thead>


            <tbody>


                {
                    data.records.length > 0 ? data.records.map((record, index) =>
                       

<Recordsrow key={record.id} record={record}/>

                   

                    ) : <h1>No records yet</h1>}
            </tbody>
        </Table>


        </div>  </div>)
}
 
export default Records;
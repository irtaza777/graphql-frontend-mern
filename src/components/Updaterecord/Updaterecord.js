import React from 'react';
import Updaterow from "./Updaterow"
import {useNavigate, useParams } from 'react-router-dom';

import { gql,useQuery } from '@apollo/client';
 const Updaterecord = () => {
  const navigate=useNavigate();

  const {id}=useParams();
  const see_Record = gql`
  query ($id: ID!){
    record(id: $id) {
      id,
      name,
      position,
      level
    }
  }
`;

const { loading, error, data } = useQuery(see_Record, {variables:{id}});
    
if (loading) return loading;
if (error) return <p>Something Went Wrong</p>;
return(
  <Updaterow key={data.record.id} record={data.record}/>
)
   
}
 
export default Updaterecord;
import React from 'react';
import { gql, useMutation } from '@apollo/client';
import  { useState } from 'react'
import { Container } from 'react-bootstrap';
import {useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Updaterow({ record }) {
    const {id}=useParams();
    
    const [name, setName] = useState(record.name);
    const [position, setPosition] = useState(record.position );
    const [level, setLevel] = useState(record.level );

    const navigate=useNavigate();
    
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
    
 const EDIT_Record= gql`
 mutation($id:ID!,$name: String, $position: String, $level: String) {
     updateRecord(id:$id,name: $name,position: $position, level: $level){
        id
        name
        position
        level
     }
  }
 `;



const [Updaterecord] = useMutation(EDIT_Record,{
   variables: { id,name, position, level },
   //onCompleted:()=>navigate("/Allrecord"),
   refetchQueries: [{ query: see_Record }],
 }
 ); 


  const onSubmit = (e) => {
    //e.preventDefault();

   

    Updaterecord(id,name, position, level);
  };




    return ( <div>
        
        <br></br>
        <Link to="/Allrecord">All record</Link>
        <Container>
            <h2>Edit record</h2>
            <form onSubmit={onSubmit}>
                                <br></br>
            <div className="form-group">
                    <input type="TEXT" class="form-control" name="name"
                    value={name} onChange={(e) => { setName(e.target.value) }} required  />

                </div>
                <br></br>
                <div className="form-group">
                    <input type="TEXT" class="form-control" 
                    value={position} onChange={(e) => { setPosition(e.target.value)    }} required/>

                </div>
                <br></br>
                <div className="form-group">
                    <input type="TEXT" class="form-control" 
                        value={level}onChange={(e) => { setLevel(e.target.value) }} />

                </div>
                <br></br>

               
                <br></br>
                <button  type="submit" class="btn btn-primary">Update</button>

            </form>
        </Container>
    </div> );
  
}
 

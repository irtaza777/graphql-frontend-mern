import React from 'react';
import { gql, useMutation,useQuery } from '@apollo/client';
import  { useState } from 'react'
import { Container } from 'react-bootstrap';
import {useNavigate, useParams } from 'react-router-dom';

const Updaterecord = () => {


    const {id}=useParams();
    
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [level, setLevel] = useState('');

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
   refetchQueries: [{ query: see_Record }],


 }   
 ); 
const { loading, error, data } = useQuery(see_Record, {variables:{id,}});
    
if (loading) return loading;
if (error) return <p>Something Went Wrong</p>;


    

  const onSubmit = (e) => {
    e.preventDefault();

   

    Updaterecord(id,name, position, level);
  };




    return ( <div>
        <br></br>
        <Container>
            <h2>Edit record</h2>
            <form onSubmit={onSubmit}>
                                <br></br>
            <div className="form-group">
                    <input type="TEXT" class="form-control" name="name"
                    value={data.record.name} onChange={(e) => { setName(e.target.value) }} required  />

                </div>
                <br></br>
                <div className="form-group">
                    <input type="TEXT" class="form-control" 
                    value={data.record.position} onChange={(e) => { setPosition(e.target.value)    }} required/>

                </div>
                <br></br>
                <div className="form-group">
                    <input type="TEXT" class="form-control" 
                        value={data.record.level}onChange={(e) => { setLevel(e.target.value) }} />

                </div>
                <br></br>

               
                <br></br>
                <button  type="submit" class="btn btn-primary">Update</button>

            </form>
        </Container>
    </div> );
}
 
export default Updaterecord;
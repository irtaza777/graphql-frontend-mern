import React from 'react';
import { gql, useMutation } from '@apollo/client';
import  { useState } from 'react'
import { Container } from 'react-bootstrap';

const Addrecord = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [level, setLevel] = useState('');
    const [error, setError] = React.useState(false);// error set for wrong input
//creating frondend mutation ADD_RECORD
// 'createRecord' name must be same to thtat of backend mutation name
    const ADD_RECORD = gql`

  mutation($name: String!, $position: String!, $level: String!) {
    createRecord(name: $name,position: $position, level: $level) {
      name,
      position,
      level
    }
  }
`;
//useMutation instead of usequery now store it in a varibale array
const [add] = useMutation(ADD_RECORD );


const handelSubmit = async(e) => {
    e.preventDefault();
    if (!name || !position || !level) {
        setError(true);
        return false
    }

     // Prevent reload
    let n=name, p=position, l=level
   try{
    //adding that add 
   await add({variables:{name:n, position:p, level:l}})
   
   }
   catch(error){alert(error)}

}


    return (  <div>
        <br></br>
        <Container>
            <h2>Enter a new data</h2>
            <form onSubmit={handelSubmit}>
                
                <br></br>
                <div class="form-group">
                    <input type="TEXT" class="form-control" placeholder="Name"
                        value={name} onChange={(e) => { setName(e.target.value) }} required />
                    {error && !name && <span style={{ color: "red" }}>Enter name</span>}

                </div>
                <br></br>
                <div class="form-group">
                    <input type="TEXT" class="form-control" placeholder="Position"
                        value={position} onChange={(e) => { setPosition(e.target.value) }} required />
                    {error && !position && <span style={{ color: "red" }}>Enter position</span>}

                </div>
                <br></br>

                <div class="form-group">
                    <input type="TEXT" class="form-control" placeholder="Level"
                        value={level} onChange={(e) => { setLevel(e.target.value) }} required />
                    {error && !level && <span style={{ color: "red" }}>Enter Level</span>}

                </div>
                <br></br>
                <button  type="submit" class="btn btn-primary">Insert</button>

            </form>
        </Container>
    </div>);
}
 
export default Addrecord;
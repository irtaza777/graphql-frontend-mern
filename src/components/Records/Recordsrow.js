import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Recordsrow({ record }) {



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

const DELETE_Record = gql`
    mutation($id: ID!) {
      deleteRecord(id: $id){
        id
        name
        position
        level
      }
    }
  `;
  
  const [deleteRecord] = useMutation(DELETE_Record, {
    variables: { id: record.id },
    refetchQueries: [{ query: getRecords }],
  });

  return (
    <tr>
      <td>{record.id}</td>
      <td>{record.name}</td>
      <td>{record.position}</td>
      <td>{record.level}</td>
      <td>
        <button className='btn btn-danger' onClick={deleteRecord}>
        <FaTrash />        </button>
        <Link  to={"/Updaterecord/"+record.id } className="btn btn-success m-2">Edit</Link>
      </td>
    </tr>
  );
}
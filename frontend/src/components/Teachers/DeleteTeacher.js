import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function DeleteTeacher() {
  const { id } = useParams();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://admn-wzcg.onrender.com/teachers/${id}`);
      history.push('/teachers');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error deleting teacher');
    }
  };

  return (
    <div>
      <h2>Delete Teacher</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <p>Are you sure you want to delete this teacher?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => history.goBack()}>Cancel</button>
    </div>
  );
}

export default DeleteTeacher;

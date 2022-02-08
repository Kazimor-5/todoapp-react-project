import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Buttons = ({ editNote, deleteNote, id }) => {
  return (
    <>
      <button className='btn btn-edit' onClick={() => editNote(id)}>
        <FaPencilAlt />
      </button>
      <button className='btn btn-delete' onClick={() => deleteNote(id)}>
        <FaTrashAlt />
      </button>
    </>
  );
};

export default Buttons;

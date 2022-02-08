import Buttons from './Buttons';

const Notes = ({ noteList, deleteNote, editNote }) => {
  return (
    <ul className='note-list'>
      {noteList.map((note) => {
        const { title, text, id } = note;

        return (
          <li key={id} className='note'>
            <div className='btn-container'>
              <Buttons deleteNote={deleteNote} editNote={editNote} id={id} />
            </div>
            <div className='content'>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Notes;

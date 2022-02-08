import { useState, useEffect } from 'react';
import Form from './Form';
import Notes from './Notes';
import Alert from './Alert';

// * Récupérer le localStorage
const getLocalStorage = () => {
  const storage = localStorage.getItem('notes');
  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
};

const App = () => {
  const [note, setNote] = useState({ title: '', text: '' });
  const [notes, setNotes] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', alert: '' });

  // * Permet de gérer la soumission du form
  const handleSubmit = (e) => {
    e.preventDefault();

    // * Vérifie que les deux champs sont valides/complets
    if (!note.title || !note.text) {
      console.log('erreur');
    } else if (note.title && note.text && isEditing) {
      const newNotes = notes.map((item) => {
        if (item.id === editID) {
          return { ...item, title: note.title, text: note.text };
        }
        return item;
      });
      setNotes(newNotes);
      setNote({ title: '', text: '' });
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'task edited', 'success');
    } else {
      const newNote = { ...note, id: new Date().getTime().toString() };

      setNote({ title: '', text: '' });
      setNotes([...notes, newNote]);
      showAlert(true, 'task added', 'success');
    }
  };

  // * Bouton delete
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    showAlert(true, 'task deleted', 'danger');
  };

  // * Bouton edit
  const editNote = (id) => {
    const { text, title } = notes.find((note) => note.id === id);
    setEditID(id);
    setIsEditing(true);
    setNote({ title: title, text: text });
  };

  // * Permet de gérer le changement dans le form (écriture)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNote({ ...note, [name]: value });
  };

  // * Bouton delete all
  const deleteAll = () => {
    setNotes([]);
    showAlert(true, 'all tasks deleted', 'danger');
  };

  // * Afficher l'alerte de supression, édition, ajout de note
  const showAlert = (show = false, message = '', alert = '') => {
    setAlert({ show, message, alert });
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main className='container'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} notes={notes} />}
      <Form
        note={note}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isEditing={isEditing}
      />
      {notes.length > 0 && (
        <>
          <Notes noteList={notes} deleteNote={deleteNote} editNote={editNote} />
          <button className='btn deleteAll' onClick={deleteAll}>
            tout supprimer
          </button>
        </>
      )}
    </main>
  );
};

export default App;

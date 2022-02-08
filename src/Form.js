const Form = ({ note, handleSubmit, handleChange, isEditing }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='title form-title'>TodoApp</h2>
      <div className='title-underline'></div>
      <div className='form-row'>
        <label htmlFor='title' className='form-label'>
          Title:
        </label>
        <input
          type='text'
          className='form-input'
          id='title'
          name='title'
          value={note.title}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='text' className='form-label'>
          Text:
        </label>
        <textarea
          name='text'
          id='text'
          value={note.text}
          onChange={handleChange}
          className='form-textarea'
        ></textarea>
      </div>
      <button className='btn btn-block'>
        {isEditing ? 'edit note' : 'add note'}
      </button>
    </form>
  );
};

export default Form;

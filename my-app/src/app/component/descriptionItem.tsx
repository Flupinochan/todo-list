// TodoのItemの詳細を表示する
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateTodo, removeTodo } from '../feature/todoSlice';

const DescriptionItem: React.FC = () => {
  const dispatch = useDispatch();
  const openItemId = useSelector((state: RootState) => state.openItem.openItem);
  const todos = useSelector((state: RootState) => state.todo.todos);
  
  const selectedTodo = todos.find(todo => todo.id === openItemId);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
    }
  }, [selectedTodo]);

  const handleUpdate = () => {
    if (selectedTodo) {
      dispatch(updateTodo({ ...selectedTodo, title, description }));
    }
  };

  const handleDelete = () => {
    if (selectedTodo) {
      dispatch(removeTodo(selectedTodo.id));
    }
  };

  return (
    <>
      {selectedTodo && (
        <div className='flex flex-col space-y-8 p-4 w-full'>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            variant="standard"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className='flex justify-between'>
            <Button variant="contained" color="success" onClick={handleUpdate}>Update</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default DescriptionItem;
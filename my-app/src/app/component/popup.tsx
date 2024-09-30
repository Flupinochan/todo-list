import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { RootState } from '../store';
import { closePopup } from '../feature/openPopupSlice';
import { addTodo } from '../feature/todoSlice';
import { addCategory } from '../feature/openCategorySlice';

const Popup: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.openPopup.isOpen);
  const dispatch = useDispatch();
  
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!title || !category || !description) {
      alert('すべてのフィールドを入力してください。');
      return;
    }
    const newTodo = {
      id: Date.now(),
      title,
      category,
      description,
    };
    dispatch(addTodo(newTodo));
    dispatch(addCategory(category));
    setCategory('');
    setTitle('');
    setDescription('');
    dispatch(closePopup());
  };

  const handleCancel = () => {
    setCategory('');
    setTitle('');
    setDescription('');
    dispatch(closePopup());
  };

  return (
    <Dialog open={isOpen} onClose={handleCancel}>
      <DialogTitle>新しいTodoを追加</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Category"
          type="text"
          fullWidth
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: 'space-between', padding: '26px' }}>
        <Button onClick={handleAdd} color="success" variant="contained">
          Add
        </Button>
        <Button onClick={handleCancel} color="error" variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;

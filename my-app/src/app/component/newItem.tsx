import Button from '@mui/material/Button';
import { openPopup } from '../feature/openPopupSlice';
import { useDispatch } from 'react-redux';

export const NewItem = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openPopup());
  };

  return (
    <div className='flex justify-center pt-4'>
      <Button variant="contained" color="success" onClick={handleClick}>New</Button>
    </div>
  );
};
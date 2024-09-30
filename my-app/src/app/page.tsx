'use client'
import Login from './component/Login';
import TodoList from './component/TodoList';
import DescriptionItem from './component/descriptionItem';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { NewItem } from './component/newItem';
import Popup from './component/popup';

export default function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <div>
      <Popup />
      <Login />
      <div className='flex flex-row'>
        <div className='flex flex-col'>
        {isLoggedIn && (
          <div>
            <TodoList />
            <NewItem />
          </div>
        )}
        </div>
        <DescriptionItem />
      </div>
    </div>
  );
}

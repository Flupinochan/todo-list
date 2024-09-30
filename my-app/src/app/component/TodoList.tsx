// Todoのカテゴリ一覧を表示
import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import CategoryList from './ItemsList';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenCategories } from '../feature/openCategorySlice';
import { RootState } from '../store';

const TodoList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.todo.todos);
  const openCategories = useSelector((state: RootState) => state.openCategory.openCategories);
  const categoryTypes = Array.from(new Set(categories.map(category => category.category)));
  const dispatch = useDispatch();

  // カテゴリをクリックしたときの開閉処理
  const handleClick = (category: string) => {
    console.log(category);
    if (openCategories[category]) {
      dispatch(setOpenCategories('')); // カテゴリを閉じるために存在しない空文字のカテゴリを渡して全てのカテゴリを閉じる
    } else {
      dispatch(setOpenCategories(category)); // カテゴリを開く
    }
  };

  return (
    <div>
    <List
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"/>
      }
    >
      {categoryTypes.map((category) => (
        <CategoryList 
          key={`${category}-${categories.find(cat => cat.category === category)?.id}`} 
          title={category} 
          items={categories.filter((cat) => cat.category === category)} 
          open={openCategories[category as keyof typeof openCategories]} 
          handleClick={() => handleClick(category)}
        />
      ))}
    </List>
    </div>
  );
};

export default TodoList;

// TodoのItemの一覧を表示
import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckIcon from '@mui/icons-material/Check';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setOpenItem } from '../feature/openItemSlice';

interface ItemsListProps {
  title: string;
  items: { id: number; title: string }[];
  open: boolean;
  handleClick: () => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ title, items, open, handleClick }) => {
  const openItemId = useSelector((state: RootState) => state.openItem.openItem);
  const dispatch = useDispatch();

  // アイテムをクリックしたときの開閉処理
  const handleItemClick = (event: React.MouseEvent<HTMLDivElement>, itemId: number, item: { title: string }) => {
    console.log(`${title.toLowerCase()}-${itemId}-${item.title}`);
    dispatch(setOpenItem(itemId));
  };

  return (
    <>
      <ListItemButton onClick={(event) => { event.stopPropagation(); handleClick(); }}>
        <ListItemIcon>
          {open ? <FolderOpenIcon /> : <FolderIcon />}
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <ListItemButton 
              key={`${title.toLowerCase()}-${item.id}-${item.title}`} 
              sx={{ pl: 4 }} 
              onClick={(event) => handleItemClick(event, item.id, item)}
            >
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
              <Collapse in={openItemId === item.id} timeout="auto" unmountOnExit>
                <CheckIcon />
              </Collapse>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default ItemsList;
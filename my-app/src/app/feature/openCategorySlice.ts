// 各カテゴリの開閉状態を管理するステート ※デフォルトは全てfalseで閉じる
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OpenCategoryState {
  openCategories: {
    [key: string]: boolean
  }
}

const initialState: OpenCategoryState = {
  openCategories: {
    ToDo: false,
    Restaurants: false,
    Books: false,
  },
}

const openCategorySlice = createSlice({
  name: 'openCategory',
  initialState,
  reducers: {
    // カテゴリをクリックしたときの開閉処理で、受け取ったカテゴリだけをtrueにしてopenにする
    setOpenCategories(state, action: PayloadAction<string>) {
      const category = action.payload;
      Object.keys(state.openCategories).forEach(key => {
        state.openCategories[key] = (key === category);
      });
    },
    // NEWボタンが押された場合に、新規カテゴリを追加
    addCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      state.openCategories[category] = false;
    },
  },
})

export const { setOpenCategories, addCategory } = openCategorySlice.actions
export default openCategorySlice.reducer
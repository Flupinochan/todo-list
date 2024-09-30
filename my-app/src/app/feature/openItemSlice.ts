// 各アイテムの開閉状態を管理するステート ※デフォルトは全てfalseで閉じる
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OpenItemState {
  openItem: number | null
}

const initialState: OpenItemState = {
  openItem: null
}

const openItemSlice = createSlice({
  name: 'openItem',
  initialState,
  reducers: {
    // アイテムをクリックしたときの開閉処理で、受け取ったアイテムだけをtrueにしてopenにする
    setOpenItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      state.openItem = itemId;
    },
  },
})

export const { setOpenItem } = openItemSlice.actions
export default openItemSlice.reducer
export const myStyle = {
  '& .MuiInputBase-input': {
    color: '#FFFFFF',    // 入力文字の色
  },
  '& label': {
    color: '#FFFFFF', // 通常時のラベル色 
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#FFFFFF', // 通常時のボーダー色
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: '#FFFFFF',  // ホバー時のボーダー色
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFFFFF',    // 通常時のボーダー色(アウトライン)
    },
    '&:hover fieldset': {
      borderColor: '#FFFFFF',    // ホバー時のボーダー色(アウトライン)
    },
  },
}
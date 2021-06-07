export const useOnKeyPress = ({ onEnter, onKeyPress }) => {
  if (!(onEnter || onKeyPress)) {
    return {}
  }

  return {
    onKeyPress: (event) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }

      if (onKeyPress) {
        onKeyPress(event)
      }
    },
  }
}

import { useAttach }     from './useAttach'
import { useMask }       from './useMask'
import { useOnChange }   from './useOnChange'
import { useOnKeyPress } from './useOnKeyPress'

const compose =
  (...items) =>
  (props) =>
    Object.assign({}, ...items.map((item) => item(props)))

export const useHooks = compose(useOnKeyPress, useOnChange, useAttach, useMask)

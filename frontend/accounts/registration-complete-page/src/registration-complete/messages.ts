import { defineMessages } from 'react-intl'

import { name }           from '../../package.json'

export default defineMessages({
  welcome: {
    id: `${name}.welcome`,
    defaultMessage: 'Добро пожаловать!',
  },
  openProfile: {
    id: `${name}.open_profile`,
    defaultMessage: 'Открыть профиль',
  },
  backToMain: {
    id: `${name}.back_to_main`,
    defaultMessage: 'Вернуться на главную',
  },
})

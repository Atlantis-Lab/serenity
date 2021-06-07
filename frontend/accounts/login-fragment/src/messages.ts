import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  signin: {
    id: `${name}.signin`,
    defaultMessage: 'Войти',
  },
  signup: {
    id: `${name}.signup`,
    defaultMessage: 'Зарегистрироваться',
  },
  login: {
    id: `${name}.login`,
    defaultMessage: 'Логин',
  },
  password: {
    id: `${name}.password`,
    defaultMessage: 'Пароль',
  },
  restore: {
    id: `${name}.restore`,
    defaultMessage: 'Восстановить',
  },
})

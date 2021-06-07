import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  signup: {
    id: `${name}.signup`,
    defaultMessage: 'Зарегистрироваться',
  },
  specialist: {
    id: `${name}.specialist`,
    defaultMessage: 'Я исполнитель',
  },
  customer: {
    id: `${name}.customer`,
    defaultMessage: 'Я заказчик',
  },
  email: {
    id: `${name}.email`,
    defaultMessage: 'Ваша почта',
  },
  enterPassword: {
    id: `${name}.enter_password`,
    defaultMessage: 'Введите пароль',
  },
  confirmPassword: {
    id: `${name}.confirm_password`,
    defaultMessage: 'Подтвердите пароль',
  },
  createAccount: {
    id: `${name}.create_account`,
    defaultMessage: 'Создать аккаунт',
  },
})

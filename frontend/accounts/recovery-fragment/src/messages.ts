import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  resetPassword: {
    id: `${name}.reset_password`,
    defaultMessage: 'Восстановление пароля',
  },
  email: {
    id: `${name}.email`,
    defaultMessage: 'Ваша почта',
  },
  sendMail: {
    id: `${name}.send_mail`,
    defaultMessage: 'Выслать письмо',
  },
})

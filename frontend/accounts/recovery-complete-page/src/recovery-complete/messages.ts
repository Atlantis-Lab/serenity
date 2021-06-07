import { defineMessages } from 'react-intl'

import { name }           from '../../package.json'

export default defineMessages({
  resetPassword: {
    id: `${name}.reset_password`,
    defaultMessage: 'Восстановление пароля',
  },
  description: {
    id: `${name}.description`,
    defaultMessage:
      'Вам на почту была отправлена ссылка на восстановление пароля. Пройдите по ней чтобы завершить восстановление. Или вернитесь на главную',
  },
  backToMain: {
    id: `${name}.back_to_main`,
    defaultMessage: 'Вернуться на главную',
  },
})

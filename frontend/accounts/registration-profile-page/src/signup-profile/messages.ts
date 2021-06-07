import { defineMessages } from 'react-intl'

import { name }           from '../../package.json'

export default defineMessages({
  yourData: {
    id: `${name}.your_data`,
    defaultMessage: 'Ваши данные',
  },
  specialist: {
    id: `${name}.specialist`,
    defaultMessage: 'Я исполнитель',
  },
  customer: {
    id: `${name}.customer`,
    defaultMessage: 'Я заказчик',
  },
  firstName: {
    id: `${name}.first_name`,
    defaultMessage: 'Имя',
  },
  lastName: {
    id: `${name}.last_name`,
    defaultMessage: 'Фамилия',
  },
  save: {
    id: `${name}.save`,
    defaultMessage: 'Сохранить',
  },
})

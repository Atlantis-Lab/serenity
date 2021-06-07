import { IsEmail, MinLength }              from 'class-validator'

import { User }                            from '@identity/persistence'

import messages                            from '../messages'
import { IsEntityNotExists, IsFieldEqual } from '../constraints'

export class RegisterUserCommand {
  @IsEmail(
    {},
    {
      message: messages.invalidEmail.defaultMessage,
    }
  )
  @IsEntityNotExists(
    {
      entity: User,
      field: '"emailAddress"',
    },
    {
      message: messages.emailAlreadyExists.defaultMessage,
    }
  )
  email: string

  @MinLength(5, {
    message: messages.minLength.defaultMessage,
  })
  password: string

  @IsFieldEqual('password', {
    message: messages.doNotMatch.defaultMessage,
  })
  confirmPassword: string
}

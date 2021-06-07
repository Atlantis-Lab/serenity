import uuid                    from 'uuid/v4'
import { Injectable }          from '@nestjs/common'

import {
  Address,
  ContactInformation,
  Credentials,
  Email,
  PersonalInformation,
  Phone,
  Photo,
  Profile,
  User,
} from '@identity/domain'
import { UserStoreRepository } from '@identity/persistence'

import {
  AuthenticateUserCommand,
  ChangePasswordCommand,
  CreateProfileCommand,
  RegisterUserCommand,
  ResetPasswordCommand,
  UpdateProfileCommand,
  VerifyEmailCommand,
} from '../commands'

@Injectable()
export class UserApplicationService {
  constructor(private readonly userRepository: UserStoreRepository) {}

  async register(command: RegisterUserCommand): Promise<any> {
    const user = await User.register(
      uuid(),
      new Email(command.email),
      new Credentials(command.password)
    )

    user.requestEmailVerification()

    await this.userRepository.save(user)

    return user
  }

  async verifyEmail(command: VerifyEmailCommand): Promise<any> {
    const user = await this.userRepository.getByEmailVerificationToken(command.token)

    user.completeEmailVerification()

    await this.userRepository.save(user)

    return user
  }

  async authenticate(command: AuthenticateUserCommand): Promise<any> {
    const user = await this.userRepository.getByEmailAddress(command.email)

    if (user && (await user.verifyPassword(command.password))) {
      return user
    }

    return null
  }

  async resetPassword(command: ResetPasswordCommand): Promise<any> {
    const user = await this.userRepository.getByEmailAddress(command.email)

    user.requestResetPassword()

    await this.userRepository.save(user)

    return user
  }

  async changePassword(command: ChangePasswordCommand): Promise<any> {
    const user = await this.userRepository.getByResetPasswordToken(command.token)

    await user.completeResetPassword(command.password)

    await this.userRepository.save(user)

    return user
  }

  async createProfile(command: CreateProfileCommand): Promise<any> {
    const user = await this.userRepository.getById(command.id)

    user.createProfile(
      new Profile(command.type, new PersonalInformation(command.firstName, command.lastName))
    )

    await this.userRepository.save(user)

    return user
  }

  async updateProfile(command: UpdateProfileCommand): Promise<any> {
    const user = await this.userRepository.getById(command.id)

    user.changeProfilePersonalInformation(
      new PersonalInformation(command.firstName, command.lastName)
    )

    user.changeProfileContactInformation(new ContactInformation(new Phone(command.phone)))

    user.changeProfilePhoto(new Photo(command.photoId))

    user.changeAddress(new Address(command.address))

    user.changeWebsite(command.website)

    await this.userRepository.save(user)

    return user.profile
  }
}

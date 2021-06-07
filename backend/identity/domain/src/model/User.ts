/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { AggregateRootProperties, Uuid } from '@node-ts/ddd-types'

import { AggregateRoot }                 from '@node-ts/ddd'

import {
  EmailVerificationComplete,
  EmailVerificationRequested,
  ProfileCreated,
  ResetPasswordComplete,
  ResetPasswordRequested,
  UserRegistered,
} from '../events'
import { Address }                       from './Address'
import { ContactInformation }            from './ContactInformation'
import { Credentials }                   from './Credentials'
import { Email }                         from './Email'
import { PersonalInformation }           from './PersonalInformation'
import { Photo }                         from './Photo'
import { Profile }                       from './Profile'

export interface UserProperties extends AggregateRootProperties {
  email: Email
  credentials: Credentials
}

export class User extends AggregateRoot implements UserProperties {
  email: Email

  credentials: Credentials

  profile: Profile

  static async register(id: Uuid, email: Email, credentials: Credentials): Promise<User> {
    const user = new User(id)

    await credentials.encryptPassword()

    const userRegistered = new UserRegistered(id, email, credentials)

    user.when(userRegistered)

    return user
  }

  requestEmailVerification() {
    this.email.generateVerificationToken()

    this.when(new EmailVerificationRequested(this.id, this.email))
  }

  completeEmailVerification() {
    this.email.verify()

    this.when(new EmailVerificationComplete(this.id, this.email))
  }

  requestResetPassword() {
    this.credentials.generateResetToken()

    // @ts-ignore
    this.when(new ResetPasswordRequested(this.id, this.email, this.credentials.resetToken))
  }

  async completeResetPassword(password) {
    await this.credentials.changePassword(password)
    this.credentials.clearResetToken()

    this.when(new ResetPasswordComplete(this.id, this.email))
  }

  public verifyPassword(password) {
    return this.credentials.verifyPassword(password)
  }

  public createProfile(profile: Profile) {
    if (!(this.profile && this.profile.type)) {
      this.when(new ProfileCreated(this.id, profile))
    }
  }

  public changeProfilePhoto(photo: Photo) {
    this.profile.changePhoto(photo)
  }

  public changeProfilePersonalInformation(personalInformation: PersonalInformation) {
    this.profile.changePersonalInformation(personalInformation)
  }

  public changeProfileContactInformation(contactInformation: ContactInformation) {
    this.profile.changeContactInformation(contactInformation)
  }

  public changeAddress(address: Address) {
    this.profile.changeAddress(address)
  }

  public changeWebsite(website: string) {
    this.profile.changeWebsite(website)
  }

  protected whenUserRegistered(event: UserRegistered): void {
    this.email = event.email
    this.credentials = event.credentials
  }

  protected whenEmailVerificationRequested(event: EmailVerificationRequested): void {}

  protected whenEmailVerificationComplete(event: EmailVerificationComplete): void {}

  protected whenResetPasswordRequested(event: ResetPasswordRequested): void {}

  protected whenResetPasswordComplete(event: ResetPasswordComplete): void {}

  protected whenProfileCreated(event: ProfileCreated): void {
    this.profile = event.profile
  }
}

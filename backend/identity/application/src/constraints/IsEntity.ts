/* eslint-disable class-methods-use-this */
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator'
import { Connection } from 'typeorm'

interface IsEntityOptions {
  entity: Function
  field?: string
}

@ValidatorConstraint({ async: true })
export class IsEntityConstraint implements ValidatorConstraintInterface {
  constructor(private readonly connection: Connection) {}

  getEntity(entity, property, value) {
    try {
      return this.connection.manager
        .createQueryBuilder(entity, 'target')
        .where(`LOWER(${property}) = LOWER(:value)`, { value })
        .getOne()
    } catch (error) {
      console.log(error) // eslint-disable-line no-console

      return null
    }
  }

  async validate(value: any, args: any) {
    const [options, check] = args.constraints

    const entity = options instanceof Function ? options : options.entity

    const result = await this.getEntity(entity, options.field || args.property, value)

    return check === !!result
  }
}

export const IsEntityExists =
  (options: IsEntityOptions | Function, validationOptions?: ValidationOptions) =>
  (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      options: validationOptions,
      constraints: [options, true],
      propertyName,
      validator: IsEntityConstraint,
    })
  }

export const IsEntityNotExists =
  (options: IsEntityOptions | Function, validationOptions?: ValidationOptions) =>
  (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      options: validationOptions,
      constraints: [options, false],
      propertyName,
      validator: IsEntityConstraint,
    })
  }

import DataLoader                          from 'dataloader'
/* eslint-disable class-methods-use-this */
import { Injectable }                      from '@nestjs/common'
import { ResolveProperty, Resolver, Root } from '@nestjs/graphql'

import { Loader }                          from '@monstrs/nestjs-dataloader'
import { Category }                        from '@public-gateway/catalog'
import { collaboration }                   from '@protos/interfaces'

import { CategoriesLoader }                from '../dataloaders'
import { Specialisation }                  from '../types'

@Injectable()
@Resolver((of) => Specialisation)
export class SpecialisationResolver {
  @ResolveProperty()
  main(
    @Root() { main }: collaboration.Specialisation,
    @Loader(CategoriesLoader.name)
    categoriesLoader: DataLoader<any, Category>
  ) {
    if (!(main && main.length > 0)) {
      return []
    }

    return categoriesLoader.loadMany(main)
  }

  @ResolveProperty()
  additional(
    @Root() { additional }: collaboration.Specialisation,
    @Loader(CategoriesLoader.name)
    categoriesLoader: DataLoader<any, Category>
  ) {
    if (!(additional && additional.length > 0)) {
      return []
    }

    return categoriesLoader.loadMany(additional)
  }
}

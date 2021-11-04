import { queries as logisticsQueries } from './logistics'
import { queries as settingsQueries } from './settings'

export const resolvers = {
  Query: {
    ...logisticsQueries,
    ...settingsQueries,
  }
}

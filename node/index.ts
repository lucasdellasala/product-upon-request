import {
  ClientsConfig,
  ServiceContext,
  RecorderState,
  LRUCache,
  Service
} from '@vtex/api'

import { Clients } from './clients'
import { resolvers } from './resolvers'

const TIMEOUT_MS = 800

const memoryCache = new LRUCache<string, any>({ max: 20 })

metrics.trackCache('status', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
     status: {
      memoryCache,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {}
}

export default new Service<Clients, RecorderState, Context>({
  clients,
  graphql: {
    resolvers,
  },
})

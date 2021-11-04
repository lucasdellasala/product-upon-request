import { JanusClient, InstanceOptions, IOContext } from '@vtex/api'

export default class Logistics extends JanusClient {
  private baseUrl: string = `http://${this.context.account}.vtexcommercestable.com.br/api/logistics`

  constructor(context: IOContext, options?: InstanceOptions) {
    super(context,
      {
        ...options,
        headers: {
          VtexIdclientAutCookie: context.adminUserAuthToken || context.authToken || '',
        },
      })
  }

  public async getSkusStockInWarehouses(skuId: string) {
    return this.http.getRaw(`${this.baseUrl}/pvt/inventory/skus/${skuId}`)
  }
}

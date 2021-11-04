/* eslint-disable @typescript-eslint/no-explicit-any */
export const queries = {
    isSkuUponRequest: async (_: unknown, { skuId }:{ skuId: string}, ctx: Context): Promise<any> => {
      try {
        const appId = process.env.VTEX_APP_ID ? process.env.VTEX_APP_ID : ''
        const {warehouse_1, warehouse_2} = await ctx.clients.apps.getAppSettings(appId)
        const { data } = await ctx.clients.logistics.getSkusStockInWarehouses(skuId)

        const WAREHOUSE_ID_UPON_REQUEST = warehouse_2
        const WAREHOUSE_ID_PRINCIPAL = warehouse_1

        const warehouseDataUponRequest = data.balance.find((warehouseData: any)=> warehouseData.warehouseId === WAREHOUSE_ID_UPON_REQUEST)
        const warehouseDataPrincipal = data.balance.find((warehouseData: any)=> warehouseData.warehouseId === WAREHOUSE_ID_PRINCIPAL)

        if(
          warehouseDataUponRequest &&
          warehouseDataPrincipal &&
          warehouseDataUponRequest.totalQuantity > 0
          ){
          if(
            warehouseDataPrincipal.totalQuantity === 0 ||
            (warehouseDataPrincipal.totalQuantity - warehouseDataPrincipal.reservedQuantity <= 0)
            ){
              return {
                isUponRequest: true,
                id: skuId,
                hasStock: true
              }
            }
            }

        if(warehouseDataUponRequest &&
          warehouseDataPrincipal &&
          warehouseDataUponRequest.totalQuantity <= 0 &&
          warehouseDataPrincipal.totalQuantity <= 0
          ){
          return {
            isUponRequest: false,
            id: skuId,
            hasStock: false
          }
        }

        return {
          isUponRequest: false,
          id: skuId,
          hasStock: true
        }
      } catch (error) {
        return error
      }
  },
}

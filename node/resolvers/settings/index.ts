/* eslint-disable @typescript-eslint/no-explicit-any */
export const queries = {
    getSettings: async (_: unknown, __:unknown, ctx: Context): Promise<any> => {
      try{
        const appId = process.env.VTEX_APP_ID ? process.env.VTEX_APP_ID : ''

        const { brands, categories } = await ctx.clients.apps.getAppSettings(appId)

        return {
          brands: brands.split(','),
          categories: categories.trim().split(','),
        }
      } catch (error) {
        return error
      }
    }
}

import React, {useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import getSettings from './graphql/getSettings.gql'


function ProductUponRequestWrapper({children}:any) {
  const [showApp, setShowApp] = useState(false)
  const productContextValue = useProduct()
  const { loading, error, data } = useQuery(getSettings, {
    ssr: false,
  })

  useEffect(() => {
    if (data) {
      const brandsToShow = data.getSettings.brands
      const categoriesToShow = data.getSettings.categories

      const productBrand = productContextValue.product.brandId
      const productCategory = productContextValue.product.categoryId

      if ( brandsToShow.includes(productBrand) || categoriesToShow.includes(productCategory)) {
        setShowApp(true)
      }
    }
  }, [data, loading, error])


  return <div key="product-upon-request-wrapper">
      {showApp ? children : null}
    </div>
}

export default ProductUponRequestWrapper

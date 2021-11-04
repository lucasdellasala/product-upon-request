import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import isSkuUponRequest from './graphql/isSkuUponRequest.gql'

import './ProductUponRequest.css'


const classes = {
  uponRequestTag : {
    "backgroundColor": "#333",
    "borderRadius": "2px",
    "color": "#f5f5f5",
    "padding": "2px 10px 2px 10px"
  },
  inStockTag: {
    "backgroundColor": "#fff",
    "borderRadius": "2px",
    "border": "1px solid #000",
    "color": "#000",
    "padding": "2px 10px 2px 10px"
  },
  inStockPoster: {
    "margin" : "0 0 10px 0"
  }
}

function ProductUponRequest({days, uponRequestTagMessage, inStockTagMessage}: any) {
  const [isUponRequest, setIsUponRequest] = useState(false)
  const [hasStock, setHasStock] = useState(false)
  const productContextValue = useProduct()
  const skuId: string = productContextValue.selectedItem.itemId
  const daysUponRequest = productContextValue.product.skuSpecifications.find((spec: { field : { name: string }}) => spec.field.name === 'days')
  const { loading, error, data } = useQuery(isSkuUponRequest, {
    variables: { skuId: skuId },
    ssr: false,
  })

  useEffect(() => {
    if (data) {
      setIsUponRequest(data.isSkuUponRequest.isUponRequest)
      setHasStock(data.isSkuUponRequest.hasStock)
    }
  }, [data, loading, error])

  const UponRequestPoster = () => {
    return (
      <div className="upon-request-poster">
        <div><span style={classes.uponRequestTag}>{uponRequestTagMessage}</span></div>
        <p>
          <strong className="upon-request-strong">PRODUCCION: </strong>
          {daysUponRequest? daysUponRequest.values[0].name : days} días hábiles
        </p>
      </div>
    )
  }

  const InStockPoster = () => {
    return (
      <div className="in-stock-poster" style={classes.inStockPoster}>
        <span style={classes.inStockTag}>{inStockTagMessage}</span>
      </div>
    )
  }
  if(hasStock){
    return <div key="product-upon-request">
    {
      isUponRequest? <UponRequestPoster />: <InStockPoster/>
    }
    </div>
  } else {
    return <></>
  }
}

ProductUponRequest.schema = {
  title: 'Product Upon Request',
  type: 'object',
  properties: {
    days: {
      value: 10,
      type: 'number'
    },
    uponRequestTagMessage: {
      text: 'Upon Request',
      type: 'string'
    },
    inStockTagMessage: {
      text: 'In Stock',
      type: 'string'
    }
  }
}

export default ProductUponRequest

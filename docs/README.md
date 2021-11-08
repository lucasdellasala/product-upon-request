📢 Use this project, [contribute](https://github.com/lucasdellasala/product-upon-request) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# PRODUCT UPON REQUEST

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

It is an application that allows you to select and add to the cart products that do not have stock showing a message that they will have a delay of a certain number of days.

![App view](https://user-images.githubusercontent.com/55720621/140690200-2df99f60-7806-44e6-b65c-89e56d816153.png)

## Functioning 💡

This app works only in the product detail page using two warehouses, one has the real stock of the products and the other has infinite stock for those products that are on demand.

Only if the product belongs to any of the brands or categories expressed in the configuration, the app will work.

If it works, it will validate if there is stock in the main warehouse (the actual stock), if there is stock it will show a label that there is stock, if there is not (and there is stock in the infinite stock warehouse), it will show a label that is upon request and will express the amount of business days.

If there is no stock in any of them, it will not show any label.

## Configuration 🔧

![App settings](https://user-images.githubusercontent.com/55720621/140690398-2ec52899-8154-4848-a580-272349bd5656.PNG)

You have to define in the configuration (accessing `https://{{accountName}}.myvtex.com/admin/apps/lopmultimedia.product-upon-request@0.x/setup/` ) the following environment variables:

- Warehouse Principal: is the principal warehouse id (with the real stock).
- Warehouse Infinito: is the upon request warehouse id (with the infinite stock).
- Marcas afectadas: are the brand ids (separated by commas) that you want to apply the functionality.
- Categorías afectadas (ids): are the category ids (separated by commas) that you want to apply the functionality. THIS ONLY WORKS FOR TREE END CATEGORIES. Eg: furniture -> armchairs : you can't apply the functionality to furniture (unless some products have as their final category furniture), you have to use the child category.
## Setup theme 🤝

First add the `lopmultimedia.product-upon-request` to the peerDependencies in the manifest.json.
```
  "peerDependencies": {
    "lopmultimedia.product-upon-request": "0.x"
  },
```
Then declare the block in the product.jsonc and put the `product-upon-request-wrapper#main` as a children of a layout.
```
{
  "product-upon-request-wrapper#main": {
    "children": ["product-upon-request#main"]
  },
  "product-upon-request#main": {
    "props": {
      "days": 2021,
      "uponRequestTagMessage": "A producir",
      "inStockTagMessage": "En stock"
    }
  }
}
```

| Block name   | Description  |
| -------- | ------------------------ |
| `product-upon-request-wrapper`     |  ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Wrapper block that enables you to build the product upon request tags using `product-upon-request` as a children block. It must be used in the `product` template.                                   |
| `product-upon-request` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Builds the product upon request tags.
## Configure `product-upon-request` props 🚀

| Prop name              | Type             | Description                                                                                                                                                                                           | Default value     |
| ---------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `days` | `number` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Default quantity of days to receive a product upon request.  | `10` | 
| `uponRequestTagMessage` | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Text message in the Upon Request Tag. | `Upon Request` | 
| `inStockTagMessage`      | `string`         | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Text message in the In Stock Tag.                                                                                                                                                               | `In Stock`                |

## Customization 🎨

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/lucasdellasala/"><img src="https://github.com/lucasdellasala.png" width="100px;" alt=""/><br /><sub><b>Lucas Della Sala</b></sub></a><br /><a href="https://github.com/lucasdellasala/product-upon-request/commits?author=lucasdellasala" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)

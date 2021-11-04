📢 Use this project, [contribute](https://github.com/lucasdellasala/product-upon-request) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# PRODUCT UPON REQUEST

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

It is an application that allows you to select and add to the cart products that do not have stock showing a message that they will have a delay of a certain number of days.

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Functioning 💡

WIP.

## Configuration 🔧

WIP.

## Setup theme 🤝

WIP.

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

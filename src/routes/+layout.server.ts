import {SHOPIFY_STORE_DOMAIN,SHOPIFY_STOREFRONT_ACCESSTOKEN} from "$env/static/private"
const domain = SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = SHOPIFY_STOREFRONT_ACCESSTOKEN

export async function load({ params }:any) {
    let productos:any[] = await getAllProducts();
    productos = productos.map((val)=>{
      let id =val.node.id.replace("gid://shopify/Product/","")
      val.node.id = id
      return val
    })
    
    return {
      products: productos
    };
  }


  
  async function ShopifyData(query:any) {
    const URL = `https://${domain}/api/2022-10/graphql.json`;
  
  
    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
  
    try {
      const data = await fetch(URL, options).then((response) => {
        return response.json();
      });
  
      return data;
    } catch (error) {
      console.log(error)
      throw new Error("Products not fetched");
      
    }
  }
  
    async function getProductsInCollection() {
    const query = `
    {
      collection(handle: "frontpage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              tag
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`;
  
    const response = await ShopifyData(query);
  
    const allProducts = response.data.collection.products.edges
      ? response.data.collection.products.edges
      : [];
  
    return allProducts;
  }
  
    async function getAllProducts() {
    const query = `{
      products(first: 250) {
        edges {
          node {
            title
            handle
            id
            createdAt
            tags
            description
            productType
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }

          }
        }
      }
    }`;
  
    const response = await ShopifyData(query);
  
    const slugs = response.data.products.edges
      ? response.data.products.edges
      : [];
  
    return slugs;
  }
  
    async function getProduct(handle: any) {
    const query = `
    {
      product(handle: "${handle}") {
        collections(first: 1) {
          edges {
            node {
              products(first: 5) {
                edges {
                  node {
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
                    images(first: 5) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        id
        title
        handle
        description
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 25) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                url
                altText
              }
              title
              id
              availableForSale
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }`;
  
    const response = await ShopifyData(query);
  
    const product = response.data.product
      ? response.data.product
      : [];
  
    return product;
  }
  
    async function createCheckout(id: any, quantity: any) {
    const query = `
      mutation {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
        }) {
          checkout {
            id
            webUrl
          }
        }
      }`;
  
    const response = await ShopifyData(query);
  
    const checkout = response.data.checkoutCreate.checkout
      ? response.data.checkoutCreate.checkout
      : [];
  
    return checkout;
  }
  
    async function updateCheckout(id: any, lineItems: any[]) {
    const lineItemsObject = lineItems.map((item: { id: any; variantQuantity: any; }) => {
      return `{
        variantId: "${item.id}",
        quantity:  ${item.variantQuantity}
      }`;
    });
  
    const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`;
  
    const response = await ShopifyData(query);
  
    const checkout = response.data.checkoutLineItemsReplace.checkout
      ? response.data.checkoutLineItemsReplace.checkout
      : [];
  
    return checkout;
  }
  
    async function recursiveCatalog(cursor = "", initialRequest = true): Promise<any> {
    let data;
  
    if (cursor !== "") {
      const query = `{
        products(after: "${cursor}", first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }`;
  
      const response = await ShopifyData(query);
      data = response.data.products.edges ? response.data.products.edges : [];
  
      if (response.data.products.pageInfo.hasNextPage) {
        const num = response.data.products.edges.length;
        const cursor = response.data.products.edges[num - 1].cursor;
        console.log("Cursor: ", cursor);
  
        return data.concat(await recursiveCatalog(cursor));
      } else {
        return data;
      }
    } else {
      const query = `{
        products(first: 250) {
          edges {
            cursor
            node {
              id
              handle
  
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
      `;
  
      const response = await ShopifyData(query);
      data = response.data.products.edges ? response.data.products.edges : [];
  
      if (response.data.products.pageInfo.hasNextPage) {
        const num = response.data.products.edges.length;
        const cursor = response.data.products.edges[num - 1].cursor;
  
        return data.concat(await recursiveCatalog(cursor));
      } else {
        return data;
      }
    }
  }
  
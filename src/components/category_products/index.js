import React from 'react'
import { Title, Column, Box, Image } from 'rbx'
import "../../assets/styles/product.scss"
 
const CategoryProducts = ({products, title}) => (
  <div id="product">
    <Title size="5">{title}</Title>
    <Column.Group gapSize={2} multiline>
      {
        products.map((product, index) => {
          return (  
            <Column size="6" key={index}>
              <Box>
                <Column.Group>
                  <Column size="three-fifths">
                    <Title size="6">{product.name}</Title>
                    <p>{product.description}</p>
                    <span className="dashed_box">Preço ${product.price}</span>
                  </Column>
                  <Column size="two-fifths">
                    <Image alt="product" src={product.image_url} width="50%" />
                  </Column>
                </Column.Group>
              </Box>
            </Column>
          )
        })
      }
    </Column.Group>
  </div>
)
 
export default CategoryProducts
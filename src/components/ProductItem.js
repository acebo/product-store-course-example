import React, { useRef } from 'react'
import shoeImg from "../assets/shoe.png";

const ProductItem = (props) => {
  const card = useRef(null)

  const handleMouseOver = () => {
    card.current.classList.add('animate')
  }

  const handleMouseLeave = () => {
    card.current.classList.remove('animate')
  }

  return (
    <div className="product-container">
      <div className="product-card" ref={card} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img src={ shoeImg } alt=""/>
        <div className="add-to-cart-button">Add to Cart</div>
        <div className="stats">
          <div className="stats-container">
            <span className="product_price">${ props.price }</span>
            <span className="product_name">{ props.name }</span>
            <p>{ props.description }</p>

            <div className="product-options">
              <strong>SIZES</strong>
              <span>{ props.sizes.join(', ') }</span>
              <strong>COLORS</strong>
              <div className="colors">
                {
                  props.colors.map(color => (
                    <div key={color} className={`c-${ color }`}><span /></div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem

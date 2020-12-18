import React, { useState } from 'react'
import { Typography, Radio } from "antd";
import ProductItem from "../components/ProductItem";
import data from "../data.json";
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"

const { Title } = Typography;

const Product = () => {
  const [selectedFilter, setSelectedFilter] = useState('select-all')
  const onFilterChange = event => setSelectedFilter(event.target.value)
  let filteredProduct = data.products

  if(selectedFilter === 'in-stock') {
    filteredProduct = data.products.filter(product => product.stock !== 0)
  }

  return (
    <>
      <div className={'app-header'}>
        <div className={'header-content'}>
          <Title>Pastel Store</Title>
          <div className={'cart-icon'}>
            <Link to={'/cart'}>
              <ShoppingCartOutlined />
            </Link>
          </div>
          <Radio.Group
            defaultValue={selectedFilter}
            buttonStyle="solid"
            onChange={onFilterChange}>
            <Radio.Button value="select-all">Select all</Radio.Button>
            <Radio.Button value="in-stock">Only in stock</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className={'app-content'}>
        <div className="product-list">
          {
            filteredProduct.map(product => (
              <ProductItem key={product.id} { ...product } />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Product

import React from 'react'
import { connect } from 'react-redux'

import { Button, Table } from 'react-bootstrap'


function sort(items) {
  return items.sort((a, b) => a.id - b.id)
}

function Cart(props) {
  return <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Change quantity</th>
        <th>Remove all items</th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr>
          <td><div>
            {item.name}
            <div><img
              height={100}
              title={item.name}
              src={`/products/${item.image}`}
            />
            </div>
          </div></td>
          <td>{item.quantity}</td>
          <td>
            <Button bsStyle="primary"
              onClick={(e) => props.addToCart(item)}
            >+</Button>
            <Button bsStyle="primary"
              onClick={(e) => props.removeFromCart(item)}
            >-</Button>
          </td>
          <td>
            <Button bsStyle="primary" block
              onClick={(e) => props.removeAllFromCart(item)}
            >Remove from cart</Button>
          </td>
        </tr>)
      }
    </tbody>
  </Table>
}

export function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
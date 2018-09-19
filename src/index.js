// Code Goes Here

import React from "react";
import PropTypes from "prop-types"
class Order extends React.Component 
{
  render()
  {
    return (
       <div clasName="order">
         <ul>
          <li>{this.props.cone?"Cone":"Cup"}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length}
           Scoops:{this.props.scoops.join(",")}
          </li>
          <li>Ordered By {this.props.orderInfo.customerName} at
            {this.props.orderInfo.orderedAt}</li>
         </ul>
       </div>
      )
  }
}

Order.defaultProps = {
  cone:true,
  size:"regular",
  scoops:[],
  orderInfo:{
  }
}
Order.propTypes = {
  cone:PropTypes.bool,
  size:PropTypes.string,
  scoops:PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo:PropTypes.shape({
    customerName:PropTypes.string.isRequired,
    orderedAt:PropTypes.number.isRequired
  }).isRequired
}
import React from 'react';

const CustomerList = (props) => {
    const {customer,count}=props;

  return(
                 <tr>
                    <td>{count}</td>
                    <td>{customer.customername}</td>
                    <td>{customer.cake}</td>
                    <td>{customer.number}</td>
                    <td>{customer.date}</td>
                    <td>{customer.amountpaid}</td>
                  </tr>
  ) 
};

export default CustomerList;

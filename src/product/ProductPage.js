import React from 'react'
import { useLocation } from 'react-router';

export default function ProductPage(props) {

  const location = useLocation();
  const item = location.state.item;
  return (
    <div>
      ProductPage<br />
      {JSON.stringify(item)}
    </div>
  )
}

import React, { useState } from 'react'
import Middle from './Middle';

export default function Top() {
    const [items, setItems] = useState([]);

  return (
    <div>Top
    <Middle items={items} />

    </div>
  )
}

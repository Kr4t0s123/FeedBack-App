import React from 'react'
import { useState } from 'react'

function RatingSelect() {
  const [selected, setSelected] = useState(10)
  return (
    <ul className='rating'>
        <li>
            <p>1</p>
        </li>
        <li>
            <p>2</p>
        </li>
        <li>
            <p>3</p>
        </li>
        <li>
            <p>4</p>
        </li>
        <li>
            <p>5</p>
        </li>
        <li>
            <p>6</p>
        </li>
        <li>
            <p>7</p>
        </li>
        <li>
            <p>8</p>
        </li>
        <li>
            <p>9</p>
        </li>
        <li>
            <p>10</p>
        </li>
    </ul>   
  )
}

export default RatingSelect
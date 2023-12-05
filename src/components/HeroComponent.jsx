import React, { Component } from 'react'
import '../index.css'
import { Button } from 'react-bootstrap'

export default class HeroComponent extends Component {
  render() {
    return (
      <div className='bg-warning tinggi'>
        <h1 className='nama'>Muhammad Nur Yaqut Abdul Ghani</h1>
        <h3>FullStack Developer</h3>
        <Button variant="dark">Download My CV</Button>


      </div>
    )
  }
}

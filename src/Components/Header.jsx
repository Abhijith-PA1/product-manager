import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.vhv.rs/dpng/d/607-6074077_transparent-product-manager-icon-hd-png-download.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Product Manager App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

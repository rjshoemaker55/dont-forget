import React from 'react';
import { Navbar } from 'react-bootstrap';

function Nav() {
    return (
      <>
			<Navbar bg="dark" variant="dark" className="justify-content-center">
				<Navbar.Brand href="/">
					{" Don't Forget! "}
				</Navbar.Brand>
			</Navbar>
		</>
  )
}

export default Nav
import { FC } from 'react'
import Link from 'next/link'
import { Navbar, Nav, Container } from 'react-bootstrap'

type Props = {}

export const Header: FC<Props> = () => {
  return (
    <>
      <header>
        <Container>
          <Navbar variant="dark">
            <Navbar.Brand>
              <Link href="/" passHref>
                <Nav.Link>Hokusai</Nav.Link>
              </Link>
            </Navbar.Brand>
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/bio" passHref>
                <Nav.Link>Bio</Nav.Link>
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </header>
    </>
  )
}

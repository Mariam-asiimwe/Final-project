import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useContext } from 'react';
import RecipeContext from '../Context/recipeContext';



function RecipeNavbar() {
  const ctx = useContext(RecipeContext)
  const [searchTerm, setSearchTerm] = useState("")
  let apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=0639710c&app_key=e94e7c998f0107fb2b6478641c6d762d&q="
  async function getRecipes(term) {
    let result = await fetch(apiUrl + term)
    let data = await result.json()
    console.log(data.hits)
    //need to add the search result to a global state context


    //refer to react context API

    ctx.setRecipes(data.hits.slice(0, 6))
  }
  function handleSubmit(e) {
    e.preventDefault()
    getRecipes(searchTerm)
    setSearchTerm("");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Healthy Eating</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <NavDropdown title="Select recipe type" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> Omnivorous
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Vegan/ Vegetarian
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Pescatarian
              </NavDropdown.Item>
            </NavDropdown>
<<<<<<< Updated upstream
=======
            <Nav.Link href="#" disabled>
            
            </Nav.Link>
>>>>>>> Stashed changes
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default RecipeNavbar;

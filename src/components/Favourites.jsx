import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavAction } from "../redux/actions";

const Favourites = () => {
  const goHome = useNavigate();

  const favContent = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3 d-flex justify-content-between">
            <h1>Favourites Companies</h1>
            <Button className="my-3" onClick={() => goHome("/")}>
              Home
            </Button>
          </Col>
          <Col xs={12} className="mx-auto">
            <ul style={{ listStyle: "none" }}>
              {favContent.map((company, i) => (
                <li
                  key={i}
                  className="my-3 p-3"
                  style={{ border: "1px solid #00000033", borderRadius: 4 }}
                >
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() => {
                      dispatch(removeFromFavAction(i));
                    }}
                  >
                    <i className="bi bi-heartbreak"></i>
                  </Button>
                  <Link to={`/${company}`}>{company}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Favourites;

import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={5}>
          <Button
            className="mr-2"
            onClick={() => {
              console.log("Dispatched!");
              dispatch(addToFavAction(data.company_name));
            }}
          >
            <i className="bi bi-heart my-1"></i>
          </Button>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={7}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Job;

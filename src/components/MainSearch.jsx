import { useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import FavouritesIndicator from "./FavouritesIndicator";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const availableJobs = useSelector((state) => state.jobs.results);
  const hasFetchError = useSelector((state) => state.jobs.hasError);
  const fetchErrorMessage = useSelector((state) => state.jobs.shownError);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const hasDefault = useSelector((state) => state.jobs.default);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    dispatch(getJobsAction(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-between">
          <h1>Remote Jobs Search</h1>
          <FavouritesIndicator />
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading && (
            <div className="text-center mt-5">
              <Spinner
                className="mx-auto"
                animation="border"
                variant="primary"
              />
            </div>
          )}
          {hasFetchError && (
            <Alert variant="danger">
              {fetchErrorMessage
                ? fetchErrorMessage
                : "Sorry, something went wrong while trying to fetch jobs"}
            </Alert>
          )}
          {availableJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
          {!hasDefault & (availableJobs.length === 0) ? (
            <Alert className="mt-2" variant="warning">
              We're sorry, it seems there are no jobs that match your search.
            </Alert>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

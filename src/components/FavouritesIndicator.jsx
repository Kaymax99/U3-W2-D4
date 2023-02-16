import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavouritesIndicator = () => {
  const navigate = useNavigate();
  const favLength = useSelector((state) => state.favourites.content.length);

  return (
    <Button className="my-3" onClick={() => navigate("/favourites")}>
      <i className="bi bi-heart-fill"></i>
      <span className="ml-1">{favLength}</span>
    </Button>
  );
};

export default FavouritesIndicator;

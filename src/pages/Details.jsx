import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectDetails } from "../store/details/detailsSelectors";
import { useEffect } from "react";
import {
  clearDetails,
  loadCountryByName,
} from "../store/details/detailsActions";

export const Details = () => {
  const { name } = useParams();
  const { currentCountry, error, status } = useSelector(selectDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading ...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};

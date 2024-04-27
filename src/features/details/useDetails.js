import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, loadCountryByName, selectDetails } from "./detailsSlice";

export const useDetails = (name) => {
  const { currentCountry, error, status } = useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return { currentCountry, error, status };
};

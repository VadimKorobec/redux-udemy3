import { useDispatch, useSelector } from "react-redux";
import { loadNeighborsByBorder, selectNeighbors } from "./detailsSlice";
import { useEffect } from "react";

export const useNeighbors = (borders = []) => {
  const neighbors = useSelector(selectNeighbors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [dispatch, borders]);

  return neighbors;
};

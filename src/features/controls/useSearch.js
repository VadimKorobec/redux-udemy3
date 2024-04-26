import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "./controlsSlice";

export const useSearch = () => {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};

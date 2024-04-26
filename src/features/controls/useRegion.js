import { useDispatch, useSelector } from "react-redux";
import { selectRegion, setRegion } from "./controlsSlice";

export const useRegion = () => {
  const region = useSelector(selectRegion);
  const dispatch = useDispatch();

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ""));
  };

  return [region, handleSelect];
};

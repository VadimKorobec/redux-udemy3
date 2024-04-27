import { Spinner } from "../../components/Spinner";
import { Info } from "./Info";
import { useDetails } from "./useDetails";

export const CountryDetails = ({ name, navigate }) => {
  const { status, error, currentCountry } = useDetails(name);
  return (
    <>
      {status === "loading" && <Spinner />}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

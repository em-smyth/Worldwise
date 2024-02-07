import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import supabase from "../services/supabase";

const CitiesContext = createContext();

const initalState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unkown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initalState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      const { data: cities, error } = await supabase.from("cities").select("*");

      if (!error) {
        dispatch({ type: "cities/loaded", payload: cities });
      } else {
        dispatch({
          type: "rejected",
          payload: error,
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(async function getCity(id) {
    // if (Number(id) === currentCity?.id) return;

    dispatch({ type: "loading" });
    const { data: city, error } = await supabase
      .from("cities")
      .select("*")
      .eq("id", id);

    if (!error) {
      dispatch({ type: "city/loaded", payload: city[0] });
    } else {
      dispatch({
        type: "rejected",
        payload: error,
      });
    }
  }, []);

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    const { error } = await supabase.from("cities").insert([newCity]);

    if (!error) {
      dispatch({ type: "city/created", payload: newCity });
    } else {
      dispatch({
        type: "rejected",
        payload: error,
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    const { error } = await supabase.from("cities").delete().eq("id", id);

    if (!error) {
      dispatch({ type: "city/deleted", payload: id });
    } else {
      dispatch({
        type: "rejected",
        payload: error,
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CityProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };

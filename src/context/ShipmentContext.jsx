import { useEffect, createContext, useReducer } from "react";

//Initialize userContext
export const shipContext = createContext({
  shipmentData: {},
  setShipmentData: () => null,
});

//Object for All Reducer Actions Type.
const SHIP_ACTION_TYPE = {
  SET_SHIP_DATA: "SET_SHIP_DATA",
};

//Reducer Function.
const shipmentReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHIP_ACTION_TYPE.SET_SHIP_DATA:
      return { ...state, shipmentData: payload };
    default:
      throw new Error(`Unknown Type ${type} in Shipment Reducer`);
  }
};

//Reducer Initial State.
const INITIAL_STATE = {
  shipmentData: {},
};

export const ShipmentProvider = ({ children }) => {
  // Init Reducer Hook for state management.
  const [state, dispatch] = useReducer(shipmentReducer, INITIAL_STATE);
  const { shipmentData } = state;

  //Shipment Setter
  const setShipmentData = (shipment) => {
    const action = {
      type: SHIP_ACTION_TYPE.SET_SHIP_DATA,
      payload: shipment,
    };
    dispatch(action);
  };

  //Fetching Shipment Data from API
  useEffect(() => {
    const getShipData = async () => {
      try {
        const response = await fetch(
          "https://tracking.bosta.co/shipments/track/7234258"
        );
        const resData = await response.json();
        setShipmentData(resData);
      } catch (error) {
        console.log(error);
      }
    };
    getShipData();
  }, []);

  // All Values pass to all children of the Provider using Context.
  const value = { shipmentData };

  return <shipContext.Provider value={value}>{children}</shipContext.Provider>;
};

export default ShipmentProvider;

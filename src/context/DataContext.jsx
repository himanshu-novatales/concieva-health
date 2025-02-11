import axios from "axios";
import { createContext, useEffect, useState } from "react";
import ServiceData from "../data";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [data, setData] = useState([]);
//   const getData = async () => {
//     const result = await axios.get("data.json");
//     if (result) {
//       setData(result.data);
//     } else {
//       console.log("Error");
//     }
//   };

  const values = {
    data,
  };
  useEffect(() => {
    setData(ServiceData)
    console.log("Context is running succesfully")
  }, []);
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
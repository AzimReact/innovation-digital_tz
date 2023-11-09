import axios from "axios";
import {transformData} from "../utils/transformData";

export function fetchData(preData,setData) {
  axios
    .get("https://dpg.gg/test/calendar.json")
    .then((res) => {
      transformData(preData,res.data)
      setData(preData);
    });
};



import axios from "axios";

const url = "http://universities.hipolabs.com/search?country=Australia";

export const fetchData = () => axios.get(url);

import axios from "axios";

const getTodo = async () => {
  const { data } = axios.get("");

  return data;
};

export { getTodo };

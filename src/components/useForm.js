import { useState } from "react";

const useForm = submitCalback => {
  const [data, setData] = useState({});

  const reset = () => setData("");

  const handleSubmit = e => {
    e.preventDefault();
    submitCalback();
    reset();
  };

  const handleChange = e => {
    e.persist();
    setData(data => ({ ...data, [e.target.name]: e.target.value }));
  };

  return [data, handleChange, handleSubmit];
};

export default useForm;

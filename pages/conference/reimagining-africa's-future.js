/* eslint-disable @next/next/no-img-element */
// rafce

import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../components/Auth-Components/Button";
import learnersService from "../services/LearnersService";

const Reimagine = () => {
  const [data, setData] = useState({ name: "", email: "", city: "" });

  return <h1>Register</h1>;
};

export default Reimagine;

'use client'

import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const FetchApi = () => {

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Button>apiaaa</Button>
    </>
  );
};

export default FetchApi;

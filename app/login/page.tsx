"use client";

import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <>
      <Box sx={{ margin: "20px auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" color="skyblue" sx={{marginBottom: "10px"}}>pj-shift-manager</Typography>

            <TextField
              id="email"
              label="メールアドレス"
              variant="outlined"
              sx={{ margin: "10px", width: "150%" }}
              {...register("email", { required: true })}
              error = {!!errors.email}
            />
            {errors.email && (
              <div style={{ color: "red" }}>入力が必須の項目です</div>
            )}
            <br></br>
            <TextField
              id="password"
              label="パスワード"
              variant="outlined"
              sx={{ margin: "10px", width: "150%" }}
              {...register("password", { required: true })}
              error = {!!errors.password}
            />
            {errors.password && (
              <div style={{ color: "red" }}>入力が必須の項目です</div>
            )}
            <br></br>
            <Button
              variant="outlined"
              type="submit"
              sx={{ margin: "10px", width: "150%" }}
            >
              ログイン
            </Button>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default Login;

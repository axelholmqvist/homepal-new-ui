import { profile } from "@data/profile";

import Head from "next/head";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  AppBar,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import Button from "@components/atoms/Button";

import Icon from "@components/atoms/Icon";
import { useState } from "react";

import Logotype from "@assets/logotypes/Logotype";

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push("/insight-studio");
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Logga in | Homepal</title>
      </Head>
      <AppBar
        position="fixed"
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "128px" }}>
            <Logotype />
          </Box>
        </Box>
      </AppBar>
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          bgcolor: "background.paper",
          pt: 16,
        }}
      >
        <Box sx={{ width: "520px", p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Logga in på Homepal
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              "& .MuiTextField-root:not(:last-child)": { mr: 1 },
            }}
          >
            <TextField
              label="Email"
              defaultValue={profile.email}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={profile.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <Icon name="VisibilityOff" />
                      ) : (
                        <Icon name="Visibility" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <LoadingButton
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
              onClick={handleLogin}
              loading={isLoading}
              loadingPosition="start"
            >
              {isLoading ? "Loggar in..." : "Logga in"}
            </LoadingButton>
            <Button
              variant="contained"
              fullWidth
              size="large"
              color="black"
              startIcon={<Icon name="Window" />}
              sx={{ mt: 2 }}
            >
              Logga in med Microsoft
            </Button>
            <Button variant="text" fullWidth size="large" sx={{ mt: 2 }}>
              Återställ lösenord
            </Button>
          </Box>
        </Box>
      </Box>
      <AppBar
        position="fixed"
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          p: 2,
          top: "auto",
          bottom: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography>Homepal AB</Typography>
            <Box>
              <a href="https://homepal.se">homepal.se</a>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

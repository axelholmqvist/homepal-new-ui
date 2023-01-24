import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../themes";
import Main from "@components/templates/Main";

import { useRouter } from "next/router";

import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {router.asPath === "/login" ? (
          <Component {...pageProps} />
        ) : (
          <Main>
            <Component {...pageProps} />
          </Main>
        )}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

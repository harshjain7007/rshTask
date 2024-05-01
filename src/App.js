import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import { createTheme, ThemeProvider } from "@mui/material";
function App() {

  const theme = createTheme();
  const routing = useRoutes(Router());

 
    return <ThemeProvider theme={theme}>{routing}</ThemeProvider>;
}

export default App;

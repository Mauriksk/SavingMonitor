import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { NavBar } from "./layouts/NavBar";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./pages/DashBoard";
import { NewExpenceForm } from "./pages/NewExpenceForm";
import { SideBar } from "./layouts/SideBar";
import { AddSavingsForm } from "./pages/AddSavings";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <NavBar />
            <Routes>
              <Route path="/" element={<DashBoard />}/>
              <Route path="/newExpenceForm" element={<NewExpenceForm />}/>
              <Route path="/AddSavingsForm" element={<AddSavingsForm />}/>
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

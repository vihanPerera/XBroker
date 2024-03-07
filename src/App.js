import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/layout";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
import Daily from "./scenes/daily";
import Performance from "./scenes/performance/index"
import Monthly from "./scenes/monthly";
import BreakDown from "./scenes/breakdown";
import Admin from "./scenes/admin";
import ProductPreview from "./scenes/productPreview";

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/performance" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Performance />} />
              <Route path="/daily" element={<Daily/>} />
              <Route path="/monthly" element={<Monthly/>} />
              <Route path="/breakdown" element={<BreakDown/>} />
              <Route path="/admin" element={<Admin/>} />
            </Route>
            <Route path="/product-preview" element={<ProductPreview />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

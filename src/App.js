//import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbars from "./scenes/global/Topbars"
import Dashboards from "./scenes/dashboard/index";
import SideBars from "./scenes/global/Sidebar";
import Team from "./scenes/team/index"
import Contacts from "./scenes/contacts/index"
import Invoices from "./scenes/invoices/index"
import { Routes, Route } from "react-router-dom";



function App() {
  const [theme, colorMode] = useMode();
  //const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        <div className="app">
          <SideBars /> 
          <main className="content">
           <Topbars/>
            
            <Routes>
              <Route path="/" element={<Dashboards />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

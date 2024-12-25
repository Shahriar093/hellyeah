import LoginForm from "./components/Form";
import GetServices from "./components/GetServices";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [cmp, setCmp] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<LoginForm />} />
            <Route exact path="/getservices" element={<GetServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

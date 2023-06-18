import React from "react";
import ReactDOM from 'react-dom';
import {Navigate} from "./navigate.js"
import {About} from "./aboutme.js"
import {Home} from "./home.js"
import {Contact} from "./contactme.js"
import {Gallery} from "./gallery.js"

const App = () => {
return (
  <>
    <Routes>
      <Route path="/"element={<>Home</>}></Route>
      <Route path="/"element={<>Navigate</>}></Route>
      <Route path="/aboutme"element={<>About</>}></Route>
      <Route path="/contact"element={<>Contact</>}></Route>
      <Route path="/gallery"element={<>Gallery</>}></Route>
    </Routes>
  </>
)
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <HashRouter>
      <App />
    </HashRouter>

  </>

);
import { useState } from "react";
import Router from "./Router/Router";

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Router />
    </>
  );
}

export default App;

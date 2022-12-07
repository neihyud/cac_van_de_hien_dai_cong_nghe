import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthorDetails from "./pages/AuthorDetails";
import BookDetails from "./pages/BookDetails";
import DefaultLayout from "./Layout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/authordetails"
            element={
              <DefaultLayout>
                <AuthorDetails />
              </DefaultLayout>
            }
          />
          <Route
            path="/bookdetails"
            element={
              <DefaultLayout>
                <BookDetails />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

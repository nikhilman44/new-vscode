import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router-dom';

import Home from './components/Home/index.js';
import NotFound from './components/NotFound/index.js';
import Jobs from './components/Jobs/index.js';
import JobItemDetails from './components/JobItemDetails/index.js';
import LoginWrapper from './components/LoginWrapper/index.js';
import ProtectedRoute from './components/ProtectedRoute/index.js';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route exact path="/login" element={<LoginWrapper />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route
        exact
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/jobs/:id"
        element={
          <ProtectedRoute>
            <JobItemDetails useParams={useParams()} />
          </ProtectedRoute>
        }
      />
      <Navigate to="/not-found" />
    </Routes>
  </BrowserRouter>
);

export default App;

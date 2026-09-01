// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./components/Layout/MainLayout";
// import Watch from "./pages/Watch/Watch";

// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route
//           path="/watch/:videoId"
//           element={<Watch />}
//         />

//         <Route
//           path="/*"
//           element={<MainLayout />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import Watch from "./pages/Watch/Watch";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Video Watch Page */}
        <Route
          path="/watch/:videoId"
          element={<Watch />}
        />

        {/* Main PlayVerse App */}
        <Route
          path="/*"
          element={<MainLayout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
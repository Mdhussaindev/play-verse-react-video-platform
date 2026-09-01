// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import VideoGrid from "../VideoGrid/VideoGrid";

// import "./MainLayout.css";

// function MainLayout() {
//   return (
//     <div className="app-layout">
//       <Header />

//       <div className="app-body">
//         <Sidebar />

//         <main className="main-content">
//           <VideoGrid />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import VideoGrid from "../VideoGrid/VideoGrid";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="app-layout">

      <Header />

      <div className="app-body">

        <Sidebar />

        <main className="main-content">
          <VideoGrid />
        </main>

      </div>

    </div>
  );
}

export default MainLayout;
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-body">
        <Sidebar />

        <main className="main-content">
          <h1>Welcome to PlayVerse</h1>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
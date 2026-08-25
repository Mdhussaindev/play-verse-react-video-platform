import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <h1>Welcome to PlayVerse</h1>
      </main>
    </div>
  );
}

export default MainLayout;
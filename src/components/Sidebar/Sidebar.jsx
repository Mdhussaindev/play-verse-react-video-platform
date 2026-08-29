import {
  HomeOutlined,
  HeartOutlined,
  HistoryOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";

const mainMenu = [
  {
    label: "Home",
    icon: <HomeOutlined />,
    active: true,
  },
  {
    label: "Liked Videos",
    icon: <HeartOutlined />,
  },
  {
    label: "History",
    icon: <HistoryOutlined />,
  },
  {
    label: "My Content",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "Collection",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Subscribers",
    icon: <TeamOutlined />,
  },
];

const bottomMenu = [
  {
    label: "Support",
    icon: <QuestionCircleOutlined />,
  },
  {
    label: "Settings",
    icon: <SettingOutlined />,
  },
];

function SidebarButton({ item }) {
  return (
    <button
      type="button"
      className={`sidebar-button ${
        item.active ? "sidebar-button-active" : ""
      }`}
    >
      <span className="sidebar-button-icon">
        {item.icon}
      </span>

      <span className="sidebar-button-text">
        {item.label}
      </span>
    </button>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-main-menu">
        {mainMenu.map((item) => (
          <SidebarButton
            key={item.label}
            item={item}
          />
        ))}
      </nav>

      <nav className="sidebar-bottom-menu">
        {bottomMenu.map((item) => (
          <SidebarButton
            key={item.label}
            item={item}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
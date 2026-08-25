import {
  HomeOutlined,
  HeartOutlined,
  HistoryOutlined,
  VideoCameraOutlined,
  FolderOutlined,
  UsergroupAddOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";

const topMenu = [
  {
    label: "Home",
    icon: <HomeOutlined />,
    active: true,
  },
  {
    label: "Liked videos",
    icon: <HeartOutlined />,
  },
  {
    label: "History",
    icon: <HistoryOutlined />,
  },
];

const middleMenu = [
  {
    label: "My content",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "Collections",
    icon: <FolderOutlined />,
  },
  {
    label: "Subscribers",
    icon: <UsergroupAddOutlined />,
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

function SidebarItem({ item }) {
  return (
    <button
      className={`sidebar-item ${item.active ? "active" : ""}`}
      type="button"
    >
      <span className="sidebar-icon">{item.icon}</span>
      <span className="sidebar-label">{item.label}</span>
    </button>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-navigation">
        <div className="sidebar-menu">
          {topMenu.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <div className="sidebar-divider" />

        <div className="sidebar-menu">
          {middleMenu.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-divider" />

        <div className="sidebar-menu">
          {bottomMenu.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
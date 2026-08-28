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

const menuItems = [
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

const bottomItems = [
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
      type="button"
      className={`sidebar-item ${item.active ? "active" : ""}`}
    >
      <span className="sidebar-icon">
        {item.icon}
      </span>

      <span className="sidebar-label">
        {item.label}
      </span>
    </button>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-menu">
          {bottomItems.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
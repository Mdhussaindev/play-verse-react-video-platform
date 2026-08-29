import VideoCard from "../VideoCard/VideoCard";
import "./VideoGrid.css";

const videos = [
  {
    id: 1,
    title: "Complete React JS Roadmap for Beginners",
    channel: "Hussain Khan",
    views: "125K Views",
    date: "2 days ago",
    duration: "20:30",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 2,
    title: "Build a Modern Portfolio Website with React",
    channel: "Hussain Khan",
    views: "98K Views",
    date: "3 days ago",
     duration: "18:42",
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 3,
    title: "JavaScript Array Methods You Must Know",
    channel: "Hussain Khan",
    views: "210K Views",
    date: "5 days ago",
     duration: "14:26",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 4,
    title: "HTML & CSS Full Website From Scratch",
    channel: "Hussain Khan",
    views: "175K Views",
    date: "1 week ago",
      duration: "32:15",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 5,
    title: "Master CSS Flexbox in 30 Minutes",
    channel: "Hussain Khan",
    views: "86K Views",
    date: "1 week ago",
     duration: "27:48",
    thumbnail:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 6,
    title: "CSS Grid Layout Complete Tutorial",
    channel: "Hussain Khan",
    views: "72K Views",
    date: "8 days ago",
    duration: "21:09",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 7,
    title: "React Hooks Explained — useState & useEffect",
    channel: "Hussain Khan",
    views: "154K Views",
    date: "10 days ago",
     duration: "24:37",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 8,
    title: "Build Your First JavaScript Project",
    channel: "Hussain Khan",
    views: "63K Views",
    date: "12 days ago",
    duration: "16:52",
    thumbnail:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 9,
    title: "Git & GitHub Complete Guide for Developers",
    channel: "Hussain Khan",
    views: "119K Views",
    date: "2 weeks ago",
    duration: "29:41",
    thumbnail:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 10,
    title: "How to Build Responsive Websites",
    channel: "Hussain Khan",
    views: "91K Views",
    date: "2 weeks ago",
    duration: "19:23",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 11,
    title: "React Router Complete Tutorial",
    channel: "Hussain Khan",
    views: "104K Views",
    date: "3 weeks ago",
    duration: "26:18",
    thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 12,
    title: "Frontend Developer Skills You Need in 2026",
    channel: "Hussain Khan",
    views: "240K Views",
    date: "3 weeks ago",
    duration: "34:55",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 13,
    title: "Build a Professional Dashboard UI",
    channel: "Hussain Khan",
    views: "78K Views",
    date: "1 month ago",
    duration: "22:44",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 14,
    title: "Learn APIs in JavaScript Step by Step",
    channel: "Hussain Khan",
    views: "132K Views",
    date: "1 month ago",
    duration: "31:27",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 15,
    title: "LocalStorage in JavaScript Explained",
    channel: "Hussain Khan",
    views: "69K Views",
    date: "1 month ago",
    duration: "17:36",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 16,
    title: "How I Build React Projects From Scratch",
    channel: "Hussain Khan",
    views: "188K Views",
    date: "2 months ago",
    duration: "28:12",
    thumbnail:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85",
  },
];

function VideoGrid() {
  return (
    <section className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </section>
  );
}

export default VideoGrid;
import VideoCard from "../VideoCard/VideoCard";
import "./VideoGrid.css";

const videos = [
  {
    id: 1,
    title: "How to Learn React | Complete Roadmap",
    channel: "Hussain Khan",
    views: "100K Views",
    date: "18 hours ago",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    title: "How much I made with 70M views",
    channel: "Arman Ros",
    views: "70K Views",
    date: "18 hours ago",
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 3,
    title: "Deno just got 2M npm packages",
    channel: "Arman Ros",
    views: "100K Views",
    date: "18 hours ago",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 4,
    title: "Best way to learn Socket IO",
    channel: "Arman Ros",
    views: "100K Views",
    date: "18 hours ago",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://i.pravatar.cc/100?img=14",
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
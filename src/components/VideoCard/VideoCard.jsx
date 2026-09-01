import "./VideoCard.css";

const profileImage =
  "https://i.pravatar.cc/100?img=12";

function VideoCard({ video }) {
  return (
    <article className="video-card">

      {/* Thumbnail */}
      <div className="video-thumbnail-wrapper">

        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumbnail"
        />

        {/* Video Duration - ALWAYS VISIBLE */}
        <span className="video-duration">
          {video.duration}
        </span>

      </div>

      {/* Video Information */}
      <div className="video-info">

        {/* Channel Avatar */}
        <img
          src={profileImage}
          alt="Hussain Khan"
          className="video-avatar"
        />

        <div className="video-details">

          {/* Title */}
          <h3>{video.title}</h3>

          {/* Channel */}
          <p className="video-channel">
            {video.channel}
          </p>

          {/* Views + Upload Time */}
          <p className="video-meta">
            <span>{video.views}</span>
            <span className="meta-dot">•</span>
            <span>{video.date}</span>
          </p>

        </div>
      </div>

    </article>
  );
}

export default VideoCard;
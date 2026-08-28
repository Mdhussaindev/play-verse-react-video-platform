import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div className="video-thumbnail-wrapper">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumbnail"
        />
      </div>

      <div className="video-info">
        <img
          src={video.avatar}
          alt={video.channel}
          className="video-avatar"
        />

        <div className="video-details">
          <h3>{video.title}</h3>

          <p className="video-channel">
            {video.channel}
          </p>

          <p className="video-meta">
            {video.views}
            <span>•</span>
            {video.date}
          </p>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;
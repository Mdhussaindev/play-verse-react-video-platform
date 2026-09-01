import { useParams, useNavigate } from "react-router-dom";
import { videos } from "../../data/videos";
import "./Watch.css";

function Watch() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const video = videos.find(
    (item) => item.id === Number(videoId)
  );

  if (!video) {
    return (
      <div className="watch-not-found">
        <h1>Video Not Found</h1>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="watch-page">

      <button
        className="watch-back"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="watch-player">

        <video
          className="watch-video"
          controls
          autoPlay
          poster={video.thumbnail}
          preload="metadata"
        >
          <source
            src={video.videoUrl}
            type="video/mp4"
          />

          Your browser does not support video playback.
        </video>

      </div>

      <div className="watch-info">

        <h1>{video.title}</h1>

        <div className="watch-channel-row">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt={video.channel}
          />

          <div>
            <h3>{video.channel}</h3>

            <p>
              {video.views} • {video.date}
            </p>
          </div>

        </div>

        <div className="watch-description">
          {video.description}
        </div>

      </div>

    </div>
  );
}

export default Watch;
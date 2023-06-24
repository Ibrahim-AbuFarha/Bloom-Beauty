import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubePlayer = ({ apiKey, videoId }) => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}`
        );
        const { data } = response;
        const videoUrl = data.items[0].player.embedHtml;
        setVideoUrl(videoUrl);
      } catch (error) {
        console.error("Error fetching YouTube video:", error);
      }
    };

    fetchVideoUrl();
  }, [apiKey, videoId]);

  return (
    <div className="youtube-section ">
      {videoUrl && <div dangerouslySetInnerHTML={{ __html: videoUrl }} />}
    </div>
  );
};

export default YouTubePlayer;

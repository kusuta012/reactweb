// CurrentlyPlaying.js
import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const CurrentlyPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await spotifyApi.getMyCurrentPlayingTrack();
        setCurrentTrack(response.item);
      } catch (error) {
        console.error('Error fetching currently playing track:', error);
      }
    };

    const interval = setInterval(fetchCurrentTrack, 5000); // Refresh every 5 seconds
    fetchCurrentTrack(); // Fetch initially

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {currentTrack ? (
        <div>
          <h2>Currently Playing:</h2>
          <p>{currentTrack.name} - {currentTrack.artists[0].name}</p>
        </div>
      ) : (
        <p>No track currently playing</p>
      )}
    </div>
  );
};

export default CurrentlyPlaying;

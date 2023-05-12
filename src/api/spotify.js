const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;
const token_endpoint = `https://accounts.spotify.com/api/token`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;
const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

const get = (path, headers) =>
  fetch(path, headers).then((r) =>
    r.status === 200 ? r.json() : JSON.stringify({})
  );

const getAccessToken = async () => {
  const response = await fetch(token_endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ` + btoa(`${client_id}:${client_secret}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }).toString(),
  });

  return await response.json();
};

export const getCurrentPlaying = async () => {
  const { access_token } = await getAccessToken();
  return get(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  return get(top_tracks_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

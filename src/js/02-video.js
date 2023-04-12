import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
});

const TIME_DATA_NAME = 'videoplayer-current-time';

if (localStorage.getItem(TIME_DATA_NAME)) {
  const currentTime = JSON.parse(localStorage.getItem(TIME_DATA_NAME));
  player.setCurrentTime(currentTime.seconds);
}

const onPlay = data => {
  localStorage.setItem(TIME_DATA_NAME, JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));

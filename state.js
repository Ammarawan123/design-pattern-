const trafficLightStates = {
  Red: {
    name: 'red',
    next: () => trafficLightStates.Green,
    action: () => console.log('stop')
  },
  Green: {
    name: 'green',
    next: () => trafficLightStates.Yellow,
    action: () => console.log('go')
  },
  Yellow: {
    name: 'yellow',
    next: () => trafficLightStates.Red,
    action: () => console.log('slow down')
  }
};
function createTrafficLight(initialState = trafficLightStates.Red) {
  let currentState = initialState;

  return {
    getState: () => currentState.name,
    tick: () => {
      currentState.action();
      currentState = currentState.next();  
      return currentState.name;
    }
  };
}
const signal = createTrafficLight();
signal.tick(); 
signal.tick(); 
signal.tick(); 

const playerStates = {
  stop : {
    name: 'stop',
    play: () => playerStates.play,
    pause: () => { console.log('stop'); return playerStates.stop; },
    stop: () => playerStates.stop
  },
  play : {
    name: 'play',
    play: () => playerStates.play,
    pause: () => playerStates.pause,
    stop: () => playerStates.stop
  },
  pause : {
    name: 'pause',
    play: () => playerStates.play,
    pause: () => playerStates.pause,
    stop: () => playerStates.stop
  }
};

function createMediaPlayer() {
  let currentState = playerStates.stop;

  const performAction = (action) => {
    currentState = currentState[action]();
    console.log(` player state: ${currentState.name}`);
    return currentState.name;
  };

  return {
    play: () => performAction('play'),
    pause: () => performAction('pause'),
    stop: () => performAction('stop'),
    getState: () => currentState.name
  };
}

const player = createMediaPlayer();
player.play();  
player.pause();
player.play();  
player.stop();   
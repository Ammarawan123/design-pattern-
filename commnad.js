// receiver
const TV = {
    turnOn: () => console.log("tv is on"),
    turnOff: () => console.log("tv is off")
};

//commands
const turnOnCommand = () => TV.turnOn();
const turnOffCommand = () => TV.turnOff();

//invoker
function pressButton(command) {
    command();
}

// client
pressButton(turnOnCommand);
pressButton(turnOffCommand);
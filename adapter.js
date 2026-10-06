
function oldThermometer() {
  return 98.6; 
}

function displayTemperature(celsius) {
  console.log(`Temperature: ${celsius}°C`);
}



function adapter(fahrenheitFn) {
  return () => (fahrenheitFn() - 32) * (5 / 9); 
}

const getCelsius = adapter(oldThermometer); 

displayTemperature(getCelsius()); 




function parseXML() {
  return {
    root: {
      user: {
        fullName: "Ammar Khan",
        userAge: "21"
      }
    }
  };
}
function displayUser(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}
function xmlAdapter(parseFn) {
  return () => {
    const raw = parseFn(); 
    return {
      name: raw.root.user.fullName, 
      age: Number(raw.root.user.userAge) 
    };
  };
}
const getUser = xmlAdapter(parseXML); 

displayUser(getUser()); 
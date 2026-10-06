
function createThermometer() {
  let observers = []       
  let temperature = 0

  return {
    subscribe: (fn) => {
      observers.push(fn)
    },
    setTemperature: (newTemp) => {
      temperature = newTemp
      observers.forEach(fn => fn(temperature)) 
    }
  }
}
const displayObserver = (temp) => console.log(` Display: ${temp}°C`)

const alertObserver = (temp) => {
  if (temp > 30) console.log(` Alert: Too hot! (${temp}°C)`)
}

const thermometer = createThermometer()

thermometer.subscribe(displayObserver)
thermometer.subscribe(alertObserver)

thermometer.setTemperature(25)
thermometer.setTemperature(35)

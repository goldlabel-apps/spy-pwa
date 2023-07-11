import Spy from "./Spy"
import {CustomTooltip} from "./components/CustomTooltip"
import TempChart from "./components/TempChart"
import LightChart from "./components/LightChart"
import Time from "./components/Time"
import CurrentTime from "./components/CurrentTime"
import Temperature from "./components/Temperature"
import Humidity from "./components/Humidity"
import HumidityChart from "./components/HumidityChart"
import Soil from "./components/Soil"
import Light from "./components/Light"
import Header from "./components/Header"
import {store} from "../"

const makeHistoryDisplay = () => {
  const {historyNum} = store.getState()
  if (historyNum === 12) return `1 Hour`
  if (historyNum === 144) return `½ Day`
  if (historyNum === 288) return `1 Day`
  if (historyNum === 864) return `3 Days`
  if (historyNum === 2016) return `1 Week`
  return ""
}

export {
  Spy,
  makeHistoryDisplay,
  TempChart,
  CustomTooltip,
  LightChart,
  CurrentTime,
  Temperature,
  Humidity,
  HumidityChart,
  Soil,
  Light,
  Time,
  Header,
}
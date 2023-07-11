// import "./styles.css";
import React from "react";
import moment from "moment"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  usePwaSelect,
  selectPWA,
  Font,
} from "../../"
import {CustomTooltip} from "../"

const XAxisTick = (props:any) => {
    const {x, y, payload} = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={5} y={10}>
                  {payload.value}
            </text>
        </g>
    )
}

export default function TempChart() {
  const pwa = usePwaSelect(selectPWA)
  const {lilly, historyNum} = pwa
  const maxTemp = 40
  const overTime: Array<any> = []
  for(let i = 0; i<lilly.length; i++){
    if (i<historyNum){
      overTime.push({
        timeAgo: moment(lilly[i].timestamp).add(2, "hours").fromNow(),
        temp: lilly[i].readings.temperature < maxTemp ? lilly[i].readings.temperature : maxTemp,
      })
    }
  }
  let xTickInterval = 288
  if (historyNum === 12) xTickInterval = 6
  if (historyNum === 144) xTickInterval = 90
  if (historyNum === 288) xTickInterval = 175
  if (historyNum === 864) xTickInterval = 500
  if (historyNum === 2016) xTickInterval = 1200

  return (<>
    <div style={{ width: '100%', height: 175 }}>          
      <ResponsiveContainer >
        <AreaChart          
          data={overTime}>
            <Tooltip content={<CustomTooltip 
                                active={undefined} 
                                payload={undefined} 
                                label={undefined} />}/>
          
          <XAxis 
            dataKey="timeAgo" 
            interval={xTickInterval}
            tick={<XAxisTick />}
          />

          <YAxis 
            stroke="#16530A" 
            tickFormatter={(tick) => {
              return `${tick}°C`
            }}
          />
        
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#3EDA1F"
            fill="#49ff24"
            fillOpacity={"100%"}
            activeDot={{ r: 4 }}

          />
          <CartesianGrid strokeDasharray="3 3" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </>)
}

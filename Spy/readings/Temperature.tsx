import React from "react"
import moment from "moment"
import {
  Box,
  CardHeader,
  Collapse,
  CardActionArea,
  CardContent,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  toggleKey,
} from "../../"
import {
  TempChart,
} from "../"

export default function Temperature() {
  const dispatch = usePwaDispatch()
  const bitWhite = "rgba(255,255,255,0.5)"
  const pwa = usePwaSelect(selectPWA)
  const {lilly, tempOpen} = pwa
  const currentTemp = lilly[0].readings.temperature
  const tempOverTime: Array<any> = []
  for(let i=0; i<lilly.length; i++){
    // if (i > 10) break
    tempOverTime.push({
      name: moment(lilly[i].timestamp).format(""),
      timestamp: lilly[i].timestamp,
      temperature: lilly[i].readings.temperature
    })
  }
  
  return (<> 
    <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(toggleKey("tempOpen", !tempOpen))
          }}
        >
    <CardHeader 
      avatar={<Icon icon="temp" color="warning"/>}
      title={<Font variant="subheader" color={bitWhite}>
                  Temp
              </Font>}
      action={<Box sx={{m:1}}><Font variant="giant" color="white">
                {Math.floor(currentTemp*10)/10} °C
              </Font></Box>}/>
      

              </CardActionArea>
      <Collapse in={tempOpen} timeout="auto" unmountOnExit>
          <CardContent>
            <TempChart />
          </CardContent>
      </Collapse>


  </>)
  
}

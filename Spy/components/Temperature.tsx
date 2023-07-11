import React from "react"
import moment from "moment"
import {
  Alert,
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
  const warningTemp = 40
  let warning: any = null
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {lilly, tempOpen, receiving} = pwa
  const currentTemp = lilly[0].readings.temperature
  if (!currentTemp) return null
  const tempOverTime: Array<any> = []
  for(let i=0; i<lilly.length; i++){
    // if (i === 0) {
    //   if (lilly[i].readings.temperature > warningTemp){
    //     warning = "Check Temperature. Extreme temperature readings can be caused by the Growspy being in direct sunlight"
    //   }
    // }
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
          avatar={<>
                    <Icon icon="temp"/>
                    {warning ? <Icon icon="warning"/> : null}
                  </>}
          title={<Font variant="subheader" color="black">
                    Temperature
                  </Font>}
                
          action={<Box sx={{m:1}}>
                    <Font variant="giant">
                      {receiving ? <>
                        {Math.floor(currentTemp*10)/10} °C
                      </> : <Icon icon="battery" /> }
                    
                  </Font></Box>}
        />
      

      </CardActionArea>
      <Collapse in={tempOpen} timeout="auto" unmountOnExit>
          <CardContent>
            <TempChart />
            
            {warning ? <Alert 
              severity={ "error" }>
                <Font>
                  { warning }
                </Font>
            </Alert> : null }
            
          </CardContent>
      </Collapse>


  </>)
  
}

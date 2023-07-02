import React from "react"
import {
  Box,
  CardHeader,
  CardActionArea,
  CardContent,
  Collapse,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  toggleKey,
} from "../../"
import {HumidityChart} from "../"

export default function Humidity() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {lilly, humidityOpen} = pwa
  // console.log("humidityOpen", humidityOpen)

  const currentHumidity = lilly[0].readings.humidity
  const bitWhite = "rgba(255,255,255,0.5)"
  return (<>
      <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(toggleKey("humidityOpen", !humidityOpen))
          }}
        >

    <CardHeader 
        avatar={<Icon icon="humidity" color="warning" />}
        title={<Font variant="subheader" color={bitWhite}>
                Humidity
            </Font>}
        action={<Box sx={{m:1}}>
                    <Font variant="giant" color="white">
                        {Math.floor(currentHumidity)}%
                    </Font>
                </Box>}/>
    </CardActionArea>

      <Collapse in={humidityOpen} timeout="auto" unmountOnExit>
          <CardContent>
            <HumidityChart />
          </CardContent>
      </Collapse>

  </>)
}

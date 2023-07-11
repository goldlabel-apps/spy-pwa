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
  const {lilly, humidityOpen, receiving} = pwa
  const currentHumidity = lilly[0].readings.humidity
  if (!currentHumidity) return null
  
  return (<>
      <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(toggleKey("humidityOpen", !humidityOpen))
          }}
        >

    <CardHeader 
        avatar={<Icon icon="humidity" />}
        title={<Font variant="subheader">
                Humidity
            </Font>}
        action={<Box sx={{m:1}}>
                    <Font variant="giant">
                    {receiving ? <>
                      {Math.floor(currentHumidity)}%
                      </> : <Icon icon="battery" /> }
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

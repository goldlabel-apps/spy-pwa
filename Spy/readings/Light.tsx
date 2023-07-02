import React from "react"
import {
  Box,
  CardHeader,
  Collapse,
  CardContent,
  CardActionArea,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  selectPWA,
  usePwaDispatch,
  toggleKey,
} from "../../"
import {LightChart} from "../"

export default function Light() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {lilly, lightOpen} = pwa
  const currentLight = lilly[0].readings.light
  const bitWhite = "rgba(255,255,255,0.5)"
  const lightDarkSwitch = 1
return (<>
        <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(toggleKey("lightOpen", !lightOpen))
          }}
        >
  <CardHeader 
      avatar={<Icon icon={currentLight > lightDarkSwitch ? "light" : "dark"} color="warning" />}
      title={<Font variant="subheader" color={bitWhite}>
                {currentLight > lightDarkSwitch ? "Light" : "Dark"} 
              </Font>}
      action={<>
                {currentLight > lightDarkSwitch ? <Box sx={{m:1}}>
                    <Font variant="giant" color="white">
                          {Math.floor(currentLight)} lux
                    </Font></Box> : null} 
                </>}/>  
                </CardActionArea>
                <Collapse in={lightOpen} timeout="auto" unmountOnExit>
                    <CardContent>
                      <LightChart />
                    </CardContent>
                </Collapse>
                

  </>)
}

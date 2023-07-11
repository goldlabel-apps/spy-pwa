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
  const {lilly, lightOpen, receiving} = pwa
  const currentLight = lilly[0].readings.light
  if(!currentLight) return null
  const lightDarkSwitch = 1
  return (<>
        <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(toggleKey("lightOpen", !lightOpen))
          }}
        >
          <CardHeader 
            avatar={<Icon icon={currentLight > lightDarkSwitch ? "light" : "dark"} />}
            title={<Font variant="subheader" color="black" >
                      {currentLight > lightDarkSwitch ? "Light" : "Dark"} 
                    </Font>}
            action={<>
                      {currentLight > lightDarkSwitch ? <Box sx={{m:1}}>
                          <Font variant="giant" color="black">
                            {receiving ? <>
                              {Math.floor(currentLight)} lux
                            </> : <Icon icon="battery" /> }
                          </Font></Box> : null} 
                      </>}
          />  

        </CardActionArea>
        <Collapse in={lightOpen} timeout="auto" unmountOnExit>
            <CardContent>
              <LightChart />
            </CardContent>
        </Collapse>
  </>)
}

import React from "react"
import {
  Box,
  Collapse,
  CardActionArea,
  CardHeader,
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

export default function Soil() {
  const bitWhite = "rgba(255,255,255,0.5)"
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {lilly, soilOpen, receiving} = pwa
  let problemMessage: string|null = null
  if (!lilly[0].readings) return null
  const currentSoilA = lilly[0].readings.moisture_1
  const currentSoilB = lilly[0].readings.moisture_2
  const currentSoilC = lilly[0].readings.moisture_3
  let icon = "tick"
  if (currentSoilA < 50 && currentSoilB < 50 && currentSoilC < 50){
    icon = "warning"
    problemMessage = "Problems detected with one or more Soil Moisture sensors. Sensors can take more than 6 hours to stabalise after watering."
  }
  let valueA = `${Math.floor(currentSoilA)} %`
  let valueB = `${Math.floor(currentSoilB)} %`
  let valueC = `${Math.floor(currentSoilC)} %`

  return (<>
        <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(toggleKey("soilOpen", !soilOpen))
          }}
        >
          <CardHeader 
              avatar={<Icon icon="soil" />}
              title={<Font variant="subheader">
                        Soil
                    </Font>}
              action={<>

                  {receiving ? <>
                      <Box sx={{mr:1}}>
                        
                        <Icon icon={icon} />
                      </Box>
                      </> : <Box sx={{mr:1}}>
                              <Font variant="giant">
                               <Icon icon="battery" />
                              </Font>
                            </Box> }
                      
                    </>}
          />
        </CardActionArea>

        <Collapse in={soilOpen} timeout="auto" unmountOnExit>
          
          <CardHeader 
            title={<Font variant="subheader">
                    Moisture A
                </Font>}
            action={<Box sx={{m:1}}>
                        <Font variant="giant">
                            {valueA}
                        </Font>
                    </Box>}
          />
          
          <CardHeader 
            title={<Font variant="subheader">
                    Moisture B
                </Font>}
            action={<Box sx={{m:1}}>
                        <Font variant="giant">
                            {valueB}
                        </Font>
                    </Box>}
          />
          

          <CardHeader 
            title={<Font variant="subheader">
                    Moisture C
                </Font>}
            action={<Box sx={{m:1}}>
                        <Font variant="giant">
                            {valueC}
                        </Font>
                    </Box>}
          />

          {problemMessage ? <>
            <CardContent>
                
                  <Font color={bitWhite}>
                    {problemMessage}
                  </Font>
            </CardContent>
          </> : null}
      </Collapse>
  </>)
}

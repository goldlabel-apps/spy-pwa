import React from "react"
import {
  Box,
  Alert,
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
  const {lilly, soilOpen} = pwa
  let problemMessage: string|null = null
  const currentSoilA = lilly[0].readings.moisture_1
  const currentSoilB = lilly[0].readings.moisture_2
  const currentSoilC = lilly[0].readings.moisture_3
  let icon = "tick"
  // console.log("currentSoil",currentSoilA, currentSoilB, currentSoilC)
  if (currentSoilA < 70 || currentSoilB < 70 || currentSoilC < 70){
    icon = "warning"
    problemMessage = "Problem detected with one or more Soil Moisture sensors. Sensors can take more than 6 hours to stabalise after watering."
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
              avatar={<Icon icon="soil" color="warning" />}
              title={<Font variant="subheader" color={bitWhite}>
                        Soil
                    </Font>}
              action={<>
                      <Box sx={{mr:1}}>
                        <Icon icon={icon} color="warning" />
                      </Box>
                    </>}
          />
        </CardActionArea>

        <Collapse in={soilOpen} timeout="auto" unmountOnExit>
          {problemMessage ? <>
            <CardContent>

                <Alert
                  severity="error"
                  icon={<Icon icon={"warning"} color={"warning"}/>}
                >
                  <Font color={bitWhite}>
                    {problemMessage}
                  </Font>
                </Alert>
            </CardContent>
          </> : null}
          <CardHeader 
            title={<Font variant="subheader" color={bitWhite}>
                    Moisture A
                </Font>}
            action={<Box sx={{m:1}}>
                        <Font variant="giant" color="white">
                            {valueA}
                        </Font>
                    </Box>}
          />

          <CardHeader 
            title={<Font variant="subheader" color={bitWhite}>
                    Moisture B
                </Font>}
            action={<Box sx={{m:1}}>
                        <Font variant="giant" color="white">
                            {valueB}
                        </Font>
                    </Box>}
          />

          <CardHeader 
            title={<Font variant="subheader" color={bitWhite}>
                    Moisture C
                </Font>}
            action={<Box sx={{m:1}}>
                        <Font variant="giant" color="white">
                            {valueC}
                        </Font>
                    </Box>}
          />
      </Collapse>
  </>)
}

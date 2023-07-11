import React from "react"
import moment from "moment"
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  selectPWA,
  usePwaDispatch,
  toggleKey,
  updateHistory,
} from "../../"
import {
  makeHistoryDisplay,
} from "../../Spy"

export default function History() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {
    historyNum,
    lightOpen,
    humidityOpen,
    tempOpen,
    lilly,
  } = pwa
  if (!lilly[0]) return null
  const lastTick = lilly[0]

  const {timestamp} = lastTick
  const timeSinceLastTick = Date.now()/1000 - moment(timestamp).unix()
  let receiving = true
  if (timeSinceLastTick > 9999) receiving = false
  
  React.useEffect(() => {
    dispatch(toggleKey("receiving", receiving))
  }, [receiving, dispatch])
 

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newHistory: number,
  ) => {
    e.preventDefault()
    dispatch(updateHistory(newHistory))
    if (!lightOpen && !humidityOpen && !tempOpen){
      // console.log("open light")
      dispatch(toggleKey("lightOpen", true))
    }
  }

  return (<>
            {!receiving ?   <CardHeader 
              avatar={<Icon icon={"warning" } />}
              title={<Font variant="title" color="black">
                      Spy down :(
                    </Font>}
              subheader={<Font>
                        Last data received {moment(timestamp).add(2, "hours").fromNow()}
                      </Font>}
            /> : null }
          
            <CardHeader 
                // 
                title={<ToggleButtonGroup
                  sx={{display: "flex", flexGrow:1}}
                  size="small"
                  color="secondary"
                  value={historyNum}
                  exclusive
                  onChange={handleChange}
                  aria-label="Select Time">
                    
                  <ToggleButton 
                    sx={{flexGrow:1}}
                    value={12}>
                    <Font>
                      1 Hour
                    </Font>
                  </ToggleButton>

                  <ToggleButton 
                    sx={{flexGrow:1}}
                    value={144}>
                    <Font>
                      12 Hours
                    </Font>
                  </ToggleButton>

                  <ToggleButton 
                    sx={{flexGrow:1}}
                    value={288}>
                    <Font>
                      1 Day
                    </Font>
                  </ToggleButton>

                  <ToggleButton 
                    sx={{flexGrow:1}}
                    value={864}>
                    <Font>
                      3 Days
                    </Font>
                  </ToggleButton>

                  <ToggleButton 
                    sx={{flexGrow:1}}
                    value={2016}>
                    <Font>
                      1 Week
                    </Font>
                  </ToggleButton>

                </ToggleButtonGroup>}

                // action={<>
                //           <Box sx={{m:1}}>
                //               <Font variant="giant">
                //                 {historyDisplay}
                //               </Font></Box>
                //           </>}
              />  
  </>)
}

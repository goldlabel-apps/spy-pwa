import React from "react"
import {
  Avatar,
  Box,
  CardHeader,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectPWA,
  usePwaDispatch,
  toggleReadings,
} from "../../"
import {
  CurrentTime,
} from "../"

export default function Header() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {lightOpen, humidityOpen, soilOpen, tempOpen} = pwa
  let actionOnClick: string = "close"
  if (!lightOpen && !humidityOpen && !soilOpen && !tempOpen) actionOnClick = "open"

  return (<>
        <CardActionArea
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            if (actionOnClick === "open"){
              dispatch(toggleReadings(true))
            } else {
              dispatch(toggleReadings(false))
            }
          }}>
            
          <CardHeader 
            avatar={<Icon icon={"spy"} />}
            title={<Font variant="title"  >
                      Lilly
                    </Font>}
            subheader={<Font>
              Mellieħa, Malta
            </Font>}
            action={<><Box sx={{m:1}}>
                        <Font variant="giant"  >
                          <CurrentTime />
                        </Font>
                      </Box></>}
          />  

        </CardActionArea>
        
  </>)
}

import React from "react"
// import moment from "moment"
import {
  IconButton,
  Avatar,
  Grid,
  CardHeader,
  Card,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  usePwaDispatch,
  navigate,
  selectPWA,
} from "../"
import {
  Temperature,
  CurrentTime,
  Humidity,
  Soil,
  Light,
} from "./"

export default function Spy(props: any) {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const bitBlack = "rgba(0,0,0,0.25)"
  // const bitWhite = "rgba(255,255,255,0.5)"
  const {lilly, soilOff} = pwa
  if (!lilly) return null
  if (!lilly[0]) return null
  const {
    nickname,
  } = lilly[0]
  
  return (<>
            <Card sx={{background: bitBlack, my:1}}>
              <Grid container>
                <Grid item xs={12}>
                  <CardHeader
                    title={<Font variant="giant" color="white" >
                              {nickname} 
                            </Font>}
                    action={<>
                      <IconButton
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          dispatch(navigate("/lilly", "_self"))
                        }}>
                        <Avatar src="/jpg/cat.jpg" />
                      </IconButton>
                    </>}
                    subheader={<>
                      <Font color="white" >
                        <CurrentTime /> 
                      </Font>
                    </>}
                  /> 
                </Grid>
                <Grid item xs={12}>
                  <Light />
                  <Temperature />
                  <Humidity />
                  {!soilOff ? <Soil /> : null }
                </Grid>
              </Grid>
            </Card>
          </>)
}

/*
  {moment(lilly[0].timestamp).add(2, "hours").fromNow()}
*/
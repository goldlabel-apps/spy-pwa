import React from "react"
import {
  Card,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
} from "../"
import {
  Temperature,
  Humidity,
  Soil,
  Light,
  Time,
  Header,
} from "./"

export default function Spy(props: any) {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {lilly} = pwa
  // if (!lilly) return null
  // if (!lilly[0]) return null
  // const { nickname } = lilly[0]
  
  return (<>
            <Card sx={{background: "rgba(0,0,0,0.10)"}}>
            <Header />
              <Time />
              
              <Light />
              <Temperature />
              <Humidity />
              
              <Soil />
            </Card>
          </>)
}

/*
 <CardHeader     
  // avatar={<>
  //   <IconButton
  //     onClick={(e: React.MouseEvent) => {
  //       e.preventDefault()
  //       dispatch(toggleReadings(true))
  //     }}>
  //     <Avatar src="/jpg/cat.jpg" />
  //   </IconButton>
  // </>}
  title={<Font variant="giant">
          {nickname} 
        </Font>}
  subheader={<>
    <Font variant="subheader" >
      <CurrentTime /> 
    </Font>
  </>}
/> 
*/
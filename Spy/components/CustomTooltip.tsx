import React from "react"
import {
  Box,
} from "@mui/material"
import {
    Font,
} from "../../"

export const CustomTooltip = ({ active, payload, label }) => {
    if (!payload[0])return null
    const {value} = payload[0]
    const pl = payload[0].payload
    let suffix = ""
    const {humidity, lux, temp, timeAgo} = pl
    if (humidity) suffix = "%"
    let plus: boolean = false
    if (lux) {
      suffix = "lux"
      if(value > 9999) plus = true
    }
    if (temp) {
      suffix = "°C"
      if(value > 39) plus = true
    }
    return <>
      <Box sx={{p:1}}>
        <Font color="black">
          {plus ? "+" : null}{Math.floor(value)} {suffix}<br />
          {timeAgo}
        </Font>
      </Box>
    </>;
  }
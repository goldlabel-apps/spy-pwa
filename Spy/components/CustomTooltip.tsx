import React from "react"
import moment from "moment"

import {
    Card,
} from "@mui/material"
import {
    Font,
} from "../../"

export const CustomTooltip = ({ active, payload, label }) => {
    if (!payload[0])return null
    const {value } = payload[0]
    const pl = payload[0].payload
    let suffix = ""
    const {humidity, lux, temp} = pl
    if (humidity) suffix = "%"
    if (lux) suffix = "lux"
    if (temp) suffix = "°C"
    return <>
      <Card sx={{p:1}}>
        <Font>
          {/* {moment(timestamp).format("ddd, MMM Do h:mm a")}<br /> */}
          {value} {suffix}
          </Font>
      </Card>
    </>;
  }
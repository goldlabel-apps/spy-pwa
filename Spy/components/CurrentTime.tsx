import React, { useEffect, useState } from "react"
const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timerID)
    }
  }, [])
  return <>{currentTime.toLocaleTimeString()}</>
}

export default CurrentTime

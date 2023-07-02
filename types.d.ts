import { PaletteMode } from "@mui/material"

export type PwaReduxShape = {
  bootTime: number
  notifyer: any
  theme: any
  lilly?: any
  soilOpen: boolean
  soilOff: boolean
  lightOpen: boolean
  tempOpen: boolean
  humidityOpen: boolean
}

export type AppShellShape = {
  appData: any  
}

export type SSRShape = {
  ssrData: any
}

export type WrapperShape = {
  command?: string
  data?: any
  pageContext?: any
  location: any
}

export type MetaShape = {
  siteTitle: string
  title: string
  description: string
  siteDescription: string
  keywords: string
  url: string
  canonical: string
  image: string
  twitter: string
}

export type GatsbyShape = {
  siteUrl: string
  siteIcon: string
  siteTitle: string
  title: string
  siteDescription: string
  siteKeywords: string
  description: string
  siteImage: string
  image: string
  siteTwitter: string
  twitterUsername: string
  siteTheme: string
}

export type LocaleShape = {
  code: string
  displayName: string
  localName: string
  flag: string
}



export type ThemeShape = {
  title: string
  description?: string
  primaryColor: string
  secondaryColor: string
  font: string
  mode: PaletteMode
}

export type ImageSizeShape = {
  width: number
  height: number
}

export interface KeyValueShape {
  key: string
  value: any
}

export type PWABarShape = {
  data?: any
}


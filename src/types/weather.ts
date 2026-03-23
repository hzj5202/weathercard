export interface WeatherData {
  city: string
  temperature: number // 摄氏度
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy'
  humidity: number // 百分比
  windSpeed: number // km/h
}

<script setup lang="ts">
import type { WeatherData } from '@/types/weather';


// mock data
const weather: WeatherData = {
    city: '杭州',
    temperature: 22,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12
}

const getWeatherIcon = (condition: WeatherData['condition']) => {
    const icons = {
        sunny: '☀️',
        cloudy: '☁️',
        rainy: '🌧️',
        snowy: '❄️'
    }
    return icons[condition]
}
</script>

<template>
    <div class="weather-card">
        <h2 class="city">{{ weather.city }}</h2>
        <div class="main-info">
            <span class="icon">{{ getWeatherIcon(weather.condition) }}</span>
            <span class="temp">{{ weather.temperature }}°C</span>
        </div>
        <div class="details">
            <p>湿度: {{ weather.humidity }}%</p>
            <p>风速: {{ weather.windSpeed }} km/h</p>
            <p>天气: {{ { sunny: '晴', cloudy: '多云', rainy: '雨', snowy: '雪' }[weather.condition] }}</p>
        </div>
    </div>
</template>

<style scoped>
.weather-card {
    max-width: 320px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    color: white;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.city {
    font-size: 1.8rem;
    margin: 0 0 1rem;
    text-align: center;
}

.main-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
}

.icon {
    font-size: 3rem;
}

.temp {
    font-size: 2.5rem;
    font-weight: bold;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 1rem;
    opacity: 0.9;
}

/* 响应式：小屏优化 */
@media (max-width: 480px) {
    .weather-card {
        margin: 1rem;
        padding: 1.2rem;
    }

    .temp {
        font-size: 2rem;
    }

    .icon {
        font-size: 2.5rem;
    }
}
</style>
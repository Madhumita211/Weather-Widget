# 🌤️ Small Weather Widget

A simple and responsive Weather Widget built using React, Material UI, and a Weather API.
It allows users to search for a city and view real-time weather information in a clean and modern UI.

## 🚀 Features

### 🌍 Search weather by city name

### 🌡️ Displays:

- Temperature

- Weather condition

- Humidity

- Wind speed

### 🎨 Clean and responsive UI using Material UI

### ⚡ Fast API-based real-time data

### 📱 Mobile-friendly design

## 🛠️ Tech Stack

- React – Frontend framework

- Material UI (MUI) – UI components & styling

- Weather API – Real-time weather data

- Axios / Fetch API – API requests

## 📦 Installation
1️⃣ Clone the repository
`git clone https://github.com/your-username/weather-widget.git`
`cd weather-widget`
2️⃣ Install dependencies
`npm install`
3️⃣ Add your Weather API key

- Create a .env file in the root directory:

`REACT_APP_WEATHER_API_KEY=your_api_key_here`

#### ⚠️ Never expose your API key publicly.

4️⃣ Start the development server
npm start

App will run at:

`http://localhost:3000`

## 📁 Project Structure
weather-widget/
│
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   └── SearchBar.jsx
│   ├── App.js
│   ├── api.js
│   └── index.js
│
├── .env
├── package.json
└── README.md

## 🔌 API Integration

Example API request:

`const getWeather = async (city) => {
  const response = await fetch(
    ``https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric``
  );
  const data = await response.json();
  return data;
};`

## 🎨 UI Components Used (Material UI)

- Card

- TextField

- Button

- Typography

- Box

- Container

## 📸 Screenshots

(Add screenshots here soon)

## 🌍 Future Improvements

- 5-day weather forecast

- Weather icons with animations

- Auto-detect location

- Dark mode toggle

- Unit toggle (°C / °F)

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

Madhumita Das
- 📧 madhumita021199@gmail.com
- 🔗 GitHub: https://github.com/Madhumita211
- 🔗 LinkedIn: https://www.linkedin.com/in/madhumita-das211/

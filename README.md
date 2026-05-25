# 🌍 Smart Tour Guide

A web application that helps users discover amazing tourist attractions around the world. Search for any city and get a curated list of popular tourist destinations with detailed information.

## ✨ Features

- 🔍 **City Search**: Search for tourist attractions in any city worldwide
- 📍 **Location Details**: Get full address, coordinates, and place names
- 🗺️ **Interactive Interface**: Beautiful, user-friendly web interface
- 🚀 **Fast API**: Real-time data fetching from OpenStreetMap via GeoPy API
- 🐳 **Dockerized**: Fully containerized with Docker and Docker Compose

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Nginx
- **Backend**: Node.js, Express.js
- **API**: GeoPy for location geocoding and reverse geocoding
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git/GitHub

## 📋 Prerequisites

- Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- Git
- Node.js (for local development without Docker)

## 🚀 Quick Start with Docker

### 1. Clone the Repository
```bash
git clone https://github.com/sreekar7586/Tour-Guide.git
cd Tour-Guide
```

### 2. Build Docker Images
```bash
docker-compose build
```

### 3. Run the Application
```bash
docker-compose up
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔧 Local Development (Without Docker)

### Backend Setup
```bash
cd backend
npm install
node server.js
```
Backend runs on `http://localhost:5000`

### Frontend Setup
Simply open `frontend/index.html` in your browser or serve with a local server.

## 📁 Project Structure

```
tour-guide/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── route_optimizer.cpp
│   └── Dsa/
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   └── style.css
├── docker-compose.yml
└── README.md
```

## 🐳 Docker Configuration

### Backend Container
- **Image**: Node.js 20
- **Port**: 5000
- **Container Name**: smart-tour-backend

### Frontend Container
- **Image**: Nginx Alpine
- **Port**: 3000
- **Container Name**: smart-tour-frontend

## 🔑 API Endpoints

### GET /search
Search for tourist attractions in a city.

**Query Parameters:**
- `city` (required): City name to search for

**Example Request:**
```bash
curl "http://localhost:5000/search?city=Paris"
```

**Example Response:**
```json
{
  "city": "Paris",
  "places": [
    {
      "name": "Eiffel Tower",
      "address": "...",
      "lat": 48.8584,
      "lon": 2.2945
    }
  ]
}
```

## 🔐 Security Note

The API key is currently hardcoded in `backend/server.js`. For production use, move it to a `.env` file:

```bash
# Create .env in backend folder
API_KEY=your_api_key_here
```

Then update `server.js`:
```javascript
const API_KEY = process.env.API_KEY;
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sreekar**
- GitHub: [@sreekar7586](https://github.com/sreekar7586)

## 🎯 Future Enhancements

- [ ] Add map visualization with Leaflet.js
- [ ] Implement user authentication
- [ ] Save favorite attractions
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Advanced filtering options

## 🆘 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use, update `docker-compose.yml`:
```yaml
ports:
  - "3001:80"  # Use 3001 instead of 3000
  - "5001:5000"  # Use 5001 instead of 5000
```

### Docker Container Not Starting
```bash
# Check logs
docker-compose logs -f

# Rebuild containers
docker-compose down
docker-compose build --no-cache
docker-compose up
```

---

**Made with ❤️ by Sreekar**

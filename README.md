# 📡 Calgary Surveillance Map

An interactive map visualizing the locations and live views of publicly accessible **traffic surveillance cameras** across Calgary.

Built using React, Leaflet, and the City of Calgary's open data, this project highlights the reach of urban surveillance using live feeds and geospatial data.

![image](https://github.com/user-attachments/assets/474d2e6e-eabb-43b9-b33f-8dd8274b58dd)


---

## 🔍 What It Does

- 🗺️ Displays real-time traffic camera locations on a map
- 📸 Click any marker to view the **live image feed** from that location
- 🔢 Automatically fetches the latest camera data from Calgary’s public API
- 📍 Centers on Calgary with zoom and pan support

---

## ⚙️ Tech Stack

- **React** – Frontend framework
- **Leaflet + React-Leaflet** – Mapping and spatial rendering
- **Calgary Open Data** – Camera feed (GeoJSON + image URLs)
- **ES Modules + State Management** – For structured component logic

---

## 🚦 Data Source

This app uses the City of Calgary’s [Traffic Camera API](https://data.calgary.ca/Transportation-Transit/Traffic-Camera-Locations/k7p9-kppz) to retrieve:

- Camera locations (latitude/longitude)
- Camera labels (intersection or street)
- Live camera image URLs (updated regularly)

All data used is **publicly available and licensed for civic use**.

---

## ✅ Ethical Disclosure

This app displays only **public traffic surveillance cameras** operated by Calgary municipal services. It does **not** access:

- Private or commercial security footage  
- Transit surveillance  
- Facial recognition systems  
- Police databases or restricted surveillance zones

The intent is **informational**, **educational**, and to raise awareness about public surveillance infrastructure.

---

## 📂 Local Setup

```bash
git clone https://github.com/HussainAlAbdulkareem/Calgary-Surveillance-Map.git
cd Calgary-Surveillance-Map
npm install
npm start

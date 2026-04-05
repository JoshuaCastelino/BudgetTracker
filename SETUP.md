# BudgetTracker - Containerized Frontend

This project has been restructured with the frontend containerized in its own folder.

## Project Structure

```
BudgetTracker/
├── frontend/                    # Frontend application (React + Vite)
│   ├── src/                    # React source files
│   │   ├── components/         # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── assets/            # Static assets
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   ├── public/                # Public static files
│   ├── index.html             # Entry HTML file
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.ts         # Vite configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── eslint.config.js       # ESLint configuration
├── README.md
└── SETUP.md                   # This file
```

## Getting Started

### Development

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
npm run dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
cd frontend
npm run build
```

### Lint

```bash
cd frontend
npm lint
```

### Preview

```bash
cd frontend
npm run preview
```

## Technologies

- **React** 19.2.4 - UI framework
- **TypeScript** 5.9.3 - Type safety
- **Vite** 8.0.1 - Build tool
- **TailwindCSS** 4.2.2 - CSS framework
- **React Router** 7.13.2 - Client-side routing
- **Recharts** 3.8.1 - Charting library
- **Lucide React** 1.7.0 - Icon library
- **ESLint** 9.39.4 - Code linting

## Docker

### Build Docker Image

```bash
docker build -f frontend/Dockerfile -t budgettracker-frontend .
```

### Run with Docker

```bash
docker run -p 3000:3000 budgettracker-frontend
```

Access the application at `http://localhost:3000`

### Using Docker Compose

Build and run the entire stack:

```bash
docker-compose up -d
```

Stop the services:

```bash
docker-compose down
```

View logs:

```bash
docker-compose logs -f frontend
```

## Next Steps

Consider setting up:
- Backend services (if needed)
- CI/CD pipeline
- Environment configuration
- Multi-container orchestration



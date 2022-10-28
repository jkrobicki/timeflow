# Instructions to run timeflow in DEV mode 

1) Create env variables for frontend
 - Create `.env` file in `/frontend` directory
 - Add variable `PUBLIC_SVELTEKIT_DEV_BASE_URL='http://localhost:8002'`
2) Create docker images used in this repo
```bash
sh build.sh
```

3) Run docker-compose to spin up the backend

```bash
docker-compose -f docker-compose-dev.yaml up -d
```

3) Run frontend in dev mode 

```bash
cd frontend
npm install
npm run dev
```

4) Navigate to the main app page
`http://localhost:5173`


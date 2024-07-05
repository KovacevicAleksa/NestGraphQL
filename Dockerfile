# Koristimo Node.js 18 kao baznu sliku
FROM node:18

# Postavljamo radni direktorijum u /app
WORKDIR /app

# Kopiramo package.json i package-lock.json u radni direktorijum
COPY backend/package*.json ./

# Instaliramo zavisnosti
RUN npm install

# Kopiramo ostatak aplikacije u radni direktorijum
COPY backend/ .

# Buildamo aplikaciju (kompajliramo TypeScript kod)
RUN npm run build

# Exponujemo port 3030
EXPOSE 3030

# Definišemo komandnu liniju za pokretanje aplikacije
CMD ["npm", "run", "start:prod"]

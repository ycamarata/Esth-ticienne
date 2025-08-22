// backend/server.js
const express = require("express");
const app = express();

// Middleware pour lire le JSON
app.use(express.json());

// Exemple de route
app.get("/", (req, res) => {
  res.send("Backend fonctionne 🚀");
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});

import express from "express";
import swagger from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;


const filePath = path.resolve(__dirname, '../api.yaml');
let swaggerDocument;
if (fs.existsSync(filePath)) {
   swaggerDocument = YAML.load(filePath);
  // Proceed with your application logic
} else {
  console.error(`File ${filePath} does not exist.`);
}

// Middleware for parsing JSON bodies
app.use(express.json());

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Swagger UI is available on http://localhost:${port}/api-docs`);
  });

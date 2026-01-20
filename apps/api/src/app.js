import express from 'express';
import sequelize from './common/database';
import defineBand from './common/models/Band';

const Band = defineBand(sequelize);

sequelize.sync();

// Create an Express application instance
const app = express();

app.use(express.json());

// Define a route for HTTP GET requests to the root URL ('/')
// This route sends a simple text response to the client
app.get('/', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

// Start the server on port 3000 and log a message to the console
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong'
  });
});


/* 

Next steps:
Need to define methods and test that they work

*/

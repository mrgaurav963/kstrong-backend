const dotenv = require('dotenv');
const { app } = require('./app');
const { connectDB } = require('./config/DB.Config.js');

dotenv.config({ path: './.env' });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  });

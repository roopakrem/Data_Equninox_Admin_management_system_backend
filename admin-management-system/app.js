var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json());
// Allow CORS
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from this frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow cookies and credentials if needed
}));

const sequelize = require('./db.config');

const businessroutes = require('./routes/business.routes');
const userroutes = require('./routes/user.routes');
const salesroutes = require('./routes/sales.routes');

app.use('/business', businessroutes);
app.use('/user', userroutes);
app.use('/sales', salesroutes);

const PORT = 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.log('Database connection error:', err));
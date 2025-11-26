const express = require('express');
const app = express();
const PORT = 8001;
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api/login', authRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

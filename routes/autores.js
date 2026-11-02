const router = require('express').Router();
const db = require('../db');

// Ver todos los autores
router.get('/', async (req, res) => {
  try {
    const [autores] = await db.query('SELECT * FROM autores');
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un autor
router.post('/', async (req, res) => {
  try {
    const { nombre, email, imagen } = req.body;
    const [resultado] = await db.query(
      'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
      [nombre, email, imagen]
    );
    res.status(201).json({ id: resultado.insertId, nombre, email, imagen });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ver los posts de un autor concreto
router.get('/:id/posts', async (req, res) => {
  try {
    const [posts] = await db.query(
      'SELECT * FROM posts WHERE autor_id = ?',
      [req.params.id]
    );
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
const router = require('express').Router();
const db = require('../db');

// Ver todos los posts CON los datos del autor
router.get('/', async (req, res) => {
  try {
    const [posts] = await db.query(`
      SELECT p.*, a.nombre AS autor_nombre,
             a.email AS autor_email, a.imagen AS autor_imagen
      FROM posts p
      JOIN autores a ON p.autor_id = a.id
    `);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un post
router.post('/', async (req, res) => {
  try {
    const { titulo, descripcion, categoria, autor_id } = req.body;
    const [resultado] = await db.query(
      'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, categoria, autor_id]
    );
    res.status(201).json({ id: resultado.insertId, titulo, descripcion, categoria, autor_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
# API de Blog (Actividad 8)

API con Express y MySQL para gestionar posts y autores.

## Instalación
1. `npm install`
2. Crear la base e importar: `mysql -u root -p -e "CREATE DATABASE blog"` y luego `mysql -u root -p blog < blog.sql`
3. Editar `db.js` con tu contraseña de MySQL
4. `node app.js`

## Rutas
- GET  /api/autores
- POST /api/autores  { nombre, email, imagen }
- GET  /api/autores/:id/posts
- GET  /api/posts  (incluye datos del autor)
- POST /api/posts  { titulo, descripcion, categoria, autor_id }
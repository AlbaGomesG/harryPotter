const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

router.put("/:id", houseController.updateHouse);
router.delete("/:id", houseController.deleteHouse);

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Gerenciamento de bruxos
 */


/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas
 *     tags: [Houses]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de casas
 *       404:
 *         description: Casas não encontradas
 */
router.get("/", houseController.getAllHouses);

/**
 * @swagger
 * /api/houses/{id}:
 *   get:
 *     summary: Busca casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa encontrada
 *       404:
 *         description: Casa não encontrada
 */
router.get("/:id", houseController.getHouse);

/**
 * @swagger
 * /api/houses:
 *   post:
 *     summary: Cria uma nova casa
 *     tags: [Houses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Casa criada
 *       404:
 *         description: Erro ao criar Casa
 */
router.post("/", houseController.createHouse);

module.exports = router;

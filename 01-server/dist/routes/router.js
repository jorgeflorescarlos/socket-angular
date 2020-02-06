"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/mensajes", (req, res) => {
    res.json({
        ok: true,
        mensaje: "Todo está bien"
    });
});
router.post("/mensajes/:id", (req, res) => {
    const { cuerpo, de } = req.body;
    const { id } = req.params;
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
exports.default = router;

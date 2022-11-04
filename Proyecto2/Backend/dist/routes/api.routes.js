"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_controller_1 = __importDefault(require("../controller/api.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/ping", api_controller_1.default.ping);
router.post("/prueba", api_controller_1.default.apiController.parser);
router.post('/parsear', api_controller_1.default.parse);
router.get('/ast', api_controller_1.default.ast);
exports.default = router;

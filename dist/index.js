"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4000;
app.get("/", (req, res) => {
    res.send("This is Home Page");
});
app.get("/product", (req, res) => {
    res.send("This is Product Page");
});
app.get("/order", (req, res) => {
    res.send("This is order Page");
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

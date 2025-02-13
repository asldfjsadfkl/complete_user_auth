import isAuthenticated from "./Authentication/Auth.js";
import List from "./Models/listModel.js";
import express from "express";
const router = express.Router();

const listControle = router
  .post("/api/v1/create", isAuthenticated, async (req, res) => {
    try {
      await List.create(req.body);
      res.status(201).json({ message: "uploaded" });
    } catch (error) {}
  })
  .get("/api/v1/all", isAuthenticated, async (req, res) => {
    try {
      const data = await List.find({});
      const count = await List.count();
      res.status(201).json({ message: "uploaded", count, data });
    } catch (error) {}
  })
  .delete("/api/v1/:id", isAuthenticated, async (req, res) => {
    try {
      const data = await List.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Deleted" });
    } catch (error) {}
  })
  .get("/api/v1/:id", isAuthenticated, async (req, res) => {
    console.log(req.params.id)
    try {
      const data = await List.findById(req.params.id);
      res.status(201).json({ data });
    } catch (error) {}
  })
  .patch("/api/v1/:id", isAuthenticated, async (req, res) => {
    try {
      const data = await List.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({ message: "Updated" });
    } catch (error) {}
  });

export default listControle;

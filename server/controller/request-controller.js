const express = require("express");
const router = express.Router();

// const CreateAbl = require("../abl/request/create-abl");
const GetAbl = require("../abl/request/get-abl");
// const UpdateAbl = require("../abl/request/update-abl");
// const DeleteAbl = require("../abl/request/delete-abl");
const ListAbl = require("../abl/request/list-abl");
const CalculateAbl = require("../abl/request/calculate-abl");
const CreateAbl = require("../abl/request/create-abl");

router.post("/calculate", async (req, res) => {
  await CalculateAbl(req, res)
});

router.get("/", async (req, res) => {
  await GetAbl(req, res);
});

router.post("/create", async (req, res) => {
  CreateAbl(req, res)
});

//TODO

// router.post("/update", async (req, res) => {
//   await UpdateAbl(req, res);
// });
//
// router.post("/delete", async (req, res) => {
//   await DeleteAbl(req, res);
// });

router.get("/list", async (req, res) => {
  await ListAbl(req, res);
});

module.exports = router;

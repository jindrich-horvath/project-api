const path = require("path");
const Ajv = require("ajv").default;
const RequestDao = require("../../dao/request-dao");
let dao = new RequestDao(
  path.join(__dirname, "..", "..", "storage", "requests.json")
);

let schema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
};

async function GetAbl(req, res) {
  try {
    const id = req.query.id

    const request = await dao.getRequest(id);
    if (!request) {
      res
        .status(404)
        .send({ error: `request with id '${id}' doesn't exist` });
    }
    res.json(request);
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = GetAbl;

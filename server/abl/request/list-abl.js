const path = require("path");
const RequestDao = require("../../dao/request-dao");
let dao = new RequestDao(
  path.join(__dirname, "..", "..", "storage", "requests.json")
);

async function ListAbl(req, res) {
  try {
    const requestList = await dao.listRequests();
    res.json(requestList);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

module.exports = ListAbl;

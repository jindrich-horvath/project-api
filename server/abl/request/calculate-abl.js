const Ajv = require("ajv").default;

const schema = {
  type: "object",
  properties: {
    amount: {type: "number"},
    numOfMonths: {type: "number"}
  },
  required: ["amount", "numOfMonths"],
};

async function CalculateAbl(req, res) {
  try {
    const ajv = new Ajv();
    const values = req.body;
    const valid = ajv.validate(schema, values);
    if (valid) {
        const result = {
          //TODO
          monthlyPayment: 12,
          yearlyInterest: 12,
          RPSN: 12,
          overallAmount: 12
        }
      res.status(200).send(result)
    } else {
      res.status(400).send({
        errorMessage: "validation of input failed",
        params: req.body,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e.stack);
  }
}

module.exports = CalculateAbl;

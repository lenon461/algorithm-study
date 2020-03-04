const fs = require("fs");
const { log } = require("console");
class Nosql {
  async read() {
    const stores = JSON.parse(await fs.readFileSync("./data.json").toString());
    log(stores);
    return stores;
  }

  async write(input) {
    try {
      await fs.writeFileSync("./data.json", JSON.stringify(input));
    } catch (error) {
      console.error(error);
    }
  }
}

const nosql = new Nosql();

(async () => {
  await nosql.read();
})();

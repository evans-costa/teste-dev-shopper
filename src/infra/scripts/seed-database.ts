import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

seedDatabase();

async function seedDatabase() {
  console.log("> Seeding database...");

  await client.connect();

  for (let i = 0; i < 3; i++) {
    try {
      const query = `INSERT INTO customers DEFAULT VALUES;`;

      await client.query(query);
    } catch (error) {
      if (error) throw error;
    }
  }

  await client.end();

  console.log("\n> Database seeded!");
}

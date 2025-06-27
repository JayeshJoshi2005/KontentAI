/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_9HCyASlDqrc3@ep-black-grass-a87lmac5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
};

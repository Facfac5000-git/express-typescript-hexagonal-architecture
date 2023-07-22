export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  db: {
    conn: process.env.DB_CONN || "",
  },
};

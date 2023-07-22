import mongoose from "mongoose";

// TODO: Connect to DB
export class MongoDBConn {
  private readonly dbConn: string;

  constructor(dbConn: string) {
    this.dbConn = dbConn;
  }

  async run() {
    try {
      await mongoose.connect(this.dbConn);
      console.log("[DB] - Connected to DB");
    } catch (error) {
      console.log("[DB] - Mongoose Connect Error: ", error);
    }
  }
}

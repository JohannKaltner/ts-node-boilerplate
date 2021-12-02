
interface Pool {
  max: number;
  min: number;
  acquire: number;
  idle: number;
}

interface RootObject {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  dialect: string;
  pool: Pool;
}

const dbConfig: RootObject = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "radaroficinasdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default dbConfig;

import { DataSource } from "typeorm";
import "reflect-metadata"
import { Specification } from "../../src/modules/cars/entities/Specification";
import { Category } from "../modules/cars/entities/Category";

import { CreateCategory1680962623233 } from "./migrations/1680962623233-CreateCategory";
import { CreateSpecification1681315081361 } from "./migrations/1681315081361-CreateSpecification";
const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: [ "./src/modules/**/entities/*.ts"],
    migrations: [
        CreateCategory1680962623233,
        CreateSpecification1681315081361

    ],
  });
  
  export function createConnection(host = "database"): Promise<DataSource> {
    return dataSource.setOptions({ host }).initialize();
  }
  
  export default dataSource;
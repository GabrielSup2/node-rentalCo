import "reflect-metadata"
import { v4 as uuidV4, v4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("Category")
class Category {
    @PrimaryColumn()
    id?: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category}
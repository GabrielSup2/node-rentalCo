import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"
import { Category } from "./Category";

@Entity("cars")
class Car{

    @PrimaryColumn()
    id : string;

    @Column()
    name: string;

    @Column()
    description: string;3

    @Column()
    daily_rate: number;

    @Column()
    license_plate: string;

    @Column()
    available : boolean;

    @Column()
    fine_amount : number;

    @Column()
    brand: string;

    @ManyToOne(()=> Category)
    @JoinColumn({name : "category_id"})
    category : Category

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at : Date;
    
    constructor(){
        if(!this.id){
            this.id = uuidv4()
            this.available = true
            }
    }
}
export {Car}
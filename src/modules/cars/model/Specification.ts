import { v4 as uuidV4, v4 } from "uuid";

class Specification {
    id?: string;
    name: string;
    descrition: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export {Specification};
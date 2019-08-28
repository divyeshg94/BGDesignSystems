import {Injectable} from "@angular/core";

@Injectable()
export class GlobalService {
    private isShowAllSPA: boolean = false;

    constructor() {}

    setValue(val: boolean) {
        this.isShowAllSPA = val;
    }

    getValue() {
        return this.isShowAllSPA;
    }
}
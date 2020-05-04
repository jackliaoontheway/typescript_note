function  getData<T>(t: T): T {

    return t;
}

class AbstractList<T> {
    data : Array<T>;

    add(t : T) : void {
        this.data.push(t);
    }

    // add: (t : T) => {
    //     this.data.push(t);
    // }
}

class Product {
    name : string;
    age : number;
}

class ProductList<T extends Product> {

}

function getProperties <T,K extends keyof T>(obj :T, k : K) {
    return obj[k];
}

getProperties(new Product(),'name');
class ChargeRate {
    currency: number;

    constructor(currency: number) {
        this.currency = currency;
    }

    calculate(rate: number): number {
        return this.currency * rate;
    };

}

class FreightChargeRate extends ChargeRate {
    // constructor(currency: number) {
    //     super(currency);
    // }
}

let r = new FreightChargeRate(1);
console.log(r.calculate(10));

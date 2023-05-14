export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }


// const tablet: Product = {
//     description: 'IPad Air',
//     price: 250.0
// }

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions) : number[] {

export function taxCalculation(options : TaxCalculationOptions): number[]
{
    const {tax, products} = options;

    let total = 0;


    products.forEach(({price}) => {
        total += price;
    })

    return [total, total * tax];

}

// const result = taxCalculation({ products: shoppingCart, tax: tax });

// const [total, taxTotal] = result;

// console.log(total);
// console.log(taxTotal);









// export {};
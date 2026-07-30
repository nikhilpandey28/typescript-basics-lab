interface Order {
    id: number;
    product: string;
    total: number;
    discount?: number;
}

function printOrder(order: Order): void {
    console.log(`Order #${order.id}`);
    console.log(`Product: ${order.product}`);
    console.log(`Total: ₹${order.total}`);

    if (order.discount !== undefined) {
        console.log(`Discount: ₹${order.discount}`);
    }
}

const order1: Order = {
    id: 101,
    product: "Laptop",
    total: 60000
};

printOrder(order1);

// ❌ Intentional Error
// printOrder({
//     id: 102,
//     product: "Keyboard"
// });
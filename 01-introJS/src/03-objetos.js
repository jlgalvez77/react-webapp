

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 1,
        name: 'Andres Herrera',
        company: 'Google'
    },
    total: 1000,
};

invoice.client.id = 20;
invoice.id = 20;
console.log(invoice);
console.log(invoice.id);
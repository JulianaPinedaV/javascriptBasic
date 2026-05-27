// Es un bloque de codigo que se utiliza cuando puede haber un error en el codigo, se utiliza para evitar que el programa se caiga, se utiliza con try catch

// El catch se ejecuta si el try tiene error y el finally se ejecuta siempre, aunque el try tenga error o no

// El try se usa con el catch o el ginally, no se puede usar solo el try

const validateStatus = (status) => {
    if(status<100 || status > 599){
        throw new Error("status no valido");
    }
    return 'status valido';
};



try {
    console.log(validateStatus(50));
}catch (error) {
    console.log(error.message);
}

// JSON.stringify() convierte un objeto o array de javascript en un string de texto JSON.

const booking = {
    totalPrice: 200,
    currency: "USD",
    departureDate: new Date('2024-06-0')
}

// JSON.parse() Convierte un string de texto JSON en un objeto o array de Javascript
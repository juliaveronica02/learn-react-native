let human = {
    name: 'julia',
    height: 10,
    weight: 50,
    live: 'Tanjung Pinang',
    job: ['facebook', 'twitter', {
        name: 'apple',
        location: 'kepri'
    }],
    pet: {
        name: 'blacky',
        height: 20,
        weight: 29,
        live: 'brazil',
    },
    printNameAndDogName: function () {
        const myName = this.name
        const dogName = this.pet.name
        debugger;
        console.log(`my name is ${myName}& my dog name is ${dogName}`)
        // run in chrome: human.printNameAndDogName(console.log).
        // result: my name is julia& my dog name is blacky.
    },
    printJob: (urutan) => {
        console.log('parameter')
        const job = human.job[0]
        console.log(`my job is ${job}`);
    }
    // run in chrome: human.printJob(console.log).
    // parameter.
    // my job is facebook.
}

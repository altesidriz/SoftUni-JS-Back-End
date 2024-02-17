const mongoose = require('mongoose');

const Cat = require('./models/Cat');
const Person = require('./models/Person');

async function connectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/');

    console.log('Db Connected successfully');

    // cats.forEach(cat => cat.greet()); // instance method
    // cats.forEach(cat => console.log(cat.info)); // virtual property
    // const result = await Cat.giveMeCats() // Static model method

    /*                        READ OPERATIONS

    ---> find All cats<---
    const cats = await Cat.find();

    ---> find All cats whom breed is Angroa<---
    const cats = await Cat.find({ breed: 'Angora' });
                    
    ---> find at least one(random/first founded) cat whom breed is Angroa<---
    const cats = await Cat.findOne({breed: 'Angora'});

    ---> find at least one(random/first founded) cat<---
    const cats = await Cat.findOne();
    
    --->find a cat by it's id<---
    const cats = await Cat.findById('646f8c5265a096882c26c345');
    
    */

    /*                          CREATE OPERATIONS
            METHOD 1

    const newCat = new Cat({
        name: 'Beyaz',
        age: 10,
        breed: 'Europe Street'
    });
    await newCat.save();

            METHOD 2

    const newCat = await Cat.create({
        age: 6,
        name: 'Charli',
        color: 'Red',
        breed: 'Dog',
    });

    */

    /*                      UPDATE OPERATIONS

                METHOD 1
    const charli = await Cat.findOne({name: 'Charli'});
    charli.age = 10;
    await charli.save();

                METHOD 2 (NATIVE MONGODB)
    await Cat.updateOne({ name: 'Charli' }, { $set: { age: 9 } });
    
                METHOD 3 (MONGOOSE EXT)
    await Cat.findByIdAndUpdate('646fa6c4c383c3fd53c0194a', {$set: {breed: 'Chihuahua'}});
    */
    
    /*                      DELETE OPERATIONS 
                METHOD 1
    await Cat.deleteOne({name: 'Zuza'}); --->>> deletes first found cat whom name is Zuza

    await Cat.deleteMany({name: 'Zuza'}); --->>> deletes all cats whom name is Zuza
    
                METHOD 2 (MONGOSE EXT)

    await Cat.findByIdAndDelete('646f8c5265a096882c26c345');
    
    */


    /* Creating collection by creating first record in non existant collection

    await Person.create({
            name: 'Pesho',
            age: 20,
        });

    */

    // Find all non angora cats
    // const cats = await Cat.find({ breed: { $ne: 'Angora' } }); mongoDB query
    // const cats = await Cat.find().where('breed').ne('Angora'); mongoose query
    // console.log(cats);
}

connectDb();
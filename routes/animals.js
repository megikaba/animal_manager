const express = require('express');
const router = express.Router();
const Animal = require('../models/animal');

// CREATE ONE ANIMAL
router.post('/', (req, res) => {
    const { name, type, age } = req.body;
    const newAnimal = new Animal({ name, type, age });
    newAnimal.save().then((newAnimal) => {
      res.json(newAnimal);
    }).catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// GET ALL ANIMALS
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE ONE ANIMAL
 router.put('/:id', async (req, res) => {
     const { name, type, age } = req.body;
     try {
         const animal = await Animal.findById(req.params.id);
         if (!animal) return res.status(404).json({ message: 'Animal not found' });

         animal.name = name || animal.name;
         animal.type = type || animal.type;
         animal.age = age || animal.age;
         await animal.save();
         res.json(animal);
     } catch (err) {
         res.status(500).json({ message: err.message });
     }
 });
//
// DELETE ONE ANIMAL
 router.delete('/:id', async (req, res) => {
     try {
       const animal = await Animal.findByIdAndDelete(req.params.id);
      //   const animal = await Animal.findById(req.params.id);
         if (!animal) return res.status(404).json({ message: 'Animal not found' });

         res.json({ message: 'Animal removed' });
     } catch (err){
         res.status(500).json({ message: err.message });
     }
 });

// SEARCH ANIMAL BY NAME
 router.get('/search/:name', async (req, res) => {
     const { name } = req.params;
     try {
         const animals = await Animal.find({ name: new RegExp(name, 'i') });
         res.json(animals);
     } catch (err) {
         res.status(500).json({ message: err.message });
     }
 });

module.exports = router;

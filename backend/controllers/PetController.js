const Pet = require("../models/Pet")

// helpers

const getToken = require("../helpers/get-token")
const getUserByToken = require("../helpers/get-user-by-token")

module.exports = class PetController {

  //create a pet
  static async create (req , res) {
    
    const {name , age , weight , color } = req.body

    const available = true

    // image upload

    // validations
    if(!name) {
      res.status(422).json({message: 'O nome é obrigatório!'})
      return
    }
    if(!age) {
      res.status(422).json({message: 'A idade é obrigatório!'})
      return
    }
    if(!weight) {
      res.status(422).json({message: 'O peso é obrigatório!'})
      return
    }
    if(!color) {
      res.status(422).json({message: 'A cor é obrigatória!'})
      return
    }

    // get pet owner
    const token = getToken(req)
    const user = await getUserByToken(token)

    // create a pet
    const pet = new Pet ({
      name,
      age,
      weight,
      color,
      available,
      images:[],
      user: {
        _id: user.name,
        name:user.name,
        image: user.image,
        phone: user.phone,
      },
    })
    try {
      const newPet = await pet.save()
      req.status(201).json({
        message:'Pet Cadastrado com Sucesso!',
        newPet,
      })
    } catch (error) {
      res.status(500).json({ message: error})
    }
  }

}
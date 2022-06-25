const Pet = require("../models/Pet")

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

  }

}
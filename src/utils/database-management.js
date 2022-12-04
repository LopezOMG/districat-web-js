const Database = require("@replit/database")
const db = new Database()

function addToDB({ key, value }) {
  db.set(key, value).then(
    () => `La clave "${key}" con valor "${value}" ha sido añadida correctamente`
  )
}

function removeFromDB(key) {
  let dbValue
  
  db.get(key).then(value => {
    if(value) { dbValue = value }
    else {
      console.log("No se encontraron valores con dicha clave")
      return
    }
  })

  db.delete(key).then(() => {
    console.log(`La clave ${key} con valor ${dbValue} ha sido eliminada correctamente de la base de datos`)

    return
  })
}

function getFromDB(key) {
  return db.get(key).then(value => value)
}

function modifyToDB({ key, newValue }) {
  db.get(key).then(value => {
    if(value) {
      db.set(key, newValue).then(() => {
        console.log(`La clave de nombre ${key} se ha modificado su valor exitosamente`)
      })
    } else {
      console.log(`La clave ${key} no existe`)
    }
  })
}

module.exports = { addToDB, removeFromDB, getFromDB, modifyToDB }
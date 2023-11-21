const Pool = require('pg').Pool
const pool = new Pool({
   user: 'mahendar',
   host: 'localhost',
   database: 'api',
   password: 'Mahi@18092000',
   port: 5432,
})


const getCountries = (request, response) => {
   pool.query('SELECT * FROM countries ORDER BY id ASC', (error, results) => {
     if(error){
       throw error
     }
     response.status(200).json(results.rows)
   })
}

const getCountryById = (request, response) => {
  const id = parseInt(request.params.id)

   pool.query('SELECT * FROM countries WHERE id = $1', [id], (error, results) => {
     if(error){
       throw error
     }
     response.status(200).json(results.rows)
   })
}


const createCountry = (request, response) => {
  const { name, capital } = request.body

   pool.query('INSERT INTO countries (name, capital) VALUES ($1, $2)', [name, capital], (error, results) => {
     if(error){
       throw error
     }
     response.status(201).send('A new country has been added to the database')
   })
}

// CREATE ROUTE FUNCTION TO UPDATE EXISTING DATABASE RECORDS
const updateCountry = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, capital } = request.body

   pool.query(
     'UPDATE countries SET name = $1, capital = $2 WHERE id = $3',
     [name, capital , id],
     (error,results) => {
     if(error){
       throw error
     }
     response.status(200).send('Country has been updated in the database')
   }
 )

}
// CREATE ROUTE FUNCTION TO DELETE A RECORD FROM THE DATABASE TABLE
const deleteCountry = (request, response) => {
  const id = parseInt(request.params.id)


   pool.query('DELETE FROM countries WHERE id =$1', [id], (error, results) => {
     if(error){
       throw error
     }
     response.status(200).send(`Country deleted with ID: ${id}`)
   })

}

const getCapitals = (request, response) => {
   pool.query('SELECT * FROM capital ORDER BY id ASC', (error, results) => {
     if(error){
       throw error
     }
     response.status(200).json(results.rows)
   })
}
const getCapitalById = (request, response) => {
  const id = parseInt(request.params.id)

   pool.query('SELECT * FROM capital WHERE id = $1', [id], (error, results) => {
     if(error){
       throw error
     }
     response.status(200).json(results.rows)
   })
}

const createCapital = (request, response) => {
  const { name, image } = request.body

   pool.query('INSERT INTO capital (name, image) VALUES ($1, $2)', [name, image], (error, results) => {
     if(error){
       throw error
     }
     response.status(201).send('A new capital has been added to the database')
   })
}

// CREATE ROUTE FUNCTION TO UPDATE EXISTING DATABASE RECORDS
const updateCapital = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, capital } = request.body

   pool.query(
     'UPDATE capital SET name = $1, image = $2 WHERE id = $3',
     [name, image , id],
     (error,results) => {
     if(error){
       throw error
     }
     response.status(200).send('capital has been updated in the database')
   }
 )

}
// CREATE ROUTE FUNCTION TO DELETE A RECORD FROM THE DATABASE TABLE
const deleteCapital = (request, response) => {
  const id = parseInt(request.params.id)


   pool.query('DELETE FROM capital WHERE id =$1', [id], (error, results) => {
     if(error){
       throw error
     }
     response.status(200).send(`capital deleted with ID: ${id}`)
   })

}

module.exports = {
  getCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
  getCapitals,
  getCapitalById,
  createCapital,
  updateCapital,
  deleteCapital,
}

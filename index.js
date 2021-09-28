const request = require('request') 
require('dotenv/config')



const url = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
const key = process.env.KEY


request(url_sjc, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(data)
    
    
    
})


const request = require('request') 
require('dotenv/config')


const url_sjc = 'http://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&units=metric&appid=89ce5587ceaaa30876e3d3e3dfac2351'
const url = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
const key = process.env.KEY


request(url_sjc, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(data)
    
    
    
})


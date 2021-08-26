const axios =  require( "axios")
const fs = require("fs")

var meta_data = fs.readFileSync("config.txt")


// console.log(meta_data)

meta_data = JSON.parse(meta_data) 



// console.log(meta_data.url)
// console.log(meta_data.method)

const getData=(url)=>{
    axios.get(url)
    .then(response=>{
        console.log(response.data)
        fs.writeFileSync(`Output.log`, `${response}`)
        console.log(`Full Output log at Output.log`)
    })
}

const postData=(url, postData)=>{
    axios.post(url, postData , {
        // THESE IS OPTIONAL AXIOS CAN AUTOMATICALLY RECOGNIZE CONTENT TYPE AND OTHER CONFIG OPTIONS
        headers: {
            'Content-Type':'application/json'
        }
    }).then(response=>{
        console.log(response.data)
        fs.writeFileSync(`${url}.log`, `${response}`)
        console.log(`Full Output log at Output.log`)
    })
    .catch(err => console.log(err))
}


if (meta_data.method == "GET"){
	getData(meta_data.url)
}
else if (meta_data.method == "POST"){
	postData(meta_data.url, meta_data.post_data)
}
//   http://127.0.0.1:9000/all_data 
// 	 http://127.0.0.1:9000/new_data

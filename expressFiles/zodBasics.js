const express = require('express')
const zod = require('zod')
const app = express()
app.use(express.json())

function validate(obj){
    const schema = zod.object({
        email: zod.string().email(),
        pass: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    return response.success;
}


const user = [{
    acc: [
        {
            email: 'tee@gmail.com', 
            pass: "atkt"
        }, 
        {
            email: 'aaa@gmail.com', 
            pass: "arth"
        }
    ]
}]

app.get('/', (req, res)=>{
    const details = req.body.details
    let valid_profiles = 0;
    let invalid_profiles = 0;
    for(let i=0; i<user[0].acc.length; i++){
        if(validate(user[0].acc[i])) valid_profiles++;
        else invalid_profiles++;
    }
    let total_profiles = valid_profiles + invalid_profiles;
    res.json({
        total_profiles, 
        invalid_profiles, 
        valid_profiles
    })
})


app.listen(3000)
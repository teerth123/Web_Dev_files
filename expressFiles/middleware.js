const zod = require("zod");
const schema = zod.object({
    username : zod.string().min(4),
    password : zod.string().min(8)
})
function validate(req, res, next){
    const input = req.body;
    const payload = schema.safeParse(input);
    if(payload.success){
        next();
    }
    else{
        res.json({
            "msg":"something went wrong"
        })
    }

}
module.exports={validate}
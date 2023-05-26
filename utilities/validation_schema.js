const Joi = require('@hapi/joi')

const itemSchema = Joi.object({
    item: Joi.string().required().min(1)
})

const checkSchema = async(req,res,next) => {
    try {
        const item = req.body;
        const result = await itemSchema.validateAsync(item);
        req.result = result
        next();
    } catch (err) {
        if(err.isJoi === true) {
        return res.status(422).json({message: err.message});
        }
    }
}

module.exports = {checkSchema};
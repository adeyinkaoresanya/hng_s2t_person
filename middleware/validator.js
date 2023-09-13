import Joi from "joi";



const createUserValidator = (req, res, next) => {
  const user = req.body;
  const schema = Joi.object({

    name: Joi.string()
      .min(3)
      .max(30)
      .trim()
      .required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2
      })
      .required(),
  });

  const result = schema.validate(user);
  // console.log("result", result);
  if (result.error) {
    res.status(400).json({ errors: result.error });
    return;
  }

  next();
};


const updateUserValidator = (req, res, next) => {
  const updateData = req.body;
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .trim(),

    email: Joi.string()
      .email({
        minDomainSegments: 2
      }),
  });

  const result = schema.validate(updateData);
  console.log("result", result);
  if (result.error) {
    res.status(400).json({ errors: result.error });
    return;
  }

  next();
};



export  {createUserValidator, updateUserValidator};
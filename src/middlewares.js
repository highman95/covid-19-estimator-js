// Cross-Origin Resource Sharing (CORS) Middleware
export const corsHandler = (req, res, next) => { // handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  next();
};


/**
 * Error-Handler Middleware
 *
 * @param {import("express").Errback} err The http-error objecet
 * @param {import("express").Request} req The http-reequest object
 * @param {import("express").Response} res The http-response object
 * @param {import("express").NextFunction} next The next function
 */
export const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const isCSE = ['EvalError', 'Error'].includes(err.name);
  res.status(err.statusCode || (isCSE ? 400 : 500)).send({ status: false, message: err.message });
};

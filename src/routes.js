import xml from 'xml';
import covid19ImpactEstimator from './estimator';

/**
 * Project-wide route-handler
 *
 * @param {import('express').Router} router The router object
 */
const routeHandler = (router) => {
  router.post('/on-covid-19/:format?', (req, res) => {
    const estimation = covid19ImpactEstimator(req.body);
    const isXml = (req.params.format && (req.params.format.toLowerCase() === 'xml'));

    res.type(isXml ? 'xml' : 'json').send(isXml ? xml(estimation, { declaration: true }) : estimation);
  });

  return router;
};

export default routeHandler;

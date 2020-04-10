import fs from 'fs';
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

  router.get('/on-covid-19/logs', (req, res, next) => {
    fs.readFile('logs.txt', (err, data) => {
      if (err) {
        next(err);
        return;
      }

      res.header('Content-Type', 'text/plain').send(data.toString());
    });
  });

  return router;
};

export default routeHandler;

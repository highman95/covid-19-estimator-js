import impactCalculator from './impact-calculator';
import severeImpactCalculator from './severe-impact-calculator';

const covid19ImpactEstimator = (data) => {
  const impact = impactCalculator(data); // best-case estimation
  const severeImpact = severeImpactCalculator(data);// severe-case estimation

  return { data, impact, severeImpact };
};

export default covid19ImpactEstimator;

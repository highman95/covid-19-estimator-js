const severeImpactCalculator = (data) => {
  const {
    region, periodType, timeToElapse, reportedCases, population, totalHospitalBeds // eslint-disable-line no-unused-vars, max-len
  } = data;

  const daysMultiplier = periodType === 'months' ? 30 : (periodType === 'weeks' ? 7 : 1);// eslint-disable-line no-nested-ternary
  const noOfInfectedPeople = 2 ** ((timeToElapse * daysMultiplier) / 3);

  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * noOfInfectedPeople;

  return { currentlyInfected, infectionsByRequestedTime };
};

export default severeImpactCalculator;

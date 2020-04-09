const severeImpactCalculator = (data) => {
  const {
    region, periodType, timeToElapse, reportedCases, population, totalHospitalBeds // eslint-disable-line no-unused-vars, max-len
  } = data;

  const daysMultiplier = periodType === 'months' ? 30 : (periodType === 'weeks' ? 7 : 1);// eslint-disable-line no-nested-ternary
  const totalTimeToElapse = timeToElapse * daysMultiplier;
  const noOfInfectedPeople = 2 ** (totalTimeToElapse / 3);

  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * noOfInfectedPeople;

  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const hospitalBedsByRequestedTime = totalHospitalBeds - Math.round(severeCasesByRequestedTime);
  const casesForICUByRequestedTime = infectionsByRequestedTime * 0.05;
  const casesForVentilatorsByRequestedTime = infectionsByRequestedTime * 0.02;

  // eslint-disable-next-line max-len
  const dollarsInFlight = infectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * totalTimeToElapse;

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};

export default severeImpactCalculator;

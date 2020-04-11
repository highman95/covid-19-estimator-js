const severeImpactCalculator = ({
  region, periodType, timeToElapse, reportedCases, population, totalHospitalBeds // eslint-disable-line no-unused-vars, max-len
}) => {
  const daysMultiplier = periodType === 'months' ? 30 : (periodType === 'weeks' ? 7 : 1);// eslint-disable-line no-nested-ternary
  const totalTimeToElapse = timeToElapse * daysMultiplier;
  const noOfInfectedPeople = 2 ** (totalTimeToElapse / 3);

  const currentlyInfected = reportedCases * 50;
  const infectionsByRequestedTime = Math.trunc(currentlyInfected * noOfInfectedPeople);

  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);
  const hospitalBedsByRequestedTime = totalHospitalBeds - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);

  // eslint-disable-next-line max-len
  const dollarsInFlight = Math.trunc(infectionsByRequestedTime * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * totalTimeToElapse);

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

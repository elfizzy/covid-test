// export default covid19ImpactEstimator;
// eslint-disable-next-line no-unused-vars
const covid19ImpactEstimator = (data) => {
  const pandemicData = {
    region: {
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };

  let calTime;
  if (pandemicData.periodType === 'months') {
    calTime = (pandemicData.timeToElapse * 30) / 3;
  } else if (pandemicData.periodType === 'weeks') {
    calTime = (pandemicData.timeToElapse * 7) / 3;
  } else if (pandemicData.periodType === 'days') {
    calTime = (pandemicData.timeToElapse) / 3;
  }

  const infected = pandemicData.reportedCases * 10;
  const severlyInfected = pandemicData.reportedCases * 50;

  const output = {
    data,
    estimate: {
      impact: {},
      severeImpact: {}
    }
  };
  output.estimate.impact.currentlyInfected = infected;
  output.estimate.severeImpact.currentlyInfected = severlyInfected;
  output.estimate.impact.infectionByRequestedTime = infected * (2 ** calTime);
  output.estimate.severeImpact.infectionByRequestedTime = infected * (2 ** calTime);
};

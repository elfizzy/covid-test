// export default covid19ImpactEstimator;

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

const infected = pandemicData.reportedCases * 10;
const severlyInfected = pandemicData.reportedCases * 50;

// eslint-disable-next-line no-unused-vars
const covid19ImpactEstimator = (data) => {
  const output = {
    data,
    estimate: {
      impact: {},
      severeImpact: {}
    }
  };
  output.estimate.impact.currentlyInfected = infected;
  output.estimate.severeImpact.currentlyInfected = severlyInfected;
};

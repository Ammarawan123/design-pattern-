function createMLPipeline({ loadData, preprocess, trainModel, evaluate }) {
  return function runPipeline() {
    console.log('step 1 load data');
    const raw = loadData();

    console.log('step 2 preprocess');
    const processed = preprocess(raw);

    console.log('step 3 split data for training and testing');
    const { trainSet, testSet } = splitData(processed); 

    console.log('step 4 eveluating');
    const model = trainModel(trainSet);

    console.log('step 5 save the model');
    const metrics = evaluate(model, testSet);

    console.log('step 6 accuracy of model', metrics);
    return model;
  };
}
const churnPipeline = createMLPipeline({
  loadData: () => loadCSV('telecom_churn.csv'),
  preprocess: (data) => encodeCategorical(handleMissing(data)),
  trainModel: (trainSet) => trainLogisticRegression(trainSet),
  evaluate: (model, testSet) => calculateAccuracy(model, testSet)
});
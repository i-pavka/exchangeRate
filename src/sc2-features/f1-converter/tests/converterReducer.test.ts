import {
  ConvertCurrencyType,
  ConverterInitialStateType,
  converterReducer, ConvertHistoryType,
  setConvertCurrencyData, setConvertHistory
} from "../c2-bll/convertReducer";

let startState: ConverterInitialStateType;

beforeEach(() => {
  startState = {
    convertData: {} as ConvertCurrencyType,
    convertHistory: [] as ConvertHistoryType[],
  }

})
test('correct convertData should be set', () => {
  const convertData = {
      date: "2022-09-10",
      info: {
        rate: 61.50369,
        timestamp: 1662822183,
      },
      query: {
        amount: 55,
        from: "USD",
        to: "RUB",
      },
      result: 3382.70295,
      success: true,
  };

  const endState = converterReducer(startState, setConvertCurrencyData({convertData}));

  expect(endState.convertData.result).toBe(3382.70295);
  expect(endState.convertData.query.amount).toBe(55);
  expect(endState.convertData.query.from).toBe("USD");
});

test('correct convert history should be added', () => {
  const convertHistory = {from: 'USD', to: 'RUB', amount: 10, result: 615.0369};

  const endState = converterReducer(startState, setConvertHistory({convertHistory}));
  expect(endState.convertHistory[0].from).toBe('USD');
  expect(endState.convertHistory[0].to).toBe('RUB');
  expect(endState.convertHistory[0].amount).toBe(10);
  expect(endState.convertHistory[0].result).toBe(615.0369);
});

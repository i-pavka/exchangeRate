import {
  changeBaseCurrency,
  DashboardInitialStateType,
  dashboardReducer,
  ExchangeDataType, setExchangeData,
  toggleLoadingDashboard
} from "../d2-bll/dashboardReducer";

let startState: DashboardInitialStateType;

beforeEach(() => {
  startState = {
    isLoading: false,
    exchangeData: {
      base: "RUB",
    } as ExchangeDataType,
  }

})
test('correct toggle loading dashboard should be set', () => {
  const endState = dashboardReducer(startState, toggleLoadingDashboard({isLoading: false}));
  expect(endState.isLoading).toBe(false);
});
test('exchange data should be added correct', () => {
  const exchangeData = {
    base: 'RUB',
    date: "2022-09-11",
    rates: [
      {
        key: 'USD',
        title: 'Доллар США',
        value: 3500
      }
    ],
    success: true,
    timestamp: 1672131141
  };

  const endState = dashboardReducer(startState, setExchangeData({exchangeData}));
  expect(endState.exchangeData.base).toBe('RUB');
  expect(endState.exchangeData.date).toBe("2022-09-11");
  expect(endState.exchangeData.success).toBe(true);
  expect(endState.exchangeData.timestamp).toBe(1672131141);
  expect(endState.exchangeData.rates[0].key).toBe("USD");
  expect(endState.exchangeData.rates[0].title).toBe('Доллар США');
  expect(endState.exchangeData.rates[0].value).toBe(3500);
});
test('change base currency should be correct', () => {

  const endState = dashboardReducer(startState, changeBaseCurrency({base: 'USD'}));
  expect(endState.exchangeData.base).toBe('USD');
});

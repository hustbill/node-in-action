
  // get api from AlertKey :  "VTS_RLS_API_4XXs_Production{api=POST-/cbp-web/cbps/replenish}

  // api: POST-/cbp-web/cbps/replenish

  const alertKey = 'VTS_RLS_API_4XXs_Production{api=POST-/cbp-web/cbps/replenish}'
  getApi = (alertKey) => {
    const alertApi = alertKey.split('api=')[0];
    console.log('alertApi' , alertApi);
    const api = alertApi.substring(0, alertApi.length - 1);
    return api;
  }

  const api = getApi(alertKey);
  console.log('api : ', api);
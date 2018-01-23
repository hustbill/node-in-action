const moment = require('moment');
const chartData = [
  {
    "AlertTime": "1516253900",
    "TotalCount": "27",
    "AskNowId": [
      "INC6295443"
    ],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516248764",
    "TotalCount": "8",
    "AskNowId": [
      "INC6295310"
    ],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516236781",
    "TotalCount": "18",
    "AskNowId": [],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516222789",
    "TotalCount": "95",
    "AskNowId": [],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516214964",
    "TotalCount": "1",
    "AskNowId": [],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516209242",
    "TotalCount": "2",
    "AskNowId": [],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516195477",
    "TotalCount": "26",
    "AskNowId": [],
    "JiraId": [],
    "__typename": "APIHeathData"
  },
  {
    "AlertTime": "1516194234",
    "TotalCount": "4",
    "AskNowId": [],
    "JiraId": [],
    "__typename": "APIHeathData"
  }
];


const parseData = (getAPIHealthData) => {
  let data = [];
  for (var i = 0; i < getAPIHealthData.length; i++) {
    let rowData = getAPIHealthData[i];
    const alertTime = moment.unix(rowData.AlertTime).utc().format('YYYY-MM-DD hh:mm A');
    const totalCount = parseInt(rowData.TotalCount, 10);
    data.push({"AlertTime" : alertTime, "TotalCount": totalCount});
  }
  return data;
}


const plotData = parseData(chartData);
console.log('plotData : ', JSON.stringify(plotData));


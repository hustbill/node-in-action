const _ = require("lodash");

const panel1_0ms = require("./data/panel1_0ms.json");
const panel1_10mins = require("./data/panel1_10mins.json");
const panel1_10s = require("./data/panel1_10s.json");
const panel1_1hr = require("./data/panel1_1hr.json");
const panel1_1min = require("./data/panel1_1min.json");
const panel1_1s = require("./data/panel1_1s.json");
const panel1_20mins = require("./data/panel1_20mins.json");
const panel1_20s = require("./data/panel1_20s.json");
const panel1_2s = require("./data/panel1_2s.json");
const panel1_30mins = require("./data/panel1_30mins.json");
const panel1_30s = require("./data/panel1_30s.json");
const panel1_3s = require("./data/panel1_3s.json");
const panel1_45mins = require("./data/panel1_45mins.json");
const panel1_4s = require("./data/panel1_4s.json");
const panel1_5min = require("./data/panel1_5min.json");
const panel1_5s = require("./data/panel1_5s.json");
const panel1_over1hr = require("./data/panel1_over1hr.json");

const panel2_0ms = require("./data/panel2_0ms.json");
const panel2_10mins = require("./data/panel2_10mins.json");
const panel2_10s = require("./data/panel2_10s.json");
const panel2_1hr = require("./data/panel2_1hr.json");
const panel2_1min = require("./data/panel2_1min.json");
const panel2_1s = require("./data/panel2_1s.json");
const panel2_20mins = require("./data/panel2_20mins.json");
const panel2_20s = require("./data/panel2_20s.json");
const panel2_2s = require("./data/panel2_2s.json");
const panel2_30mins = require("./data/panel2_30mins.json");
const panel2_30s = require("./data/panel2_30s.json");
const panel2_3s = require("./data/panel2_3s.json");
const panel2_45mins = require("./data/panel2_45mins.json");
const panel2_4s = require("./data/panel2_4s.json");
const panel2_5min = require("./data/panel2_5min.json");
const panel2_5s = require("./data/panel2_5s.json");
const panel2_over1hr = require("./data/panel2_over1hr.json");

const panel3_0ms = require("./data/panel3_0ms.json");
const panel3_10mins = require("./data/panel3_10mins.json");
const panel3_10s = require("./data/panel3_10s.json");
const panel3_1hr = require("./data/panel3_1hr.json");
const panel3_1min = require("./data/panel3_1min.json");
const panel3_1s = require("./data/panel3_1s.json");
const panel3_20mins = require("./data/panel3_20mins.json");
const panel3_20s = require("./data/panel3_20s.json");
const panel3_2s = require("./data/panel3_2s.json");
const panel3_30mins = require("./data/panel3_30mins.json");
const panel3_30s = require("./data/panel3_30s.json");
const panel3_3s = require("./data/panel3_3s.json");
const panel3_45mins = require("./data/panel3_45mins.json");
const panel3_4s = require("./data/panel3_4s.json");
const panel3_5min = require("./data/panel3_5min.json");
const panel3_5s = require("./data/panel3_5s.json");
const panel3_over1hr = require("./data/panel3_over1hr.json");

const panel4_0ms = require("./data/occ_4/panel4_0ms.json");
const panel4_2ms = require("./data/occ_4/panel4_2ms.json");
const panel4_4ms = require("./data/occ_4/panel4_4ms.json");
const panel4_5ms = require("./data/occ_4/panel4_5ms.json");
const panel4_10ms = require("./data/occ_4/panel4_10ms.json");
const panel4_20ms = require("./data/occ_4/panel4_20ms.json");
const panel4_40ms = require("./data/occ_4/panel4_40ms.json");
const panel4_50ms = require("./data/occ_4/panel4_50ms.json");
const panel4_100ms = require("./data/occ_4/panel4_100ms.json");
const panel4_200ms = require("./data/occ_4/panel4_200ms.json");
const panel4_300ms = require("./data/occ_4/panel4_300ms.json");
const panel4_400ms = require("./data/occ_4/panel4_400ms.json");
const panel4_500ms = require("./data/occ_4/panel4_500ms.json");
const panel4_1s = require("./data/occ_4/panel4_1s.json");
const panel4_2s = require("./data/occ_4/panel4_2s.json");
const panel4_4s = require("./data/occ_4/panel4_4s.json");
const panel4_3s = require("./data/occ_4/panel4_3s.json");
const panel4_5s = require("./data/occ_4/panel4_5s.json");
const panel4_20s = require("./data/occ_4/panel4_20s.json");
const panel4_10s = require("./data/occ_4/panel4_10s.json");
const panel4_30s = require("./data/occ_4/panel4_30s.json");
const panel4_5min = require("./data/occ_4/panel4_5min.json");
const panel4_1min = require("./data/occ_4/panel4_1min.json");
const panel4_10mins = require("./data/occ_4/panel4_10mins.json");
const panel4_20mins = require("./data/occ_4/panel4_20mins.json");
const panel4_45mins = require("./data/occ_4/panel4_45mins.json");
const panel4_30mins = require("./data/occ_4/panel4_30mins.json");
const panel4_1hr = require("./data/occ_4/panel4_1hr.json");
const panel4_over1hr = require("./data/occ_4/panel4_over1hr.json");

const aliasMap = {
  "0ms": "<=1s",
  "1s": "<=2s",
  "2s": "<=3s",
  "3s": "<=4s",
  "4s": "<=5s",
  "5s": "<=6s"
};

const printPanel1Data = () => {
  const sum_panel1_0ms = Object.values(panel1_0ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_10mins = Object.values(
    panel1_10mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel1_10s = Object.values(panel1_10s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_1hr = Object.values(panel1_1hr.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_1min = Object.values(panel1_1min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_1s = Object.values(panel1_1s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_20mins = Object.values(
    panel1_20mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel1_20s = Object.values(panel1_20s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_2s = Object.values(panel1_2s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_30mins = Object.values(
    panel1_30mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel1_30s = Object.values(panel1_30s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_3s = Object.values(panel1_3s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_45mins = Object.values(
    panel1_45mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel1_4s = Object.values(panel1_4s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_5min = Object.values(panel1_5min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_5s = Object.values(panel1_5s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel1_over1hr = Object.values(
    panel1_over1hr.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);

  console.log("Panel 1:");

  console.log("<= 1s,", sum_panel1_0ms);
  console.log("<= 10mins,", sum_panel1_10mins);
  console.log("<= 10s,", sum_panel1_10s);
  console.log("<= 1hr,", sum_panel1_1hr);
  console.log("<= 1min,", sum_panel1_1min);
  console.log("<= 2s,", sum_panel1_1s);
  console.log("<= 20mins,", sum_panel1_20mins);
  console.log("<= 20s,", sum_panel1_20s);
  console.log("<= 3s,", sum_panel1_2s);
  console.log("<= 30mins,", sum_panel1_30mins);
  console.log("<= 30s,", sum_panel1_30s);
  console.log("<= 4s,", sum_panel1_3s);
  console.log("<= 45mins,", sum_panel1_45mins);
  console.log("<= 5s,", sum_panel1_4s);
  console.log("<= 5min,", sum_panel1_5min);
  console.log("<= 6s,", sum_panel1_5s);
  console.log("> 1hr,", sum_panel1_over1hr);

  console.log();
};

const printPiePanelData = () => {
  console.log("Pie Chart:");
  console.log("Filtered Messages In (OCE, Prod):", 4044314061.5699325);
  console.log(
    "Total Messages In (auth_tokentrans_raw, OCE, Prod):",
    146095707.3100024
  );
  console.log(
    "Total Messages In (auth_cat_raw, OCE, Prod):",
    193356022.85999924
  );
  console.log(
    "Total Messages In (auth_psr_raw, OCE, Prod):",
    241904422.71000272
  );
  console.log(
    "Total Messages In (auth_drp_raw, OCE, Prod):",
    43711.349999999635
  );
  console.log();
};

const printPanel2Data = () => {
  const sum_panel2_0ms = Object.values(panel2_0ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_10mins = Object.values(
    panel2_10mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel2_10s = Object.values(panel2_10s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_1hr = Object.values(panel2_1hr.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_1min = Object.values(panel2_1min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_1s = Object.values(panel2_1s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_20mins = Object.values(
    panel2_20mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel2_20s = Object.values(panel2_20s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_2s = Object.values(panel2_2s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_30mins = Object.values(
    panel2_30mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel2_30s = Object.values(panel2_30s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_3s = Object.values(panel2_3s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_45mins = Object.values(
    panel2_45mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel2_4s = Object.values(panel2_4s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_5min = Object.values(panel2_5min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_5s = Object.values(panel2_5s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel2_over1hr = Object.values(
    panel2_over1hr.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);

  console.log("Panel 2:");

  console.log("<= 1s,", sum_panel2_0ms);
  console.log("<= 10mins,", sum_panel2_10mins);
  console.log("<= 10s,", sum_panel2_10s);
  console.log("<= 1hr,", sum_panel2_1hr);
  console.log("<= 1min,", sum_panel2_1min);
  console.log("<= 2s,", sum_panel2_1s);
  console.log("<= 20mins,", sum_panel2_20mins);
  console.log("<= 20s,", sum_panel2_20s);
  console.log("<= 3s,", sum_panel2_2s);
  console.log("<= 30mins,", sum_panel2_30mins);
  console.log("<= 30s,", sum_panel2_30s);
  console.log("<= 4s,", sum_panel2_3s);
  console.log("<= 45mins,", sum_panel2_45mins);
  console.log("<= 5s,", sum_panel2_4s);
  console.log("<= 5min,", sum_panel2_5min);
  console.log("<= 6s,", sum_panel2_5s);
  console.log("> 1hr,", sum_panel2_over1hr);
};

const printPanel3Data = () => {
  const sum_panel3_0ms = Object.values(panel3_0ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_10mins = Object.values(
    panel3_10mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel3_10s = Object.values(panel3_10s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_1hr = Object.values(panel3_1hr.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_1min = Object.values(panel3_1min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_1s = Object.values(panel3_1s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_20mins = Object.values(
    panel3_20mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel3_20s = Object.values(panel3_20s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_2s = Object.values(panel3_2s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_30mins = Object.values(
    panel3_30mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel3_30s = Object.values(panel3_30s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_3s = Object.values(panel3_3s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_45mins = Object.values(
    panel3_45mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel3_4s = Object.values(panel3_4s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_5min = Object.values(panel3_5min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_5s = Object.values(panel3_5s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel3_over1hr = Object.values(
    panel3_over1hr.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);

  console.log("Panel 3:");

  console.log("<= 1s,", sum_panel3_0ms);
  console.log("<= 10mins,", sum_panel3_10mins);
  console.log("<= 10s,", sum_panel3_10s);
  console.log("<= 1hr,", sum_panel3_1hr);
  console.log("<= 1min,", sum_panel3_1min);
  console.log("<= 2s,", sum_panel3_1s);
  console.log("<= 20mins,", sum_panel3_20mins);
  console.log("<= 20s,", sum_panel3_20s);
  console.log("<= 3s,", sum_panel3_2s);
  console.log("<= 30mins,", sum_panel3_30mins);
  console.log("<= 30s,", sum_panel3_30s);
  console.log("<= 4s,", sum_panel3_3s);
  console.log("<= 45mins,", sum_panel3_45mins);
  console.log("<= 5s,", sum_panel3_4s);
  console.log("<= 5min,", sum_panel3_5min);
  console.log("<= 6s,", sum_panel3_5s);
  console.log("> 1hr,", sum_panel3_over1hr);
};

const printPanel4Data = () => {
  const sum_panel4_0ms = Object.values(panel4_0ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_2ms = Object.values(panel4_2ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_4ms = Object.values(panel4_4ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_5ms = Object.values(panel4_5ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_10ms = Object.values(panel4_10ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_20ms = Object.values(panel4_20ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_40ms = Object.values(panel4_40ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_50ms = Object.values(panel4_50ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_100ms = Object.values(panel4_100ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_200ms = Object.values(panel4_200ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_300ms = Object.values(panel4_300ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_400ms = Object.values(panel4_400ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_500ms = Object.values(panel4_500ms.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_1s = Object.values(panel4_1s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_2s = Object.values(panel4_2s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_4s = Object.values(panel4_4s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_3s = Object.values(panel4_3s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_5s = Object.values(panel4_5s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_20s = Object.values(panel4_20s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_10s = Object.values(panel4_10s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_30s = Object.values(panel4_30s.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_5min = Object.values(panel4_5min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_1min = Object.values(panel4_1min.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_10mins = Object.values(
    panel4_10mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel4_20mins = Object.values(
    panel4_20mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel4_45mins = Object.values(
    panel4_45mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel4_30mins = Object.values(
    panel4_30mins.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);
  const sum_panel4_1hr = Object.values(panel4_1hr.Results[0].Value).reduce(
    (acc, v) => acc + v,
    0
  );
  const sum_panel4_over1hr = Object.values(
    panel4_over1hr.Results[0].Value
  ).reduce((acc, v) => acc + v, 0);

  console.log("Panel 4:");

  console.log("<= 1ms,", sum_panel4_0ms);
  console.log("<= 2ms,", sum_panel4_2ms);
  console.log("<= 4ms,", sum_panel4_4ms);
  console.log("<= 5ms,", sum_panel4_5ms);
  console.log("<= 10ms,", sum_panel4_10ms);
  console.log("<= 20ms,", sum_panel4_20ms);
  console.log("<= 40ms,", sum_panel4_40ms);
  console.log("<= 50ms,", sum_panel4_50ms);
  console.log("<= 100ms,", sum_panel4_100ms);
  console.log("<= 200ms,", sum_panel4_200ms);
  console.log("<= 300ms,", sum_panel4_300ms);
  console.log("<= 400ms,", sum_panel4_400ms);
  console.log("<= 500ms,", sum_panel4_500ms);
  console.log("<= 1s,", sum_panel4_1s);
  console.log("<= 2s,", sum_panel4_2s);
  console.log("<= 4s,", sum_panel4_4s);
  console.log("<= 3s,", sum_panel4_3s);
  console.log("<= 5s,", sum_panel4_5s);
  console.log("<= 20s,", sum_panel4_20s);
  console.log("<= 10s,", sum_panel4_10s);
  console.log("<= 30s,", sum_panel4_30s);
  console.log("<= 5min,", sum_panel4_5min);
  console.log("<= 1min,", sum_panel4_1min);
  console.log("<= 10mins,", sum_panel4_10mins);
  console.log("<= 20mins,", sum_panel4_20mins);
  console.log("<= 45mins,", sum_panel4_45mins);
  console.log("<= 30mins,", sum_panel4_30mins);
  console.log("<= 1hr,", sum_panel4_1hr);
  console.log("> 1hr,", sum_panel4_over1hr);
};

printPanel1Data();
printPiePanelData();
printPanel2Data();
console.log();
printPanel3Data();
console.log();
printPanel4Data();

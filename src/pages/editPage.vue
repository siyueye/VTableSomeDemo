<template>
	<div ref="editRef" id ="table" style="width: 1580px; height: 800px"></div>
</template>
<script setup>
import dayjs from "dayjs";
import { PivotTable, register, themes } from "@visactor/vtable";
import { InputEditor } from "@visactor/vtable-editors";
import { onMounted, ref, shallowRef } from "vue";
const editRef = ref();
const tableInstance = shallowRef();
const data = {};
const roomCategoryCluster = {};

roomCategoryCluster.value = [
  {
    value: "1725420560616787970",
    label: "测试房源分组1",
  },
  {
    value: "1725421011508662274",
    label: "测试房源分组2",
  },
];
data.value = [
  {
    adjustPriceTemplateTaskIds: null,
    adjustPriceTemplateIds: null,
    roomCategoryClusterIds: null,
    adjustPriceTemplateTaskId: "1726896571681787906",
    adjustPriceTemplateId: "1726896571337854978",
    roomCategoryClusterId: "1725420560616787970",
    campId: "17",
    day: 0,
    executeTime: "16:30",
    coefficient: 90,
  },
  {
    adjustPriceTemplateTaskIds: null,
    adjustPriceTemplateIds: null,
    roomCategoryClusterIds: null,
    adjustPriceTemplateTaskId: "1726896572759724033",
    adjustPriceTemplateId: "1726896571337854978",
    roomCategoryClusterId: "1725421011508662274",
    campId: "17",
    day: 0,
    executeTime: "16:30",
    coefficient: 90,
  },
  {
    adjustPriceTemplateTaskIds: null,
    adjustPriceTemplateIds: null,
    roomCategoryClusterIds: null,
    adjustPriceTemplateTaskId: "1726896572902330369",
    adjustPriceTemplateId: "1726896571337854978",
    roomCategoryClusterId: "1725420560616787970",
    campId: "17",
    day: 1,
    executeTime: "20:00",
    coefficient: 80,
  },
  {
    adjustPriceTemplateTaskIds: null,
    adjustPriceTemplateIds: null,
    roomCategoryClusterIds: null,
    adjustPriceTemplateTaskId: "1726896573007187969",
    adjustPriceTemplateId: "1726896571337854978",
    roomCategoryClusterId: "1725421011508662274",
    campId: "17",
    day: 1,
    executeTime: "21:10",
    coefficient: 80,
  },
  {
    adjustPriceTemplateTaskIds: null,
    adjustPriceTemplateIds: null,
    roomCategoryClusterIds: null,
    adjustPriceTemplateTaskId: "1730109638809554945",
    adjustPriceTemplateId: "1726896571337854978",
    roomCategoryClusterId: "1725420560616787970",
    campId: "17",
    day: 0,
    executeTime: "14:20",
    coefficient: 70,
  },
  {
    adjustPriceTemplateTaskIds: null,
    adjustPriceTemplateIds: null,
    roomCategoryClusterIds: null,
    adjustPriceTemplateTaskId: "1730109638876663810",
    adjustPriceTemplateId: "1726896571337854978",
    roomCategoryClusterId: "1725421011508662274",
    campId: "17",
    day: 0,
    executeTime: "14:20",
    coefficient: 75,
  },
];
const getTime = (t) => {
  const item = t.split(":") || [];
  return dayjs().hour(item[0]).minute(t[1]).valueOf();
};
const executeTimeArr = data.value
  .map((item) => item.executeTime)
  .sort((a, b) => getTime(a) - getTime(b));
const daysObj = {};
data.value.map((item) => (daysObj[item.day] = true));
const getColumnTree = () => {
  const cols = [];
  for (let i in daysObj) {
    let item = {
      dimensionKey: "Day",
      value: "T" + i,
      children: roomCategoryCluster.value.map((item) => ({
        indicatorKey: item.value,
        value: item.label,
      })),
    };
    cols.push(item);
  }
  return cols;
};

const getRowTree = () => {
  return executeTimeArr.map((item) => ({ dimensionKey: "Time", value: item }));
};
const ret = executeTimeArr.map((item) => {
  let it = data.value.find((d) => d.executeTime == item);
  let tempid = roomCategoryCluster.value.find(
    (item) => item.value != it.roomCategoryClusterId
  );
//   const d: any = {};
const d= {};
  d[tempid.value] = "";
  d.Day = "T" + it.day;
  d.Time = it.executeTime;
  d[it.roomCategoryClusterId] = it.coefficient;
  return d;
});
const getIndicators = () => {
  return roomCategoryCluster.value.map((item) => ({
    indicatorKey: item.value + "",
    title: item.label,
    width: "auto",
    showSort: false,
    headerStyle: {
      fontWeight: "normal",
      fontSize: 14,
    },
    format: (rec) => {
      return rec && rec[item.value] ? rec[item.value] : "";
    },
    style: {
      padding: [10, 15, 10, 15],
    },
  }));
};
const input_editor = new InputEditor();
register.editor("input-editor", input_editor);
const option = {
  records: ret,
  rowTree: getRowTree(),
  columnTree: getColumnTree(),
  rows: [
    {
      dimensionKey: "Time",
      title: "时间段",
      headerStyle: Object.assign(
        {},
        {
          textStick: true,
        },
        // textStyle
      ),
    //   textStyle,
      width: "auto",
    },
  ],
  columns: [
    {
      dimensionKey: "Day",
      title: "Day",
      headerStyle: Object.assign(
        {},
        {
          textStick: true,
        },
        // textStyle,
        { fontSize: 13 }
      ),
      width: "auto",
    },
  ],
  corner: {
    titleOnDimension: "row",
    headerStyle: Object.assign(
      {},
      {
        textStick: true,
      },
    //   textStyle
    ),
    // textStyle,
  },
  indicators: getIndicators(),
  editor: "input-editor",
  editCellTrigger: "click",
  widthMode: "standard",
  heightMode: "autoHeight",
  select: { disableSelect: 1 },
  hover: { highlightMode: "row" },
  allowFrozenColCount: 2,
  showFrozenIcon: false,
  columnResizeMode: "none",
  autoFillWidth: true,
  theme: themes.DEFAULT.extends({
    frameStyle: {
      borderColor: "#ebeef5",
      // borderLineWidth:0
    },
  }),
};
console.log(option);


onMounted(() => {
  tableInstance.value = new PivotTable(editRef.value, option);

  tableInstance.value.on("click_cell", (params) => {
    console.log(params);
  });
});
</script>
<style scoped>
h1 {
  text-decoration: underline;
}
</style>

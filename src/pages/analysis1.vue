<template>
  <div ref="pivotTableRef" id="pivotTableRef" style="width: 1580px; height: 800px"></div>
</template>

<script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { PivotTable } from "@visactor/vtable";

const pivotTableRef = ref();
const tableInstance = shallowRef();
const records = [
    {
        "S_NORMITEM1": "河北银行",
        "S_NORMITEM2": "",
        "S_NORMITEM3": "支小再贷款",
        "S_LAYERITEM1": "利息",
        "S_LAYERITEM2": "应计单利",
        "F_AMT": 33564165.63,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "河北银行",
        "S_NORMITEM2": "",
        "S_NORMITEM3": "支小再贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期末数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "河北银行",
        "S_NORMITEM2": "",
        "S_NORMITEM3": "支小再贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期末数",
        "F_AMT": 3150680000,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "河北银行",
        "S_NORMITEM2": "",
        "S_NORMITEM3": "支小再贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期初数",
        "F_AMT": 3150680000,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "河北银行",
        "S_NORMITEM2": "",
        "S_NORMITEM3": "支小再贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期初数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "其他农村信用社",
        "S_NORMITEM3": "支农再贷款",
        "S_LAYERITEM1": "利息",
        "S_LAYERITEM2": "应计单利",
        "F_AMT": 59017476.94,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "其他农村信用社",
        "S_NORMITEM3": "支农再贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期末数",
        "F_AMT": 255704000,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "其他农村信用社",
        "S_NORMITEM3": "支农再贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期初数",
        "F_AMT": 255704000,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "流动性贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期末数",
        "F_AMT": 25485353.69,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "流动性贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期初数",
        "F_AMT": 25485353.69,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "金融稳定贷款",
        "S_LAYERITEM1": "利息",
        "S_LAYERITEM2": "应计单利",
        "F_AMT": 493161.67,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "金融稳定贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期末数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "金融稳定贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期初数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "流动性贷款",
        "S_LAYERITEM1": "利息",
        "S_LAYERITEM2": "应计单利",
        "F_AMT": 662619.19,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "流动性贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期末数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "其他农村信用社",
        "S_NORMITEM3": "支农再贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期末数",
        "F_AMT": 6039112400,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "流动性贷款",
        "S_LAYERITEM1": "展期",
        "S_LAYERITEM2": "期初数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "其他农村信用社",
        "S_NORMITEM3": "支农再贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期初数",
        "F_AMT": 6039112400,
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "金融稳定贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期末数",
        "F_AMT": "",
        "otherParam":"",
    },
    {
        "S_NORMITEM1": "信用社",
        "S_NORMITEM2": "城市信用社",
        "S_NORMITEM3": "金融稳定贷款",
        "S_LAYERITEM1": "账户余额",
        "S_LAYERITEM2": "期初数",
        "F_AMT": "",
        "otherParam":"",
    }
];
const rowTree =  [
      {
        dimensionKey: 'S_NORMITEM1',
        value: '河北银行',
        hierarchyState: 'expand',
        children: [
          {
            dimensionKey: 'S_NORMITEM3',
            value: '支小再贷款',
          }
        ]
      },
      {
        dimensionKey: 'S_NORMITEM1',
        value: '信用社',
        hierarchyState: 'expand',
        children: [
          {
            dimensionKey: 'S_NORMITEM2',
            value: '城市信用社',
            hierarchyState: 'expand',
            children: [
              {
                dimensionKey: 'S_NORMITEM3',
                value: '流动性贷款',
                hierarchyState: 'expand',
              },
              {
                dimensionKey: 'S_NORMITEM3',
                value: '金融稳定贷款',
                hierarchyState: 'expand',
              }
            ]
          },
          {
            dimensionKey: 'S_NORMITEM2',
            value: '其他农村信用社',
            hierarchyState: 'expand',
            children: [
              {
                dimensionKey: 'S_NORMITEM2',
                value: '支农再贷款',
                hierarchyState: 'expand',
              }
            ]
          }
        ]
      },
    ];
const option = {
    records: records,
     rowTree:rowTree,
    rowExpandLevel:3,
    rows: ["S_NORMITEM1","S_NORMITEM2","S_NORMITEM3"],
    columns: [
      {
        dimensionKey: 'S_LAYERITEM1',
        title: 'S_LAYERITEM1',
        headerStyle: {
          textStick: true
        },
        width: 'auto'
      },
      {
        dimensionKey: 'S_LAYERITEM2',
        title: 'S_LAYERITEM2',
        headerStyle: {
          textStick: true
        },
        width: 'auto'
      }
    ],
    indicators: [
      {
        indicatorKey: 'F_AMT',
        width: 'auto',
        showSort: false,
        headerStyle: {
          fontWeight: 'normal'
        },
        format: rec => {
          return  Number(rec).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //千位分隔符并强制保留两位小数
        },
        style: {
          padding: [16, 28, 16, 28],
          color(args) {
            if (args.dataValue >= 0) return 'black';
            return 'red';
          }
        }
      },
      
    ],
    corner: {
      titleOnDimension: 'row',
      headerStyle: {
        textStick: true
      }
    },
    dataConfig: {
      sortRules:[
        {
          sortField: 'S_LAYERITEM1',
          sortBy: ['账户余额','本期发生额','展期','逾期','停息挂账','利息','调整金额'],
         },
         {
          sortField: 'S_NORMITEM1',
          sortBy: ['河北银行','信用社'],
         }
      ],
      totals: {
        row: {
          showGrandTotals: true,
          showSubTotals: true,
          subTotalsDimensions: ['S_NORMITEM1','S_NORMITEM2','S_NORMITEM3'],
          subTotalLabel: '',
          showGrandTotalsonTop:false //汇总值显示在上
        }
      }
    },
    rowHierarchyType: 'tree',
    widthMode: 'standard'
  };
  function filterJsonArray(jsonArray, filterJson) {
    var resultArray = [];
    jsonArray.forEach(function(val,index,args){
      var match = true;
      Object.keys(filterJson).forEach((key)=>
        {
          if(filterJson[key]!== val[key]){
            match = false;
        }
      })
      if (match) {
        resultArray.push(val);
      }
      });
    return resultArray;
}

onMounted(() => {
  tableInstance.value = new PivotTable(pivotTableRef.value, option);

  tableInstance.value.on("click_cell", (args) => {
    debugger
    var selHeadJason = {};
    
      args.cellHeaderPaths.rowHeaderPaths.forEach(function(val,index,args){
      if(val.dimensionKey!=undefined){
        selHeadJason[`${val.dimensionKey}`] = val.value
      }
      });
      args.cellHeaderPaths.colHeaderPaths.forEach(function(val,index,args){
      if(val.dimensionKey!=undefined){
        selHeadJason[`${val.dimensionKey}`] = val.value
      }

      });

      const conArr = filterJsonArray(records,selHeadJason);
      console.log(conArr)
  });
});
</script>

<style scoped></style>

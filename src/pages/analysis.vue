<template>
    <div ref="pivotTableRef" id="pivotTableRef" style="width: 1580px; height: 800px"></div>
  </template>
  
  <script setup>
    import { onMounted, ref, shallowRef } from "vue";
    import { PivotTable } from "@visactor/vtable";
  
  const pivotTableRef = ref();
  const tableInstance = shallowRef();
  const records = [
    {"NORMITEM1":"河北银行",
    "NORMITEM2":"",
    "NORMITEM3":"支小再贷款",
    "LAYERITEM1":"账户余额",
    "LAYERITEM2":"期末数",
    "F_A":31506,
    },
    {"NORMITEM1":"河北银行",
    "NORMITEM2":"",
    "NORMITEM3":"支小再贷款",
    "LAYERITEM1":"账户余额",
    "LAYERITEM2":"期初数",
    "F_A":31506},
    {"NORMITEM1":"河北银行",
    "NORMITEM2": "",
    "NORMITEM3":"支小再贷款",
    "LAYERITEM1":"利息",
    "LAYERITEM2":"应计单利",
    "F_A":33565.63,
    }
];
 
  const option = {
      records: records,
      rowTree: [
        {
          dimensionKey: 'NORMITEM1',
          value: '河北银行',
          hierarchyState: 'expand',
          children: [
            {
              dimensionKey: 'NORMITEM3',
              value: '支小再贷款',
            }
          ]
        }
      ],
      rowExpandLevel:3,
      rows: ["NORMITEM1","NORMITEM2","NORMITEM3"],
      columns: [
        {
          dimensionKey: 'LAYERITEM1',
          title: 'LAYERITEM1',
          headerStyle: {
            textStick: true
          },
          width: 'auto'
        },
        {
          dimensionKey: 'LAYERITEM2',
          title: 'LAYERITEM2',
          headerStyle: {
            textStick: true
          },
          width: 'auto'
        }
      ],
      indicators: [
        {
          indicatorKey: 'F_A',
          width: 'auto',
          showSort: false,
          headerStyle: {
            fontWeight: 'normal'
          },
          format: rec => {
            return '$' + Number(rec).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //千位分隔符并强制保留两位小数
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
        totals: {
          row: {
            showGrandTotals: true,
            showSubTotals: true,
            subTotalsDimensions: ['NORMITEM1','NORMITEM2','NORMITEM3'],
            subTotalLabel: '',
            showGrandTotalsonTop:false //汇总值显示在上
          }
        }
      },
      rowHierarchyType: 'tree',
      widthMode: 'standard'
    };
  
  onMounted(() => {
    tableInstance.value = new PivotTable(pivotTableRef.value, option);
  
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);
    });
  });
  </script>
  
  <style scoped></style>
  
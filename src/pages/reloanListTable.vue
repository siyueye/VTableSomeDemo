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
      region: '中南',
      province: '广东',
      year: '2016',
      quarter: '2016-Q1',
      sales: 1243,
      profit: 546
    },
    {
      region: '中南',
      province: '广东',
      year: '2016',
      quarter: '2016-Q2',
      sales: 2243,
      profit: 169
    },
    {
      region: '中南',
      province: '广西',
      year: '2016',
      quarter: '2016-Q1',
      sales: 3043,
      profit: 1546
    },
    {
      region: '中南',
      province: '广西',
      year: '2016',
      quarter: '2016-Q2',
      sales: 1463,
      profit: 609
    },
    {
      region: '华东',
      province: '上海',
      year: '2016',
      quarter: '2016-Q1',
      sales: 4003,
      profit: 1045
    },
    {
      region: '华东',
      province: '上海',
      year: '2016',
      quarter: '2016-Q2',
      sales: 5243,
      profit: 3169
    },
    {
      region: '华东',
      province: '山东',
      year: '2016',
      quarter: '2016-Q1',
      sales: 4543,
      profit: 3456
    },
    {
      region: '华东',
      province: '山东',
      year: '2016',
      quarter: '2016-Q2',
      sales: 6563,
      profit: 3409
    }
  ];
  const columnTree=[
    {
      dimensionKey: 'year',
      value: '2016',
      children: [
        {
          dimensionKey: 'quarter',
          value: '2016-Q1',
          children: [
            {
              indicatorKey: 'sales',
              value: 'sales'
            },
            {
              indicatorKey: 'profit',
              value: 'profit'
            }
          ]
        },
        {
          dimensionKey: 'quarter',
          value: '2016-Q2',
          children: [
            {
              indicatorKey: 'sales',
              value: 'sales'
            },
            {
              indicatorKey: 'profit',
              value: 'profit'
            }
          ]
        }
      ]
    }
  ];
const rowTree =[
    {
      dimensionKey: 'region',
      value: '中南',
      hierarchyState: 'expand',
      children: [
        {
          dimensionKey: 'province',
          value: '广东',
          hierarchyState: 'collapse',
        },
        {
          dimensionKey: 'province',
          value: '广西',
          hierarchyState: 'collapse'
        }
      ]
    },
    {
      dimensionKey: 'region',
      value: '华东',
      children: [
        {
          dimensionKey: 'province',
          value: '上海'
        },
        {
          dimensionKey: 'province',
          value: '山东'
        }
      ]
    }
  ];
const option = {
  rowTree: rowTree,
  columnTree: columnTree,
  indicators: ['sales', 'profit'],
  enableDataAnalysis:true,
  corner: {
    titleOnDimension: 'none'
  },
  rowHierarchyType: 'tree',
  rowHierarchyIndent: 20,//子节点单元格中显示内容相比其父节点内容的缩进距离。
  rowExpandLevel: 1,//初始化展开层数。
  rowHierarchyTextStartAlignment: true,//同层级的结点是否按文字对齐 如没有收起展开图标的节点和有图标的节点文字对齐 默认 false
  records: records,
  widthMode:'autoWidth',
  dataConfig: {
        totals: {
          row: {
            showGrandTotals: true,
            showSubTotals: true,
            subTotalsDimensions: ['region'],
            grandTotalLabel: 'Row Totals',
            subTotalLabel: 'Sub Totals',
            showGrandTotalsOnTop: true //汇总值显示在上
          },
          column: {
            showGrandTotals: true,
            showSubTotals: true,
            subTotalsDimensions: ['quarter'],
            grandTotalLabel: 'Column Totals',
            subTotalLabel: 'Sub Totals',
           
          }
        }
      },
     
};

  
  onMounted(() => {
    tableInstance.value = new PivotTable(pivotTableRef.value, option);
  
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);
    });
  });
  </script>
  
  <style scoped></style>
  
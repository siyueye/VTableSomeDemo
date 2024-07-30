<template>
    <div ref="pivotTableRef" style="width: 1580px; height: 800px"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { PivotTable } from "@visactor/vtable";
  
  const pivotTableRef = ref();
  const tableInstance = shallowRef();
  const data = [
  {
    Region: 'Central',
    Category: 'Furniture',
    Quantity: '16'
  },
  {
    Region: 'Central',
    Category: 'Furniture',
    Quantity: '4'
  },
  {
    Region: 'Central',
    Category: 'Office Supplies',
    Sales: '37.90399980545044'
  },
  {
    Region: 'Central',
    Category: 'Office Supplies',
    Sales: '62.22999954223633'
  },
  {
    Region: 'Central',
    Category: 'Technology',
    Quantity: '10'
  },
  {
    Region: 'Central',
    Category: 'Technology',
    Quantity: '4'
  },
  {
    Region: 'East',
    Category: 'Furniture',
    Quantity: '7'
  },
  {
    Region: 'East',
    Category: 'Furniture',
    Quantity: '18'
  },
  {
    Region: 'East',
    Category: 'Office Supplies',
    Quantity: '7'
  },
  {
    Region: 'East',
    Category: 'Office Supplies',
    Quantity: '17'
  },
  {
    Region: 'East',
    Category: 'Office Supplies',
    Quantity: '7'
  },
  {
    Region: 'East',
    Category: 'Office Supplies',
    Quantity: '17'
  },
  {
    Region: 'South',
    Category: 'Furniture',
    Quantity: '4'
  },
  {
    Region: 'South',
    Category: 'Furniture',
    Quantity: '6'
  },
  {
    Region: 'South',
    Category: 'Technology',
    Profit: '4.361999988555908'
  },
  {
    Region: 'South',
    Category: 'Technology',
    Profit: '280.58800506591797'
  }
];

const option = {
  records: data,
  rows: [
    {
      dimensionKey: 'Category',
      title: 'Category',
      drillDown: true,
      headerStyle: {
        textStick: true
      },
      width: 'auto'
    }
  ],
  columns: [
    {
      dimensionKey: 'Region',
      title: 'Region',
      headerStyle: {
        textStick: true
      },
      width: 'auto'
    }
  ],
  indicators: [
    {
      indicatorKey: 'Quantity',
      title: 'Quantity',
      width: 'auto',
      showSort: false,
      headerStyle: {
        fontWeight: 'normal'
      },
      style: {
        padding: [16, 28, 16, 28],
        color(args) {
          if (args.dataValue >= 0) return 'black';
          return 'red';
        }
      }
    },
    {
      indicatorKey: 'Sales',
      title: 'Sales',
      width: 'auto',
      showSort: false,
      headerStyle: {
        fontWeight: 'normal'
      },
      format: rec => {
        return '$' + Number(rec).toFixed(2);
      },
      style: {
        padding: [16, 28, 16, 28],
        color(args) {
          if (args.dataValue >= 0) return 'black';
          return 'red';
        }
      }
    },
    {
      indicatorKey: 'Profit',
      title: 'Profit',
      width: 'auto',
      showSort: false,
      headerStyle: {
        fontWeight: 'normal'
      },
      format: rec => {
        return '$' + Number(rec).toFixed(2);
      },
      style: {
        padding: [16, 28, 16, 28],
        color(args) {
          if (args.dataValue >= 0) return 'black';
          return 'red';
        }
      }
    }
  ],
  corner: {
    titleOnDimension: 'row',
    headerStyle: {
      textStick: true
    }
  },
  widthMode: 'standard'
};
  
const newData = [
  {
    Region: 'Central',
    Category: 'Furniture',
    Quantity: '16',
    'Sub-Category': 'Chairs'
  },
  {
    Region: 'Central',
    Category: 'Furniture',
    Quantity: '4',
    'Sub-Category': 'Tables'
  },
  {
    Region: 'Central',
    Category: 'Office Supplies',
    Sales: '37.90399980545044',
    'Sub-Category': 'Paper'
  },
  {
    Region: 'Central',
    Category: 'Office Supplies',
    Sales: '62.22999954223633',
    'Sub-Category': 'Appliances'
  },
  {
    Region: 'Central',
    Category: 'Technology',
    Quantity: '10',
    'Sub-Category': 'Phones'
  },
  {
    Region: 'Central',
    Category: 'Technology',
    Quantity: '4',
    'Sub-Category': 'Accessories'
  },
  {
    Region: 'East',
    Category: 'Furniture',
    Quantity: '7',
    'Sub-Category': 'Bookcases'
  },
  {
    Region: 'East',
    Category: 'Furniture',
    Quantity: '18',
    'Sub-Category': 'Furnishings'
  },
  {
    Region: 'East',
    Category: 'Office Supplies',
    Quantity: '7',
    'Sub-Category': 'Paper'
  },
  {
    Region: 'East',
    Category: 'Office Supplies',
    Quantity: '17',
    'Sub-Category': 'Binders'
  },
  {
    Region: 'South',
    Category: 'Furniture',
    Quantity: '4',
    'Sub-Category': 'Furnishings'
  },
  {
    Region: 'South',
    Category: 'Furniture',
    Quantity: '6',
    'Sub-Category': 'Tables'
  },
  {
    Region: 'South',
    Category: 'Technology',
    Profit: '4.361999988555908',
    'Sub-Category': 'Accessories'
  },
  {
    Region: 'South',
    Category: 'Technology',
    Profit: '280.58800506591797',
    'Sub-Category': 'Phones'
  }
];
  
  onMounted(() => {
    tableInstance.value = new PivotTable(pivotTableRef.value, option);
  
    tableInstance.value.on('drillmenu_click', args => {
        if (args.drillDown) {
            if (args.dimensionKey === 'Category') {
                debugger 
                console.log(args.col);
                console.log(args.row);
            tableInstance.value.updateOption({
                records: newData,
                rows: [
                {
                    dimensionKey: 'Category',
                    title: 'Category',
                    drillUp: true,
                    headerStyle: {
                    textStick: true
                    },
                    width: 'auto'
                },
                {
                    dimensionKey: 'Sub-Category',
                    title: 'Sub-Catogery',
                    headerStyle: {
                    textStick: true
                    },
                    width: 'auto'
                }
                ],
                columns: [
                {
                    dimensionKey: 'Region',
                    title: 'Region',
                    headerStyle: {
                    textStick: true
                    },
                    width: 'auto'
                }
                ],
                indicators: [
                {
                    indicatorKey: 'Quantity',
                    title: 'Quantity',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                    fontWeight: 'normal'
                    },
                    style: {
                    padding: [16, 28, 16, 28],
                    color(args) {
                        if (args.dataValue >= 0) return 'black';
                        return 'red';
                    }
                    }
                },
                {
                    indicatorKey: 'Sales',
                    title: 'Sales',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                    fontWeight: 'normal'
                    },
                    format: rec => {
                    return '$' + Number(rec).toFixed(2);
                    },
                    style: {
                    padding: [16, 28, 16, 28],
                    color(args) {
                        if (args.dataValue >= 0) return 'black';
                        return 'red';
                    }
                    }
                },
                {
                    indicatorKey: 'Profit',
                    title: 'Profit',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                    fontWeight: 'normal'
                    },
                    format: rec => {
                    return '$' + Number(rec).toFixed(2);
                    },
                    style: {
                    padding: [16, 28, 16, 28],
                    color(args) {
                        if (args.dataValue >= 0) return 'black';
                        return 'red';
                    }
                    }
                }
                ],
                corner: {
                titleOnDimension: 'row',
                headerStyle: {
                    textStick: true
                }
                },
                widthMode: 'standard'
            });
            }
        } else if (args.drillUp) {
            if (args.dimensionKey === 'Category') {
            tableInstance.value.updateOption({
                records: data,
                rows: [
                {
                    dimensionKey: 'Category',
                    title: 'Category',
                    drillDown: true,
                    headerStyle: {
                    textStick: true
                    },
                    width: 'auto'
                }
                ],
                columns: [
                {
                    dimensionKey: 'Region',
                    title: 'Region',
                    headerStyle: {
                    textStick: true
                    },
                    width: 'auto'
                }
                //  {
                //    "dimensionKey": "Order Year",
                //     "title": "Order Year",
                //     "headerStyle": {
                //         "textStick": true
                //     },
                //     "width": "auto",
                // },
                ],
                indicators: [
                {
                    indicatorKey: 'Quantity',
                    title: 'Quantity',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                    fontWeight: 'normal'
                    },
                    style: {
                    padding: [16, 28, 16, 28],
                    color(args) {
                        if (args.dataValue >= 0) return 'black';
                        return 'red';
                    }
                    }
                },
                {
                    indicatorKey: 'Sales',
                    title: 'Sales',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                    fontWeight: 'normal'
                    },
                    format: rec => {
                    return '$' + Number(rec).toFixed(2);
                    },
                    style: {
                    padding: [16, 28, 16, 28],
                    color(args) {
                        if (args.dataValue >= 0) return 'black';
                        return 'red';
                    }
                    }
                },
                {
                    indicatorKey: 'Profit',
                    title: 'Profit',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                    fontWeight: 'normal'
                    },
                    format: rec => {
                    return '$' + Number(rec).toFixed(2);
                    },
                    style: {
                    padding: [16, 28, 16, 28],
                    color(args) {
                        if (args.dataValue >= 0) return 'black';
                        return 'red';
                    }
                    }
                }
                ],
                corner: {
                titleOnDimension: 'row',
                headerStyle: {
                    textStick: true
                }
                },
                widthMode: 'standard'
            });
            }
        }
        });
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);
    });
  });
  </script>
  
  <style scoped></style>
  
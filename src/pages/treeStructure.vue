<template>
   <div ref="pivotTableRef" id="pivotTableRef" style="width: 1580px; height: 800px"></div>
</template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { PivotTable } from "@visactor/vtable";
  import * as VTable from '@visactor/vtable';

const pivotTableRef = ref();
const tableInstance = shallowRef();

const data = [
  {
    10002: '36004.12287902832',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '36004.12287902832',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Bookcases'
  },
  {
    10002: '-1646.5089945793152',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-1646.5089945793152',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Bookcases'
  },
  {
    10002: '10899.361869812012',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '10899.361869812012',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Bookcases'
  },
  {
    10002: '1339.4909970760345',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '1339.4909970760345',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Bookcases'
  },
  {
    10002: '24157.178108215332',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '24157.178108215332',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Bookcases'
  },
  {
    10002: '-1997.9050402641296',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-1997.9050402641296',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Bookcases'
  },
  {
    10002: '43819.33399963379',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '43819.33399963379',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Bookcases'
  },
  {
    10002: '-1167.6339691877365',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-1167.6339691877365',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Bookcases'
  },
  {
    10002: '101781.32774353027',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '101781.32774353027',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Chairs'
  },
  {
    10002: '4027.58094894886',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '4027.58094894886',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Chairs'
  },
  {
    10002: '45176.44617843628',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '45176.44617843628',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Chairs'
  },
  {
    10002: '6612.087041854858',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '6612.087041854858',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Chairs'
  },
  {
    10002: '85230.64583206177',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '85230.64583206177',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Chairs'
  },
  {
    10002: '6592.718985438347',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '6592.718985438347',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Chairs'
  },
  {
    10002: '96260.68257522583',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '96260.68257522583',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Chairs'
  },
  {
    10002: '9357.765951037407',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '9357.765951037407',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Chairs'
  },
  {
    10002: '30072.729959964752',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '30072.729959964752',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Furnishings'
  },
  {
    10002: '7641.274031370878',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '7641.274031370878',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Furnishings'
  },
  {
    10002: '17306.68389749527',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '17306.68389749527',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Furnishings'
  },
  {
    10002: '3442.686985105276',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '3442.686985105276',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Furnishings'
  },
  {
    10002: '15254.369949698448',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '15254.369949698448',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Furnishings'
  },
  {
    10002: '-3906.223020374775',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-3906.223020374775',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Furnishings'
  },
  {
    10002: '29071.379935264587',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '29071.379935264587',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Furnishings'
  },
  {
    10002: '5881.414980173111',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '5881.414980173111',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Furnishings'
  },
  {
    10002: '84754.5619468689',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '84754.5619468689',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Tables'
  },
  {
    10002: '1482.6120259165764',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '1482.6120259165764',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Tables'
  },
  {
    10002: '43916.19310760498',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '43916.19310760498',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Tables'
  },
  {
    10002: '-4623.056034088135',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-4623.056034088135',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Tables'
  },
  {
    10002: '39154.970703125',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '39154.970703125',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Tables'
  },
  {
    10002: '-3559.6519879102707',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-3559.6519879102707',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Tables'
  },
  {
    10002: '39139.806856155396',
    10003: 'salesNum',
    230627170530016: 'Furniture',
    'salesNum': '39139.806856155396',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Tables'
  },
  {
    10002: '-11025.375987529755',
    10003: '230627170530022',
    230627170530016: 'Furniture',
    230627170530022: '-11025.375987529755',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Tables'
  },
  {
    10002: '30236.3359644413',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '30236.3359644413',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Appliances'
  },
  {
    10002: '8261.27197098732',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '8261.27197098732',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Appliances'
  },
  {
    10002: '19525.326094150543',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '19525.326094150543',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Appliances'
  },
  {
    10002: '4123.939019560814',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '4123.939019560814',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Appliances'
  },
  {
    10002: '23582.032926678658',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '23582.032926678658',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Appliances'
  },
  {
    10002: '-2638.6159623861313',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '-2638.6159623861313',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Appliances'
  },
  {
    10002: '34188.466317892075',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '34188.466317892075',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Appliances'
  },
  {
    10002: '8391.413984239101',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '8391.413984239101',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Appliances'
  },
  {
    10002: '9212.066044569016',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '9212.066044569016',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Art'
  },
  {
    10002: '2374.101003214717',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '2374.101003214717',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Art'
  },
  {
    10002: '4655.6219692230225',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '4655.6219692230225',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Art'
  },
  {
    10002: '1058.5850008130074',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1058.5850008130074',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Art'
  },
  {
    10002: '5765.340019583702',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '5765.340019583702',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Art'
  },
  {
    10002: '1195.1630011796951',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1195.1630011796951',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Art'
  },
  {
    10002: '7485.764034986496',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '7485.764034986496',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Art'
  },
  {
    10002: '1899.942004531622',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1899.942004531622',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Art'
  },
  {
    10002: '55961.11282122135',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '55961.11282122135',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Binders'
  },
  {
    10002: '16096.799980849028',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '16096.799980849028',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Binders'
  },
  {
    10002: '37030.34099626541',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '37030.34099626541',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Binders'
  },
  {
    10002: '3900.6622482538223',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '3900.6622482538223',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Binders'
  },
  {
    10002: '56923.28208118677',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '56923.28208118677',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Binders'
  },
  {
    10002: '-1043.632896721363',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '-1043.632896721363',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Binders'
  },
  {
    10002: '53497.99653959274',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '53497.99653959274',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Binders'
  },
  {
    10002: '11267.932148218155',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '11267.932148218155',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Binders'
  },
  {
    10002: '4118.099995136261',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '4118.099995136261',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Envelopes'
  },
  {
    10002: '1908.761996269226',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1908.761996269226',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Envelopes'
  },
  {
    10002: '3345.555993080139',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '3345.555993080139',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Envelopes'
  },
  {
    10002: '1465.4750101566315',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1465.4750101566315',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Envelopes'
  },
  {
    10002: '4636.871988296509',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '4636.871988296509',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Envelopes'
  },
  {
    10002: '1777.5259877443314',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1777.5259877443314',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Envelopes'
  },
  {
    10002: '4375.874011039734',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '4375.874011039734',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Envelopes'
  },
  {
    10002: '1812.4089943170547',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1812.4089943170547',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Envelopes'
  },
  {
    10002: '923.2159950733185',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '923.2159950733185',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Fasteners'
  },
  {
    10002: '275.19199895858765',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '275.19199895858765',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Fasteners'
  },
  {
    10002: '503.3160014152527',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '503.3160014152527',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Fasteners'
  },
  {
    10002: '173.71899946779013',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '173.71899946779013',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Fasteners'
  },
  {
    10002: '778.0299946069717',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '778.0299946069717',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Fasteners'
  },
  {
    10002: '236.6199992671609',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '236.6199992671609',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Fasteners'
  },
  {
    10002: '819.7179999351501',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '819.7179999351501',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Fasteners'
  },
  {
    10002: '263.98999811708927',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '263.98999811708927',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Fasteners'
  },
  {
    10002: '5078.726016759872',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '5078.726016759872',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Labels'
  },
  {
    10002: '2303.1279985904694',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '2303.1279985904694',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Labels'
  },
  {
    10002: '2353.179967880249',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '2353.179967880249',
    230627170530056: 'Sales',
    "orientation": 'South',
    230627170530068: 'Labels'
  },
  {
    10002: '1040.771997153759',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1040.771997153759',
    230627170530056: 'Profit',
    "orientation": 'South',
    230627170530068: 'Labels'
  },
  {
    10002: '2451.4719779491425',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '2451.4719779491425',
    230627170530056: 'Sales',
    "orientation": 'Central',
    230627170530068: 'Labels'
  },
  {
    10002: '1073.0799936652184',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1073.0799936652184',
    230627170530056: 'Profit',
    "orientation": 'Central',
    230627170530068: 'Labels'
  },
  {
    10002: '2602.934000492096',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '2602.934000492096',
    230627170530056: 'Sales',
    "orientation": 'East',
    230627170530068: 'Labels'
  },
  {
    10002: '1129.2839995622635',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '1129.2839995622635',
    230627170530056: 'Profit',
    "orientation": 'East',
    230627170530068: 'Labels'
  },
  {
    10002: '26663.717969417572',
    10003: 'salesNum',
    230627170530016: 'Office Supplies',
    'salesNum': '26663.717969417572',
    230627170530056: 'Sales',
    "orientation": 'West',
    230627170530068: 'Paper'
  },
  {
    10002: '12119.230026364326',
    10003: '230627170530022',
    230627170530016: 'Office Supplies',
    230627170530022: '12119.230026364326',
    230627170530056: 'Profit',
    "orientation": 'West',
    230627170530068: 'Paper'
  }
];


const option = {
  records: data,
  rowTree: [
    {
      dimensionKey: '230627170530016',
      value: 'Furniture',
      hierarchyState: 'expand',
      children: [
        {
          dimensionKey: '230627170530068',
          value: 'Bookcases',
          hierarchyState: 'collapse'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Chairs',
          hierarchyState: 'collapse'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Furnishings'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Tables'
        }
      ]
    },
    {
      dimensionKey: '230627170530016',
      value: 'Office Supplies',
      children: [
        {
          dimensionKey: '230627170530068',
          value: 'Appliances'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Art'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Binders'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Envelopes'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Fasteners'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Labels'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Paper'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Storage'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Supplies'
        }
      ]
    },
    {
      dimensionKey: '230627170530016',
      value: 'Technology',
      children: [
        {
          dimensionKey: '230627170530068',
          value: 'Accessories'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Copiers'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Machines'
        },
        {
          dimensionKey: '230627170530068',
          value: 'Phones'
        }
      ]
    }
  ],
  columnTree: [
    {
      dimensionKey: "orientation",
      value: 'West',
      children: [
        {
          dimensionKey: '230627170530056',
          value: 'Sales',
          indicatorKey: 'salesNum'
        },
        {
          dimensionKey: '230627170530056',
          value: 'Profit',
          indicatorKey: '230627170530022'
        }
      ]
    },
    {
      dimensionKey: "orientation",
      value: 'South',
      children: [
        {
          dimensionKey: '230627170530056',
          value: 'Sales',
          indicatorKey: 'salesNum'
        },
        {
          dimensionKey: '230627170530056',
          value: 'Profit',
          indicatorKey: '230627170530022'
        }
      ]
    },
    {
      dimensionKey: "orientation",
      value: 'Central',
      children: [
        {
          dimensionKey: '230627170530056',
          value: 'Sales',
          indicatorKey: 'salesNum'
        },
        {
          dimensionKey: '230627170530056',
          value: 'Profit',
          indicatorKey: '230627170530022'
        }
      ]
    },
    {
      dimensionKey: "orientation",
      value: 'East',
      children: [
        {
          dimensionKey: '230627170530056',
          value: 'Sales',
          indicatorKey: 'salesNum'
        },
        {
          dimensionKey: '230627170530056',
          value: 'Profit',
          indicatorKey: '230627170530022'
        }
      ]
    }
  ],
  rows: [
    {
      dimensionKey: '230627170530016',
      title: 'Catogery',
      width: 'auto',
      headerStyle: {
        textAlign: 'center',       
      },
    },
    {
      dimensionKey: '230627170530068',
      title: 'Sub-Catogery',
      width: 'auto',
      headerStyle: {
        textAlign: 'center',       
      },
    }
  ],
  columns: [
    {
      dimensionKey: "orientation",
      title: 'Region',
      headerType: 'link',
      headerStyle: {
        textAlign: 'center',       
      },
  
      width: 'auto'
    }
  ],
  indicators: [
    {
      indicatorKey: 'salesNum',
      title: 'Sales',
      width: 'auto',
      showSort: false,
      headerStyle: {
        fontWeight: 'normal'
      },
      format: (value, col, row, table) => {
        if(value!=null){
          console.log(value+","+col+","+row+",")
          console.log(table)
          const headerPaths = table.getCellHeaderPaths(col, row)
          const weidu = headerPaths.colHeaderPaths[0].value
          const orgRcd = table.getCellOriginRecord(col, row)
          console.log(orgRcd)
          if(weidu==='West'){
            return '%'+Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          }else if(weidu==='South'){
            return '@'+Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          }else if(weidu==='Central'){
            return '#'+Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          }else {
            return '$'+Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          }
          
        }
        
 },
          
      style: {
        padding: [16, 28, 16, 28],
        color(args) {
           //console.log(args)
           //console.log(args.dataValue+',colHeaderPaths：'+args.cellHeaderPaths.colHeaderPaths[0].value+','+args.cellHeaderPaths.colHeaderPaths[1].value+',rowHeaderPaths：'+args.cellHeaderPaths.rowHeaderPaths[0].value)
          if (args.dataValue >= 0) return 'black';
          return 'red';
        }
      }
    } ,
    {
      indicatorKey: '230627170530022',
      title: 'Profit',
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
   
  ],
  // indicators: [
  //   {
  //     indicatorKey: 'salesNum',
  //     title: 'Sales',
  //     width: 'auto',
  //     showSort: false,
  //     headerStyle: {
  //       fontWeight: 'normal'
  //     },
  //     // format: value => {
  //     //   if (value) return '$' + Number(value).toFixed(2);
  //     //   return '';
  //     // },
  //     format: rec => {
  //           return '$' + Number(rec).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //千位分隔符并强制保留两位小数
  //         },
  //自定义样式
  //     customLayout(args){
  //      // const newArrs = data.filter(item =>item.Region ==='South' && item.Category === 'Furniture');
  //                       const { col, row, table } = args
  //                       const { height, width } = table.getCellRect(col, row)
  //                       const record = table.getRecordByCell(col, row);
  //                       const container = new VTable.CustomLayout.Group({
  //                           height,
  //                           width:140,
  //                           //width: 'auto',
  //                           display: 'flex',
  //                           flexDirection: 'row',
  //                           flexWrap: 'nowrap',
  //                           alignItems: 'center',
  //                           justifyContent: 'center',
  //                       })
  //                       const bloggerName = new VTable.CustomLayout.Text({
  //                         //  text: record0===null ? null :(record0.orientation==='south'?record0.salesNum:0),
  //                        //  text: record!=undefined?(record[0].orientation==='South'?'*'+record[0].salesNum:'%'+record[0].salesNum):args.dataValue,
  //                        text: record!=undefined?(record[0].orientation==='South'?Number(args.dataValue).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'):args.dataValue.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')):args.dataValue,
  //                           fontSize: 13,
  //                           textAlign: 'center',
  //                       })
  //                       container.add(bloggerName)
  //                       return {
  //                           rootContainer: container,
  //                       }
  //                   },
  //     style: {
  //       padding: [16, 28, 16, 28],
  //       color(args) {
  //          //console.log(args)
  //          //console.log(args.dataValue+',colHeaderPaths：'+args.cellHeaderPaths.colHeaderPaths[0].value+','+args.cellHeaderPaths.colHeaderPaths[1].value+',rowHeaderPaths：'+args.cellHeaderPaths.rowHeaderPaths[0].value)
  //         if (args.dataValue >= 0) return 'black';
  //         return 'red';
  //       }
  //     }
  //   },
  //   {
  //     indicatorKey: '230627170530022',
  //     title: 'Profit',
  //     width: 'auto',
  //     showSort: false,
  //     headerStyle: {
  //       fontWeight: 'normal'
  //     },
      
  //     style: {
  //       padding: [16, 28, 16, 28],
  //       color(args) {
  //         if (args.dataValue >= 0) return 'black';
  //         return 'red';
  //       }
  //     }
  //   }
  // ],
  corner: {
    titleOnDimension: 'row',
    headerStyle: {
      textStick: true
    }
  },
  rowHierarchyType: 'tree',
  widthMode: 'standard',
  rowHierarchyIndent: 20,
  rowHierarchyTextStartAlignment: true
};

  onMounted(() => {
    var num1 = 0;
    console.log(num1.toFixed(2))
  tableInstance.value = new PivotTable(pivotTableRef.value, option);
  tableInstance.value.on("click_cell", (params) => {
    debugger
   // const newArrs = data.filter(item =>item.230627170530016 ==='Furniture' && item.gender === 'male');
    
   // console.log(newArrs);
    //console.log(getCellHeaderTreeNodes(params.col,params.row))
    console.log(params.originData);
   // debugger
   console.log("--------------");
    console.log(params);
  });
});

  
</script>
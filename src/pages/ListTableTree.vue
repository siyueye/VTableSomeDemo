<template>
    <div ref="pivotTableRef" style="width: 1580px; height: 800px"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { ListTable } from "@visactor/vtable";
  
  const pivotTableRef = ref();
  const tableInstance = shallowRef();
  
  const records = [
  {
    group: 'Human Resources Department',
    total_children: 30,
    monthly_expense: '$45000',
    new_hires_this_month: 6,
    resignations_this_month: 3,
    complaints_and_suggestions: 2,
    children: [
      {
        group: 'Recruiting Group',
        children: [
          {
            group: 'John Smith',
            position: 'Recruiting Manager',
            salary: '$8000'
          },
          {
            group: 'Emily Johnson',
            position: 'Recruiting Supervisor',
            salary: '$6000'
          },
          {
            group: 'Michael Davis',
            position: 'Recruiting Specialist',
            salary: '$4000'
          }
        ],
        total_children: 15,
        monthly_expense: '$25000',
        new_hires_this_month: 4,
        resignations_this_month: 2,
        complaints_and_suggestions: 1
      },
      {
        group: 'Training Group',
        children: [
          {
            group: 'Jessica Brown',
            position: 'Training Manager',
            salary: '$8000'
          },
          {
            group: 'Andrew Wilson',
            position: 'Training Supervisor',
            salary: '$6000'
          }
        ],
        total_children: 15,
        monthly_expense: '$20000',
        new_hires_this_month: 2,
        resignations_this_month: 1,
        complaints_and_suggestions: 1
      }
    ]
  }
];
const columns = [
  {
    field: 'group',
    title: 'department',
    width: 'auto',
    tree: true //展示为树形结构
  },
  {
    field: 'total_children',
    title: 'memebers count',
    width: 'auto',
    fieldFormat(rec) {
      if (rec?.['position']) {
        return `position:  ${rec['position']}`;
      } else return rec?.['total_children'];
    }
  },
  {
    field: 'monthly_expense',
    title: 'monthly expense',
    width: 'auto',
    fieldFormat(rec) {
      if (rec?.['salary']) {
        return `salary:  ${rec['salary']}`;
      } else return rec?.['monthly_expense'];
    }
  },
  {
    field: 'new_hires_this_month',
    title: 'new hires this month',
    width: 'auto'
  },
  {
    field: 'resignations_this_month',
    title: 'resignations this month',
    width: 'auto'
  },
  {
    field: 'complaints_and_suggestions',
    title: 'recived complaints counts',
    width: 'auto'
  }
];

const option = {
  records,
  columns,
  widthMode: 'standard'
};
  
  onMounted(() => {
    tableInstance.value = new ListTable(pivotTableRef.value, option);
  
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);
    });
  });
  </script>
  
  <style scoped></style>
  
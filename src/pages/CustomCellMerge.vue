<template>
    <div ref="listTableRef" id="CONTAINER_ID" style="width: 1580px; height: 800px"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { ListTable } from "@visactor/vtable";
  
const listTableRef = ref();
const tableInstance = shallowRef();

const generatePersons = count => {
  return Array.from(new Array(count)).map((_, i) => ({
    id: i + 1,
    email1: `${i + 1}@xxx.com`,
    name: `name${i + 1}`,
    date1: '2022-9-1日',
    tel: '000-0000-0000',
    sex: i % 2 === 0 ? 'boy' : 'girl',
    work: i % 2 === 0 ? 'back-end engineer' : 'front-end engineer',
    city: 'beijing'
  }));
};
const records = generatePersons(10);

const columns = [
    {
      field: 'id',
      title: 'ID ff',
      width: '1%',
      minWidth: 200,
      sort: true
    },
    {
      field: 'email1',
      title: 'email',
      width: 200,
      sort: true
    },
    {
      title: 'full name',
      columns: [
        {
          field: 'name',
          title: 'First Name',
          width: 200
        },
        {
          field: 'name',
          title: 'Last Name',
          width: 200
        }
      ]
    },
    {
      field: 'date1',
      title: 'birthday',
      width: 200
    },
    {
      field: 'sex',
      title: 'sex',
      width: 100
    },
    {
      field: 'tel',
      title: 'telephone',
      width: 150
    },
    {
      field: 'work',
      title: 'job',
      width: 200
    },
    {
      field: 'city',
      title: 'city',
      width: 150
    }
  ];


const option = {
  records,
  columns,
  widthMode:'standard',
  customMergeCell: (col, row, table) => {
    if (col > 0 && col < 8 && row > 7 && row < 11) {
      return {
        text: 'long long long long long long long long long long long long long long long long long long text!',
        range: {
          start: {
            col: 1,
            row: 8
          },
          end: {
            col: 7,
            row: 10
          }
        },
        style: {
          bgColor: '#ccc'
        }
      };
    }
  }
};
// tableInstance = new ListTable(document.getElementById("CONTAINER_ID"),option);
// window['tableInstance'] = tableInstance;

  onMounted(() => {
  tableInstance.value = new ListTable(listTableRef.value, option);
  // tableInstance = new ListTable(document.getElementById("CONTAINER_ID"),option);
 
  tableInstance.value.on("click_cell", (params) => {
    console.log(params);
  });
});

  
</script>
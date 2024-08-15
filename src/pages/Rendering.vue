<template>
  <div>
    <div>
      <el-button type="text" @click="printWindow()">打印</el-button>
    </div>
    <div ref="listTableRef" id ="listTableRef" style="width: 1580px; height: 800px"></div>
  </div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { ListTable } from '@visactor/vtable';
  
  const listTableRef = ref();
  const tableInstance = shallowRef();
  
 

  function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function generateRandomHobbies() {
  const hobbies = [
    'Reading books',
    'Playing video games',
    'Watching movies',
    'Cooking',
    'Hiking',
    'Traveling',
    'Photography',
    'Playing musical instruments',
    'Gardening',
    'Painting',
    'Writing',
    'Swimming'
  ];

  const numHobbies = Math.floor(Math.random() * 3) + 1; // 生成 1-3 之间的随机整数
  const selectedHobbies = [];

  
  for (let i = 0; i < numHobbies; i++) {
    const randomIndex = Math.floor(Math.random() * hobbies.length);
    const hobby = hobbies[randomIndex];
    selectedHobbies.push(hobby);
    hobbies.splice(randomIndex, 1); // 确保每个爱好只选一次
  }

  return selectedHobbies.join(', ');
}
function generateRandomBirthday() {
  const start = new Date('1970-01-01');
  const end = new Date('2000-12-31');
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const year = randomDate.getFullYear();
  const month = randomDate.getMonth() + 1;
  const day = randomDate.getDate();
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

function generateRandomPhoneNumber() {
  const areaCode = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '150', '151', '152', '153', '155', '156', '157', '158', '159', '170', '176', '177', '178', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189'];
  const prefix = areaCode[Math.floor(Math.random() * areaCode.length)];
  const suffix = String(Math.random()).substr(2, 8);
  return prefix + suffix;
}

const generatePersons = (count) => {
  return Array.from(new Array(count)).map((_, i) => {
    const first=generateRandomString(10);
    const last=generateRandomString(4);
    return {
    id: i+1,
    email1: `${first}_${last}@xxx.com`,
    name: first,
    lastName: last,
    hobbies: generateRandomHobbies(),
    birthday: generateRandomBirthday(),
    tel: generateRandomPhoneNumber(),
    sex: i % 2 === 0 ? 'boy' : 'girl',
    work: i % 2 === 0 ? 'back-end engineer' : 'front-end engineer',
    city: 'beijing',
  }});
};


const records = generatePersons(1000000);
const columns = [
  {
    field: 'id',
    title: 'ID',
    width: 80,
    sort: true,
  },
  {
    field: 'email1',
    title: 'email',
    width: 250,
    sort: true,
  },
  {
    field: 'full name',
    title: 'Full name',
    columns: [
      {
        field: 'name',
        title: 'First Name',
        width: 120,
      },
      {
        field: 'lastName',
        title: 'Last Name',
        width: 100,
      },
    ],
  },
  {
    field: 'hobbies',
    title: 'hobbies',
    width: 200,
  },
  {
    field: 'birthday',
    title: 'birthday',
    width: 120,
  },
  {
    field: 'sex',
    title: 'sex',
    width: 100,
  },
  {
    field: 'tel',
    title: 'telephone',
    width: 150,
  },
  {
    field: 'work',
    title: 'job',
    width: 200,
  },
  {
    field: 'city',
    title: 'city',
    width: 150,
  },
  {
    field: 'city1',
    title: 'city1',
    width: 150,
  },
  {
    field: 'city2',
    title: 'city2',
    width: 150,
  },
  {
    field: 'city3',
    title: 'city3',
    width: 150,
  },
  {
    field: 'city4',
    title: 'city4',
    width: 150,
  },
  {
    field: 'city5',
    title: 'city5',
    width: 150,
  },
  {
    field: 'city6',
    title: 'city6',
    width: 150,
  },
  {
    field: 'city7',
    title: 'city7',
    width: 150,
  },
  {
    field: 'city8',
    title: 'city8',
    width: 150,
  },
];
  
  const option = {
    records,
    columns,
    widthMode: "standard",
    theme:{
      scrollStyle:{
        visible:'none'
      }
    }
  };
  
  function printWindow(){
    debugger
    const wdt= tableInstance.value.getAllColsWidth();
    const hight = tableInstance.value.getAllRowsHeight();
    document.getElementById('listTableRef').style.width = wdt+'px';
    //document.getElementById('listTableRef').style.height = hight+'px';
   // window.print();
     //document.getElementById('listTableRef').style.width = '1580px';
    //document.getElementById('listTableRef').style.height = '800px';
  }

  onMounted(() => {
    tableInstance.value = new ListTable(listTableRef.value, option);
  
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);
    });
  });
  </script>
  
  <style scoped></style>
  
<template>
    <div>
        <div ref="listTableRef" style="width: 1580px; height: 700px"></div>
        <div style="width: 1580px; height: 50px" class="right-align">
            <button id="first-buttom" > 首页</button>
            <button id="prev-buttom" > 上一页</button>
            <span id="page-namber">第1页</span>
            <input id="cpnr" type="hidden">
            <span>/</span>
            <span id="total-page">共 页</span>
            <input id="mpnr" type="hidden">
            <button id="next-buttom">下一页</button>
            <button id="tail-buttom" > 尾页</button>
            <span id="total-num">共 条</span>
            <input  id="spn" type="number" >
            <button id="skip-buttom"> 跳转</button>
        </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { ListTable } from "@visactor/vtable";
  
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
];
  
  const option = {
    records,
    columns,
    widthMode: "standard",
    pagination:{
        perPageCount:15,
        currentPage:0,
    },
  };
  
  onMounted(() => {
    tableInstance.value = new ListTable(listTableRef.value, option);
    //分页相关代码
    let pageNumber = 0;
    const totalNum = option.records.length;
    const pageSize =option.pagination.perPageCount;
    const pageNumberSpan = document.getElementById("page-namber");
    const totalPageSpan = document.getElementById("total-page");
    const totalNumSpan = document.getElementById("total-num");

    const totalPg = Math.ceil(totalNum/pageSize);//总页数
    totalPageSpan.innerHTML='共'+totalPg+'页';
    totalNumSpan.innerHTML='共'+totalNum+'条';


    document.getElementById("prev-buttom").addEventListener("click", () => {
    if (pageNumber === 0) {
        return;
    }
    pageNumber--;
    tableInstance.value.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    });
    document.getElementById("first-buttom").addEventListener("click", () => {
    pageNumber=1;
    pageNumber--;
    tableInstance.value.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    document.getElementById("spn").value ='';
    });

    document.getElementById("tail-buttom").addEventListener("click", () => {
    pageNumber=totalPg-1;
    tableInstance.value.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    document.getElementById("spn").value ='';
    });


    document.getElementById("next-buttom").addEventListener("click", () => {
    if (pageNumber === (totalPg-1)) {
        return;
    }
    pageNumber++;
    tableInstance.value.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    });
    document.getElementById("skip-buttom").addEventListener("click", () => {
    debugger
    let specificPageNum = document.getElementById("spn").value;//要跳转的页
    if (specificPageNum > totalPg) {
        pageNumber=totalPg-1;
        document.getElementById("spn").value=totalPg;
    }else{
        pageNumber = specificPageNum-1
    }
    if (specificPageNum <= 0) {
        pageNumber=0;
        document.getElementById("spn").value =1;
    }
    
    tableInstance.value.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    });
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);
    });
  });
  </script>
  
  <style scoped>
    .right-align {
    float: right; /* 让元素浮动到右边 */
    }
</style>
  
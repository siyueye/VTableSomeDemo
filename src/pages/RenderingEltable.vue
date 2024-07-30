<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="150" />
      <el-table-column prop="email1" label="email" width="150" />
      <el-table-column label="full name">
        <el-table-column prop="name" label="First Name" width="120" />
        <el-table-column prop="lastName" label="Last Name" width="120" />
      </el-table-column>
      <el-table-column prop="hobbies" label="hobbies" width="150" />
      <el-table-column prop="birthday" label="birthday" width="150" />
      <el-table-column prop="sex" label="sex" width="150" />
      <el-table-column prop="tel" label="telephone" width="150" />
      <el-table-column prop="work" label="job" width="150" />
      <el-table-column prop="city" label="city" width="150" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
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
// const tableData = generatePersons(1000000);
const tableData = generatePersons(1000000);
console.log(tableData)

  </script>
  
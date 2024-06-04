const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', function () {
    // ``을 이용하여 문자열로 인식하도록 설정 
    // \는 문자열로 쓰려면 앞에 \ 더 붙여야 함
    console.log(`!@#$%^&*(\\'"<>?:;`)
});
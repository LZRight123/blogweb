// 入参 文件路径， 返回内容
const fs = require("fs");
const path = require("path");

var count = 1;

function getFileByPath(fpath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fpath, "utf-8", (err, dataStr) => {
      count += 1;
      if (err) {
        return reject(err);
      }
      resolve(dataStr);
    });
  });
}

getFileByPath(path.join(__dirname, "./index.js"))
  .then(res => {
    console.log("=====================================", count);

    console.log(res);

    return getFileByPath(path.join(__dirname, "./index.js"));
  })
  .then(res => {
    console.log("=====================================", count);

    console.log(res);
    return getFileByPath(path.join(__dirname, "./index.js"));
  })
  .then(res => {
    console.log("=====================================", count);

    console.log(res);
    return getFileByPath(path.join(__dirname, "./index.js"));
  })
  .catch(err => {
    console.log(err.message);
  });

// getFileByPath(path.join(__dirname, "./index.js"), (err, dataStr) => {
//   console.log(dataStr);
//   getFileByPath(path.join(__dirname, "./index.js"), (err, dataStr) => {
//     console.log(dataStr);
//     getFileByPath(path.join(__dirname, "./index.js"), (err, dataStr) => {
//       console.log(dataStr);
//     });
//   });
// });

var i = new Promise(function() {});
console.log(i);

function runAsync() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log("执行完成");
      resolve("随便什么数据");
      // eslint-disable-next-line no-constant-condition
      if ("" === " ") {
        reject("erro");
      }
    }, 2000);
  });
  return p;
}
runAsync().then(res => {
  console.log(res);
});

function logNum() {
  let num = parseInt(document.getElementById("number").value);
  document.getElementById("factDisplay").innerHTML = num;
  getReq(num);
}

function getReq(numb) {
  const Http = new XMLHttpRequest();
  let url = `http://numbersapi.com/${numb}`;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = Http.responseText;
      document.getElementById("factPara").innerHTML = result;
      localStorage.setItem(numb, result);
      var localStr = localStorage.getItem(numb);
      console.log(localStr);
    }
  };
}

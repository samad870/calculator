function handleAllClear() {
  document.getElementById("result").value = "";
}

function dis(val) {
  document.getElementById("result").value =
    document.getElementById("result").value + val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = math.evaluate(x);
  document.getElementById("result").value = y;
}

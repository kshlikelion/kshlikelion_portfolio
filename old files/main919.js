function revealMyName(myName, index) {
  let span = document.getElementsByTagName("span");

  span[index].innerHTML = myName;
}

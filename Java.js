
const ryud = () => {
  let rated
  rated = Math.random()
  rated += 0.5
  rated = Math.round(rated*10)/10
  return rated
}

window.onload=function(){

  document.getElementById("ryud").innerHTML = ryud();

  setInterval(() => {
    const rated = ryud();
    console.log(rated);
    document.getElementById("ryud").innerHTML = rated;
  }, 30000);
}

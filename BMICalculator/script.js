const heightEle = document.getElementById("height");
const weightELe = document.getElementById("weight");
const verdictEle = document.getElementById("bmi-verdict");
const resultEle = document.getElementById("bmi-result");

const calculateBmi = () => {
  const height = (Number(heightEle.value))/100;
  const weight = Number(weightELe.value);

  const bmi = weight / (height * height);

  let verdict;
  if(bmi < 18.6){
    verdict = "Under Weight";
  }else if(bmi >= 18.6 && bmi < 24.9){
    verdict = "Normal";
  }else if(bmi >= 24.9){
    verdict = "Over Weight";
  }else{
    verdict = "Please make sure you have entered height and weight in specified units!";
  }

  verdictEle.innerText = verdict;
  resultEle.innerText = bmi.toFixed(2);

  console.log(verdict, bmi);
}

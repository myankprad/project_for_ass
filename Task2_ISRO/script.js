const api1 = "https://isro.vercel.app/api/spacecrafts";
function loadSpacecrafts() {
  const getSpace = async () => {
    const response = await fetch(api1);
    const data = await response.json();



    


    // console.log(data.spacecrafts)

    // data.spacecrafts[0].name

    const we = document.getElementsByClassName("1");
    we[0].innerText = data.spacecrafts[0].name;
    const we1 = document.getElementsByClassName("2");
    we1[0].innerText = data.spacecrafts[1].name;
    const we2 = document.getElementsByClassName("3");
    we2[0].innerText = data.spacecrafts[2].name;
    const we3 = document.getElementsByClassName("4");
    we3[0].innerText = data.spacecrafts[3].name;
    const we4 = document.getElementsByClassName("5");
    we4[0].innerText = data.spacecrafts[4].name;
    const we5 = document.getElementsByClassName("6");
    we5[0].innerText = data.spacecrafts[5].name;
    const we6 = document.getElementsByClassName("7");
    we6[0].innerText = data.spacecrafts[6].name;
  };
  getSpace();
}
loadSpacecrafts();

const api2 = "https://isro.vercel.app/api/launchers";

function launcher() {
  const getlaunch = async () => {
    const response = await fetch(api2);
    const data = await response.json();
    const launcahrList = document.getElementById("launcherlist");
    data.launchers.map((launcher) => {
      const el = document.createElement("li");
      el.innerText = launcher.id;
      launcahrList.appendChild(el);
    });
    // console.log(data.launchers[0].id);
    // const we = document.getElementsByClassName("1");
    // we[1].innerText = ;
    // const we1 = document.getElementsByClassName("2");
    // we1[1].innerText = data.launchers[1].id;
    // const we2 = document.getElementsByClassName("3");
    // we2[1].innerText = data.launchers[2].id;
    // const we3 = document.getElementsByClassName("4");
    // we3[1].innerText = data.launchers[3].id;
    // const we4 = document.getElementsByClassName("5");
    // we4[1].innerText = data.launchers[4].id;
    // const we5 = document.getElementsByClassName("6");
    // we5[1].innerText = data.launchers[5].id;
    // const we6 = document.getElementsByClassName("7");
    // we6[1].innerText = data.launchers[6].id;
  };
  getlaunch();
}
launcher();

const api3 = "https://isro.vercel.app/api/customer_satellites";

function sat() {
  const getsat = async () => {
    const response = await fetch(api3);
    const data = await response.json();
    console.log(data.customer_satellites);

    // Define an array of objects
    let arr = []
    arr =  data.customer_satellites;
    console.log(arr);
    

    function searchArray() {
      const input = document.getElementById("input").value;
      const obj = arr.find((item) => Object.values(item).includes(input));
      const btn = document.getElementById("search");
      btn.addEventListener("click", searchArray);
      if (obj) {
        const values = Object.values(obj);
        const message = `Name: ${values[0]}, Country: ${values[1]}, Launcher: ${values[4]} , Date: ${values[2]}`;
        document.getElementById("result").textContent = message;
      } else {
        document.getElementById("result").textContent =
          "Error: Value not found in array.";
      }
    }

    searchArray();
  };

  getsat();
}
sat();

const api4 = "https://isro.vercel.app/api/centres";

function center() {
  const getcenter = async () => {
    const response = await fetch(api4);
    const data = await response.json();
    const centres = data.centres;
    const btn = document.getElementById("searchBox");
    btn.addEventListener("click", search);

    function search() {
      const searchedText = document.getElementById("inputBox").value;
      const searchedData = centres.find((item) =>
        item.State.toLowerCase().includes(searchedText.toLowerCase())
      );
      console.log({ searchedData });
      if (searchedData) {
        const values = Object.values(searchedData);
        const message = `Name: ${values[0]}, Place: ${values[1]}, State: ${values[2]} `;
        document.getElementById("result-by-state").textContent = message;
      } else {
        document.getElementById("result-by-state").textContent =
          "Error: Value not found in array.";
      }
    }

    search();
  };

  getcenter();
}
center();

// function loadcenter() {
//   const getcenter = async () => {
//     const response = await fetch(api4);
//     const data = await response.json();
//     console.log(data.centres)

//   }
//   getcenter()
// }
// loadcenter()

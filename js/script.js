const fetchData = async () => {
  let data = {};
  const res = await fetch("./data.json");
  const d = await res.json();
  return (data = d);
};

fetchData().then((data) =>
  data.forEach((element) => {
    let category = element.category;
    let score = element.score;
    let icon = element.icon;
  })
);

const calculateResults = () => {};

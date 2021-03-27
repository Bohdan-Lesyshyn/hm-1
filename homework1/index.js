const people = [
    {
      id: 1,
      name: "ivan",
      money: 22,
    },
    {
      id: 2,
      name: "petro",
      money: 200,
    },
    {
      id: 3,
      name: "vasyl",
      money: 800,
    },
    {
      id: 4,
      name: "vlad",
      money: 4000,
    },
    {
      id: 5,
      name: "sviat",
      money: 10,
    },
  ];
  
  
  // reduce
  
  const result = people.reduce((sum, num) => 
      sum + num.money, 
  );
  console.log(result);
  
  // filter
  
  const filterArr = people.filter(value =>{
    return value.money > 100;
  })
  console.log(filterArr);
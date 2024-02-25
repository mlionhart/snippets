let order = [1,2,3,4,5];

// ascending sort
order.sort((a,b) => {return a - b});

// descending sort
order.sort((a,b) => {return b - a});

// random sort
order.sort((a,b) => {return 0.5 - Math.random()})
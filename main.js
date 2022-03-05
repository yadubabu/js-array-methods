const companies=[
    {name:'Company One',Category:'Finannce',Start:1981,End:2003},
    {name:'Company Two',Category:'Retail',Start:1923,End:2000},
    {name:'Company Three',Category:'Auto',Start:1988,End:2012},
    {name:'Company Four',Category:'Retail',Start:1969,End:2003},
    {name:'Company Five',Category:'Technology',Start:1991,End:2009},
    {name:'Company Six',Category:'Finannce',Start:1988,End:2020},
    {name:'Company Seven',Category:'Auto',Start:1975,End:1999},
    {name:'Company Eight',Category:'Technology',Start:2008,End:2015},
    {name:'Company Nine',Category:'Retail',Start:1987,End:2009}
];

const ages=[23,15,32,45,35,47,25,32,64,78,5,16,9];

// //for loop
// for(let i=0;i<companies.length;i++)
// console.log(companies.[i]);

//forEach
// companies.forEach(function(company){
//     console.log(company.Start);
// }

//Filter
//age 21 and older
// let cardrink=[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         cardrink.push(ages[i]);
        
//     }
// }

// const cardrink=ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });

// const cardrink=ages.filter(age=>age>=21);

// const retailcomp=companies.filter(function(company){
//     if(company.Category==='Retail'){
//         return true;
//     }
// });
// const retailcomp=companies.filter(company=>company.Category==='Retail');
// console.log(retailcomp);

// //Get 80s Companies

// const Eightiescomp=companies.filter(company=>(company.Start>=1980 && company.Start<=1989));
// console.log(Eightiescomp);

//Get companies that listed 10 years or more

// const lasted10years=companies.filter(company=>(company.End - company.Start>10));
// console.log(lasted10years);

//map

//Create array of Company names
// const companynames=companies.map(function(company){
//     return company.name;
// });

// const testmap=companies.map(function(company){
//     return company.name+':--'+company.Start+'-'+company.End;
// });

// const testmap=companies.map(company=>(company.name+':--'+company.Start+'-'+company.End));


// console.log(testmap);

// const agessqure=ages.map(age=>Math.sqrt(age));
// const agestimestwo=ages.map(age=>age * 2);

// console.log(agessqure);
// console.log(agestimestwo);

//Sort by starting years
// const sortedcomp=companies.sort(function(c1,c2){
//     if(c1.Start >c2.Start)
//     {
//         return 1;
//     }else {
//         return -1;
//     }
// });
// const sortedcomp=companies.sort((a,b)=>(a.Start >b.Start ? 1 : -1 ));
// console.log(sortedcomp);

//sort ages

// const sortedages=ages.sort((a,b)=>b-a);
// console.log(sortedages);

//reduce

// let agesum=0;
// for(let i=0;i<ages.length;i++){
//     agesum +=ages[i];

// }

// const agesum=ages.reduce(function(total,age){
//     return total+age;
// });
// const agesum=ages.reduce((total,age)=>total+age);
//     //     return total+age;
//     // },0);
// console.log(agesum);

//Get Total years

// const totyears=companies.reduce(function(total,company){
//     return total+(company.End - company.Start);

// },0);

const totyears=companies.reduce((total,company)=>total+(company.End - company.Start),0);

//combine Methods

const combined=ages.map(age=>age*2)
.filter(age=>age>=40)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b,0);
console.log(combined);

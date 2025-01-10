// From an array of objects, [{bookName: “ABC”, 
// author: “Ram”, Published: Date}], print
//them line by line.

let Bookset=[
    {
        bookName:"ABC",
        author:"Ram",
        PublishedDate:"26-06-2019"
    },
    {
        bookName:"DEF",
        author:"Shyam",
        PublishedDate:"16-12-2019"
    },
    {
        bookName:"GHI",
        author:"Klaus",
        PublishedDate:"13-08-2019"
    },{
        bookName:"JKL",
        author:"Pranav",
        PublishedDate:"20-09-2019"
    }

]

Bookset.forEach((item)=>{
    for (Keys in item){
        console.log(`${Keys} : ${item[Keys]}`)
    }
})
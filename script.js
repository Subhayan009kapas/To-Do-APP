let input=document.querySelector(".input-box  input");
let btn=document.querySelector(".input-box  button");
let list=document.querySelector(".list-con  li");


let count=0;
btn.addEventListener("click",()=>{
        count++;
         let span=document.createElement("span");
         span.innerHTML="\u00d7"; // for crosss symbol
         span.style.marginLeft="200px"
          let  item=document.createElement("li");


          item.innerHTML=count+" . "+ input.value  +"     &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+'<i class="fa-solid fa-trash    delete" ></i> ';


          item.setAttribute("class","new-list")
          list.append(item);


         let col="white"
        item.addEventListener("click",()=>{

            if(col=="white"){
                item.style.backgroundColor="orange";
                item.style.textDecoration="line-through";
                col="orenge";
            }
            else{
                item.style.backgroundColor="lightgray";
                item.style.textDecoration="none";
                col="white";
            }
    
        })    
             
     
       

         
})

let list_con=document.querySelector(".list-con");
list_con.addEventListener("click",(e)=>{
    

    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})
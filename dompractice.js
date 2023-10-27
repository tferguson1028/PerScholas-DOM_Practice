const title = document.querySelector("title");
title.textContent = "DOM Practice";
console.log(title);
console.dir(title);

const parent = document.querySelector("#parent");
console.log(parent);
parent.style.backgroundColor = "red";
parent.style.width = "500px";
parent.style.height = "450px";

const children = document.querySelectorAll(".child");
console.log(children);
for(let child of children)
{
  child.style.backgroundColor = "blue";
  child.style.width = "100%";
  child.style.height = "50px";
  child.style.margin = "30px 0px";
  child.style.textAlign = "center";
  child.style.color = "#E0D635";
}

const grandchildren = document.querySelectorAll(".grandchild");
console.log(grandchildren);
for(let i = 0; i < grandchildren.length; i++)
{
  let grandchild = grandchildren[i]; // Yay for passing pointers as vars
  grandchild.style.width = "100%";
  grandchild.style.height = "7px";
  grandchild.style.margin = "10px 0px 0px 0px";
  grandchild.textContent = i+1;
}

// console.log(document.querySelectorAll(".child"));
// console.log(document.querySelectorAll(".child")[0].children[1]);
const favoriteGrandChild = document.querySelectorAll(".child")[4].children[1];
favoriteGrandChild.style.color = "pink";
favoriteGrandChild.style.color = "purple";
favoriteGrandChild.style.fontStyle = "italic";

let blackSheep = get9thChild();
blackSheep.parentElement.style.position = "relative";

function get9thChild()
{
  for(let child of children)
    for(let grandchild of child.children) 
      if(grandchild.textContent === "9")
        return grandchild; 
}

blackSheep.style.color = "black";
blackSheep.style.fontSize = "9rem";
blackSheep.style.textAlign = "right";
blackSheep.style.transform = "scale(-1, 1)";
blackSheep.style.position = "absolute";
blackSheep.style.top = "30px";
blackSheep.style.left = "500px";



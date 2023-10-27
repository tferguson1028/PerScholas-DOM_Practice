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
  grandchild.style.width = "100%";
  grandchild.style.margin = "10px 0px 0px 0px";
  grandchild.textContent = i+1;
}

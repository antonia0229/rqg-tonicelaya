var header = document.getElementById("header");

header.style="background:pink; border: 2px dashed; text-align:center;";

var title = document.createElement("h1");
title.textContent="Random Quote Generator"
header.appendChild(title);
var description = document.createElement("p");
description.innerHTML = "This is the description of the project"
header.appendChild(description);
let manu = document.querySelector ('nav .right .icons .manu');

console.log (manu);



let list = document.createElement ('div');
list.className = 'list';
let all = document.createElement ('div');
all.className = 'all';
// element1
let element1 = document.createElement ('div');
element1.className = 'element';
let imge1 = document.createElement ('img');
imge1.src = './img/list/user.png';

let title1 = document.createElement ('a');
title1.className = 'title';
title1.innerHTML = 'Manage My Account';


element1.appendChild(imge1);
element1.appendChild(title1);
all.appendChild(element1);
list.appendChild(all);


// element2
let element2 = document.createElement ('div');
element2.className = 'element';
let imge2 = document.createElement ('img');
imge2.src = './img/list/icon-mallbag.png';

let title2 = document.createElement ('a');
title2.className = 'title';
title2.innerHTML = 'My Order';

element2.appendChild(imge2);
element2.appendChild(title2);
all.appendChild(element2);
list.appendChild(all);



// element3
let element3 = document.createElement ('div');
element3.className = 'element';
let imge3 = document.createElement ('img');
imge3.src = './img/list/icon-cancel.png';

let title3 = document.createElement ('a');
title3.className = 'title';
title3.innerHTML = 'My Concellations';

element3.appendChild(imge3);
element3.appendChild(title3);
all.appendChild(element3);
list.appendChild(all);



// element4
let element4 = document.createElement ('div');
element4.className = 'element';
let imge4 = document.createElement ('img');
imge4.src = './img/list/Icon-Reviews.png';

let title4 = document.createElement ('a');
title4.className = 'title';
title4.innerHTML = 'My Reviews';

element4.appendChild(imge4);
element4.appendChild(title4);
all.appendChild(element4);
list.appendChild(all);



// element5
let element5 = document.createElement ('div');
element5.className = 'element';
let imge5 = document.createElement ('img');
imge5.src = './img/list/Icon-logout.png';

let title5 = document.createElement ('a');
title5.className = 'title';
title5.innerHTML = 'Logout';

element5.appendChild(imge5);
element5.appendChild(title5);
all.appendChild(element5);
list.appendChild(all);

document.body.appendChild(list);




console.log(list);



// css

list.style.width = '224px';
list.style.heigh = '208px';
list.style.borderRadius = '4px';
list.style.background = 'rgba(0, 0, 0, 0.24)';
list.style.position = 'absolute';
list.style.zIndex ='999';
list.style.top = '130px';
list.style.right = '150px';
list.style.display = 'none';



all.style.width = '192px';
// all.style.height = '180px';
all.style.display = 'flex';
all.style.flexDirection = 'column';
all.style.gap = '13px';
all.style.paddingLeft = '20px';
all.style.paddingTop = '20px';


// elements 
element1.style.width = '192px';
element2.style.width = '192px';
element3.style.width = '192px';
element4.style.width = '192px';
element5.style.width = '192px';

element1.style.display = 'flex';
element2.style.display = 'flex';
element3.style.display = 'flex';
element4.style.display = 'flex';
element5.style.display = 'flex';

element1.style.alignItems = 'center';
element2.style.alignItems = 'center';
element3.style.alignItems = 'center';
element4.style.alignItems = 'center';
element5.style.alignItems = 'center';

element1.style.gap = '16px';
element2.style.gap = '16px';
element3.style.gap = '16px';
element4.style.gap = '16px';
element5.style.gap = '16px';

element1.style.cursor = 'pointer';
element2.style.cursor = 'pointer';
element3.style.cursor = 'pointer';
element4.style.cursor = 'pointer';
element5.style.cursor = 'pointer';


// imges
imge1.style.width = '32px';
imge1.style.height = '32px';

imge2.style.width = '32px';
imge2.style.height = '32px';

imge3.style.width = '32px';
imge3.style.height = '32px';

imge4.style.width = '32px';
imge4.style.height = '32px';

imge5.style.width = '32px';
imge5.style.height = '32px';

//pragrphe

title1.style.fontFamily = 'poppins';
title1.style.fontSize = '14px';
title1.style.fontWeight = '400';
title1.style.lineHeight = '21px';
title1.style.color = 'rgba(250, 250, 250, 1)';
title1.style.textDecoration = 'none';


title2.style.fontFamily = 'poppins';
title2.style.fontSize = '14px';
title2.style.fontWeight = '400';
title2.style.lineHeight = '21px';
title2.style.color = 'rgba(250, 250, 250, 1)';


title3.style.fontFamily = 'poppins';
title3.style.fontSize = '14px';
title3.style.fontWeight = '400';
title3.style.lineHeight = '21px';
title3.style.color = 'rgba(250, 250, 250, 1)';


title4.style.fontFamily = 'poppins';
title4.style.fontSize = '14px';
title4.style.fontWeight = '400';
title4.style.lineHeight = '21px';
title4.style.color = 'rgba(250, 250, 250, 1)';


title5.style.fontFamily = 'poppins';
title5.style.fontSize = '14px';
title5.style.fontWeight = '400';
title5.style.lineHeight = '21px';
title5.style.color = 'rgba(250, 250, 250, 1)';




function fun () {
    list.style.display = 'flex';
    list.style.transition = 'all 0.5s';
    title1.href = './account.html ';
    // a.src = './account.html ';
}
function exit () {
    list.style.display = 'none';
    list.style.transition = 'all 0.5s';
}
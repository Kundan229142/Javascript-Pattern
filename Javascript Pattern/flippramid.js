let n = 5;


//pramead
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
    
}

document.write("<br>");document.write("<br>");document.write("<br>");

//flipped pramead
for (let i = 1; i <= n; i++) {
    for (let k = 5; k > i; k--) {
        document.write(" &nbsp ");
    }
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");document.write("<br>");document.write("<br>");

// Number pramead
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j);
    }
    document.write("<br>");
    
}

document.write("<br>");document.write("<br>");document.write("<br>");

// Number pramead
let count = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write("<br>");
    
}
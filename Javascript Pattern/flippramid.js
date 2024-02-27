let n = 5;

//Square pattern
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 || i == n-1|| j == 0  || j == n-1) {
            document.write("*");
        }
        else{
            document.write("&nbsp&nbsp");
        }
    }
    document.write("<br>");
}

document.write("<br>");document.write("<hr>");document.write("<br>");

//pramead
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");document.write("<hr>");document.write("<br>");

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

document.write("<br>");document.write("<hr>");document.write("<br>");

// Number pramead
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j);
    }
    document.write("<br>");
    
}

document.write("<br>");document.write("<hr>");document.write("<br>");

// Number pramead with row number
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        document.write(i+j);
    }
    document.write("<br>");
}

const textContainer = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSizeInput = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssOutput = document.getElementById("css-props");

colorBtn.addEventListener("click", () => {
    textContainer.style.color = colorBox.value;
});

fontSizeInput.addEventListener("input", () => {
    textContainer.style.fontSize = fontSizeInput.value + "px";
});

italicBtn.addEventListener("click", () => {
    if (textContainer.style.fontStyle === "italic") {
        textContainer.style.fontStyle = "normal";
    } else {
        textContainer.style.fontStyle = "italic";
    }
});

underlineBtn.addEventListener("click", () => {
    if (textContainer.style.textDecoration === "underline") {
        textContainer.style.textDecoration = "none";
    } else {
        textContainer.style.textDecoration = "underline";
    }
});

boldBtn.addEventListener("click", () => {
    if (textContainer.style.fontWeight === "bold") {
        textContainer.style.fontWeight = "normal";
    } else {
        textContainer.style.fontWeight = "bold";
    }
});

fontList.addEventListener("change", () => {
    textContainer.style.fontFamily = fontList.value;
});

getStyleBtn.addEventListener("click", () => {
    let cssText = "";
    cssText += "color: " + (textContainer.style.color || "black") + "; ";
    cssText += "font-size: " + (textContainer.style.fontSize || "55px") + "; ";
    cssText += "font-family: " + (textContainer.style.fontFamily || "serif") + "; ";
    cssText += "text-decoration: " + (textContainer.style.textDecoration || "none") + "; ";
    cssText += "font-style: " + (textContainer.style.fontStyle || "normal") + "; ";
    cssText += "font-weight: " + (textContainer.style.fontWeight || "normal") + "; ";

    cssOutput.innerText = cssText;
});
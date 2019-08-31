function saveFile(text){
    fs.writeFile("./page.html", text, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log("File Saved!");
    });
};

function replaceEmptySpace(text, newValue){
    return text.replace(/\s{2,}/g, newValue);
}

function splitEmptySpace(text){
    return text.split(/\s/g);
}

module.exports = { 
    saveFile: saveFile,
    replaceEmptySpace: replaceEmptySpace,
    splitEmptySpace: splitEmptySpace
};
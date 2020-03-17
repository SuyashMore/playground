export function handleFileSelect(event){
    const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
    var fileContents = event.target.result;
    console.log(event.target.result);
    alert("File Uploaded Successfully");
}
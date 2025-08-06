function typeConsole(type) {
    if (type=="log") {
        console.log("Day la type: log");
    }else if(type=="warn"){
        console.warn("Day la type: warn");
    }else if(type=="error"){
        console.error("Day la type: error");
    }else{
        console.log("Day la type: log"); 
    }
}
typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();



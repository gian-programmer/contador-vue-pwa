if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(
        ref=>console.log("registro exitoso de serviceWorker")
    ).catch(err=>console.log(err))
}
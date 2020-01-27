function createAnalytics (){
    let counter = 0;
    let isdestroyed = false

    const listeneer = ()=> counter++
    document.addEventListener('click' ,listeneer)
    
    return{
        destroy(){  
            document.removeEventListener('click' ,listeneer)
            isdestroyed = true
        },
        getClicks(){ 
            if(isdestroyed){
               return 'analytic is destroyed'
            }else{
            return counter
            }
        }
    }
}

window.analytics = createAnalytics()
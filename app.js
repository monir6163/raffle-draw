window.onload = function () {
    const inp = document.getElementById('inp')
    const namelist = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveAtry = document.getElementById('give-a-try')
    const firstpossition = document.getElementById('first-possition')
    const secondpossition = document.getElementById('second-possition')
    const thirdpossition = document.getElementById('third-possition')
    const participentNames = []
    inp.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            let newNames = event.target.value.split(', ')
            if(newNames[0] !== ''){
               newNames.forEach(name => {
                participentNames.push(name)
                let item = creatListitem(name)
                namelist.appendChild(item)
                event.target.value=''
               });
            }
        }
    })
    giveAtry.addEventListener('click', function(){
        if(participentNames.length === 0){
            alert('There is no Name Empty')
        }
        else{
            let suffleName = suffle(participentNames)
            for(let i = 1; i < suffleName.length; i++){
                (function (i , count) {
                    setTimeout(() => {
                        let rand = Math.floor(Math.random()*(suffleName.length))
                        display.innerHTML = suffleName[rand]
                        if(count === suffleName.length -1){
                            if(!firstpossition.innerHTML){
                                firstpossition.innerHTML = suffleName[rand]
                                let ind = participentNames.indexOf(suffleName[rand])
                                participentNames.splice(ind , 1)
                            }else if(!secondpossition.innerHTML){
                                secondpossition.innerHTML = suffleName[rand]
                                let ind = participentNames.indexOf(suffleName[rand])
                                participentNames.splice(ind , 1)
                            }else if(!thirdpossition.innerHTML){
                                thirdpossition.innerHTML = suffleName[rand]
                                let ind = participentNames.indexOf(suffleName[rand])
                                participentNames.splice(ind , 1)
                            }else{
                                alert('Raffle Draw Already Finish!')
                            }
                        }
                    }, i)
                })(i*100, i)
            }
        }
    })
}
function creatListitem(name){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return li
}
function suffle(arr){
    let suffleArr = [...arr]
    for(let i = suffleArr.length - 1; i > 0; i--){
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = suffleArr[rand]
        suffleArr[rand] = suffleArr[i]
        suffleArr[i] = temp
    }
    return suffleArr
}
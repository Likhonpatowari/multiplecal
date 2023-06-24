

window.onload = () =>{
    main();
}

// we can update it every time 
const converter = {
    area:{
        name:'Area',
        units:{
            squreKm:'Square Kilometer',
            squreM:'Square Meter',
            squreMile:'Square Mile',
            squreYard:'Square Yard',
            squreFoot:'Square Foot',
        },
        variants:{
            'squreKm: squreM':{
                formula:'multiply the area value by 1000000',
                calculation:function(n){
                    return n * 1000000 
                }
            },
            'squreKm:  squreMile':{
                formula:'multiply the area value by 0.39',
                calculation:function(n){
                    return n * 0.39
                }
            },
            'squreKm:  squreYard':{
                formula:'multiply the area value by 1195990.05',
                calculation:function(n){
                    return n * 1195990.05
                }
            },
            'squreKm:  squreFoot':{
                formula:'multiply the area value by 10763910.4',
                calculation:function(n){
                    return n * 10763910.4 
                }
            },
            'squreM :squreKm':{
                formula:'multiply the area value by 1.0*10**-6',
                calculation:function(n){
                    return n * (1.0*10**-6 ) 
                }
            },
            'squreM :squreMile':{
                formula:'multiply the area value by 3.86102159 * 10-7',
                calculation:function(n){
                    return  n * (3.86102159*10**-7)
                }
            },
            'squreM : squreYard':{
                formula:'multiply the area value by 1.19599005',
                calculation:function(n){
                    return n * 1.19599005
                }
            },
            'squreM :squreFoot':{
                formula:'multiply the area value by 10.7639104',
                calculation:function(n){
                    return n * 10.7639104
                }
            },
            'squreMile : squreKm':{
                formula:'multiply the area value by 2.58998811',
                calculation:function(n){
                    return n * 2.58998811
                }
            },
            'squreMile : squreM':{
                formula:'multiply the area value by 2589988.11',
                calculation:function(n){
                    return n * 2589988.11
                }
            },
            'squreMile : squreYard':{
                formula:'multiply the area value by 3097600',
                calculation:function(n){
                    return n * 3097600
                }
            },
            'squreMile : squreFoot':{
                formula:'multiply the area value by 27878400',
                calculation:function(n){
                    return n * 27878400
                }
            },
            ' squreYard : squreKm':{
                formula:'multiply the area value by 8.3612736 * 10-7',
                calculation:function(n){
                    return n * (8.3612736*10**-7)
                }
            },
            ' squreYard : squreM':{
                formula:'multiply the area value by 0.83612736',
                calculation:function(n){
                    return n * 0.83612736
                }
            },
            ' squreYard : squreMile':{
                formula:'multiply the area value by 3.22830579 * 10-7',
                calculation:function(n){
                    return n * (3.22830579*10**-7)
                }
            },
            ' squreYard : squreFoot':{
                formula:'multiply the area value by 9',
                calculation(n){
                    return n * 9
                }
            },
            ' squreFoot:  squreKm':{
                formula:'multiply the area value by 9.290304 * 10-8',
                calculation:function(n){
                    return n * (9.290304*10**-8)
                }
            },
            ' squreFoot:  squreM':{
                formula:'multiply the area value by 0.09290304',
                calculation:function(n){
                    return n * 0.09290304
                }
            },
            ' squreFoot:  squreMile':{
                formula:'multiply the area value by 3.58700643 * 10-8',
                calculation:function(n){
                    return n * (3.58700643*10**-8)
                }
            },
            ' squreFoot:  squreYard':{
                formula:'multiply the area value by 0.111111111',
                calculation:function(n){
                    return n * 0.111111111
                }
            }
        }
    },
    mass:{
        name: 'Mass' ,
        units:{
            tone:'Tone',
            kg:'Kilogram',
            gram:'Gram',
            miligram:'Miligram'
        } 
    },
    length:{
        name: 'Length' ,
        units:{
            kilometer:'Kilometer',
            miter:'Miter',
            cm:'Centimeter',
            mm:'Milimeter',
        } 
    },
    time:{
        name:'Time',
        units:{
            second:'Second',
            minute:'Menite',
            hour:'Hour',
            day:'Day'
        }  
    }
}

// global 

let lastLestSelectValue = ''
let lastRightSelectValue = ''

function main(){


    // all references
    const catagori_select = document.getElementById('catagori-select')
    const left_select = document.getElementById('left-select')
    const right_select = document.getElementById('right-select')
    const left_input = document.getElementById('left-input')
    const right_input = document.getElementById('right-input')
    const formula_text = document.getElementById('formula-text')



    removeAllChild(catagori_select)
    const converterKeys = Object.keys(converter).sort()
    converterKeys.forEach((item) =>{
        addOption(catagori_select,{value:item , text:converter[item].name})
    })

    // set defulat catagori units 
    updateCatagoriChange(catagori_select,left_select,right_select)

    const converterName = catagori_select.value
    const variants = converter[converterName].variants   
    
    const variantKey = `${left_select.value}:${right_select.value}`
    console.log(variantKey)
    console.log(variants[variantKey])

  


//    catagory select handalers

    catagori_select.addEventListener('change',() =>{
        updateCatagoriChange(catagori_select ,left_select ,right_select )
    })

    // left change event 
    left_select.addEventListener('change',(event) =>{
        if(event.target.value === right_select.value){
            const option = right_select.getElementsByTagName('option')
            for(let i = 0 ;i < option.length; i++){
                if((lastLestSelectValue !== option[i].value) || (lastLestSelectValue === option[i].value)){
                    option[i].selected = 'selected'
                    lastRightSelectValue = option[i].value
                    break ;
                }
            }
        }
        lastLestSelectValue = event.target.value
    })

     // right change event 
     right_select.addEventListener('change',(event) =>{
        if(event.target.value === left_select.value){
            const option = left_select.getElementsByTagName('option')
            for(let i = 0 ;i < option.length; i++){
                if((lastRightSelectValue !== option[i].value) || (lastRightSelectValue === option[i].value)){
                    option[i].selected = 'selected'
                    lastLestSelectValue = option[i].value
                    break ;
                }
            }
        }
       lastRightSelectValue = event.target.value
     })
}


// add option Node 
function addOption (parent,option){
    const opt = document.createElement('option')
    opt.setAttribute('value', option.value)
    opt.innerText = option.text 
    parent.appendChild(opt)
}



// remove child 
function removeAllChild(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}



    // refactor update catagoriChanges
function updateCatagoriChange(catagori_select , left_select ,right_select){
    const converterName = catagori_select.value
    const units = converter[converterName].units 
    const options = Object.keys(units).sort()

     /// handle left select

     removeAllChild(left_select)
     options.forEach((item) =>{
         addOption(left_select,{value:item , text:units[item]})
         lastLestSelectValue = left_select.value
     })


     
    /// handle right select
    removeAllChild(right_select)
    options.forEach((item) =>{
        addOption(right_select,{value:item , text:units[item]})
    })

    // change defalut right element 
    right_select.getElementsByTagName('option')[1].selected = 'selected'
    lastRightSelectValue = right_select.value
}
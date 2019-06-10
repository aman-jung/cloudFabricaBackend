let allFormValue = {}

function defaultForm(formData){

    if(formData.children.length>0){
        
        formData.children.forEach(eachChildren=>{

            allFormValue[eachChildren.name] ={
                score:0
            }

            defaultForm(eachChildren)
        })

    }else{

        if(formData.id !== 1){
            allFormValue[formData.name] ={
                score:0
            }
        }

    }

    return {...allFormValue}

}

module.exports={
    defaultForm:defaultForm
}
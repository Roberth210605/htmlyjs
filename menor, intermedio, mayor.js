function float(){
    var num1 = parseFloat(document.nose.primernumero.value);
    var num2 = parseFloat(document.nose.segundonumero.value);
    var num3 = parseFloat(document.nose.tercernumero.value);

    if  (num1>num2 & num2>num3){
    document.nose.mayor.value=num1;
    document.nose.intermedio.value=num2;
    document,nose.menor.value=num3;
    }
    else if (num2<num1 & num1<num3){
        document.nose.mayor.value=num3;
        document.nose.intermedio.value=num1;
        document.nose.menor.value=num2
    }
    if (num3<num2 & num2<num1){
        document.nose.mayor.value=num1
        document.nose.intermedio.value=num2
        document .nose.menor.value=num3
            }
    else if(num3>num2 & num2>num1){
        document.nose.mayor.value=num3
        document.nose.intermedio.value=num2
        document.nose.menor.value=num1
    }
    if (num3<num1 & num1<num2){ 
        document.nose.mayor.value=num2
        document.nose.intermedio.value=num1
        document.nose.menor.value=num3
       }
       else if(num3>num1 & num1>num2){
        document.nose.mayor.value=num3
        document.nose.intermedio.value=num1
        document.nose.menor.value=num2
       }
    }
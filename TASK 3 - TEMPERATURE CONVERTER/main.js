function convert(){
    var fromunit = document.getElementById('fromunit').value;
    var tounit = document.getElementById('tounit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedvalue;
    var resultunit;

    switch(fromunit){
        case 'C':
            if(tounit === 'F'){
                convertedvalue = (temperature * 9/5) + 32;
                resultunit = '℉';
            }
            else if(tounit === 'K'){
                convertedvalue = temperature + 273.15;
                resultunit = 'K';
            }
            else{
                convertedvalue = temperature;
                resultunit = '°C';
            }
            break;


            case 'F':
                if(tounit === 'C'){
                    convertedvalue = (temperature - 32) * 5/9;
                    resultunit = '°C';
                }
                else if(tounit === 'K'){
                    convertedvalue = ((temperature - 32) * 5/9) + 273.15;
                    resultunit = 'K';
                }
                else{
                    convertedvalue = temperature;
                    resultunit = '℉';
                }
                break;


                case 'K':
                    if(tounit === 'C'){
                        convertedvalue = temperature - 273.15;
                        resultunit = '°C';
                    }
                    else if(tounit === 'F'){
                        convertedvalue = ((temperature - 273.15) * 9/5) + 32;
                        resultunit = '℉';
                    }
                    else{
                        convertedvalue = temperature;
                        resultunit = 'K';
                    }
                    break;
        }
        document.getElementById('result').value = convertedvalue.toFixed(2) + ' ' + resultunit;

    }

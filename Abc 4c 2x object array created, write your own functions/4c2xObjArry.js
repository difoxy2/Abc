//--------------------------on button click------------------------------------------\\ 
//------1.Convert myTextarea2.value to table[][]; 2.create uniqsubject[{}],core[{}],elective[{}],HKEAA---------------------------------\\ 
function yourFunction() { 
    //empty elements
    document.getElementById("myDIV2").innerHTML="myDIV2";
    document.getElementById("myTextarea2").value="";
    console.clear();
    uniqsubject = [];
    uniqsubjectHKEAA = [];
    core = [];
    coreHKEAA = [];
    elective = [];
    electiveHKEAA = [];
    
    //myTextArea > table[][]
    table = document.getElementById("myTextarea").value.split("\n");
    for (i in table) {table[i] = table[i].split("\t");}
    
    //5* 5** -- X to number
    for(i in table){for(j in table[i]){
        switch(table[i][j]) {
        case "--": table[i][j] = 0; break;
        case "X": table[i][j] = 0; break;
        case "5*": table[i][j] = 6; break;
        case "5**": table[i][j] = 7; break;         
        default: table[i][j] = table[i][j];
        }   
    }}

    
    //create uniqsubject[] uniqsubjectHKEAA[]
    table.sort(function(a, b){return a[1].localeCompare(b[1])});        //sort table[][] by subject names
    for(i in table){                                                    //push name, grade into uniqsubject/HKEAA
        uniqsubject.push({name: table[i][1], grade: table[i][2]});
        uniqsubjectHKEAA.push({name: table[i][1], grade: table[i][3]});
    }
    for (var i=0; i<uniqsubject.length-1;i++){                          //removing duplicated subjects by hightest scores, Appl Entry
        if(uniqsubject[i]["name"] == uniqsubject[i+1]["name"]){
            if(+uniqsubject[i]["grade"] < +uniqsubject[i+1]["grade"]){
                uniqsubject.splice(i, 1);
            }else{uniqsubject.splice(i+1, 1);}
            i--;
        }
    }
    for (var i=0; i<uniqsubjectHKEAA.length-1;i++){                     //removing duplicated subjects by hightest scores, HKEAA
        if(uniqsubjectHKEAA[i]["name"] == uniqsubjectHKEAA[i+1]["name"]){
            if(+uniqsubjectHKEAA[i]["grade"] < +uniqsubjectHKEAA[i+1]["grade"]){
                uniqsubjectHKEAA.splice(i, 1);
            }else{uniqsubjectHKEAA.splice(i+1, 1);}
            i--;
        }
    }
    
    //create core[] elective[] HKEAA
    for (i in uniqsubject){                                             //Appl Entry
        switch(uniqsubject[i]["name"]) {
      case "HKDSE Chinese Language": core.push(uniqsubject[i]); break;
      case "HKDSE English Language": core.push(uniqsubject[i]); break;
      case "HKDSE Mathematics Compulsory Part": core.push(uniqsubject[i]); break;
      case "HKDSE Liberal Studies": core.push(uniqsubject[i]); break;         
      default: elective.push(uniqsubject[i]);
        }   
    }
    for (i in uniqsubjectHKEAA){                                         //HKEAA
        switch(uniqsubjectHKEAA[i]["name"]) {
      case "HKDSE Chinese Language": coreHKEAA.push(uniqsubjectHKEAA[i]); break;
      case "HKDSE English Language": coreHKEAA.push(uniqsubjectHKEAA[i]); break;
      case "HKDSE Mathematics Compulsory Part": coreHKEAA.push(uniqsubjectHKEAA[i]); break;
      case "HKDSE Liberal Studies": coreHKEAA.push(uniqsubjectHKEAA[i]); break;         
      default: electiveHKEAA.push(uniqsubjectHKEAA[i]);
        }   
    }
    
console.log("vv core Appl. Entry vv");
console.log(core);
console.log("vv elective Appl. Entry vv");  
console.log(elective);
console.log("vv core HKEAA vv");
console.log(coreHKEAA);
console.log("vv elective HKEAA vv");  
console.log(electiveHKEAA);
}
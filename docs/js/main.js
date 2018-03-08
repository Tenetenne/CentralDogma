function tlanslate(){
    var dna= document.js.dna.value;
    var dna_arr = dna.split('');
    console.log( dna_arr );

    /***** エラー処理 *****/
    var check = 0;
    for( var i = 0; i < dna_arr.length; i++){         // ATGC以外の文字列があるとき
      if(dna_arr[i] != 'A' && dna_arr[i] != 'C' && dna_arr[i] != 'G' && dna_arr[i] != 'T' && dna_arr[i] != 'a' && dna_arr[i] != 'c' && dna_arr[i] != 'g' && dna_arr[i] != 't'){
        check += 1;
      }
    }

    if (check > 0){  // ATGC以外の文字列があるとき
      alert("A, T, G, Cを入力してください");
    } else if(dna_arr.length % 3 != 0){   // 文字数が3の倍数になっていないとき
      alert("3の倍数個だけ入力してください");
    }else{
      /***** 相補鎖 *****/
      var complementary_arr = [];

      for( var i = 0; i < dna_arr.length; i++){
        if(dna_arr[i] == 'A' || dna_arr[i] == 'a') complementary_arr[i] = 'T';
        if(dna_arr[i] == 'T' || dna_arr[i] == 't') complementary_arr[i] = 'A';
        if(dna_arr[i] == 'G' || dna_arr[i] == 'g') complementary_arr[i] = 'C';
        if(dna_arr[i] == 'C' || dna_arr[i] == 'c') complementary_arr[i] = 'G';
      }
      console.log( complementary_arr );

      var complementary_str = complementary_arr[0]
      for( var i = 1; i < complementary_arr.length; i++){
        complementary_str = complementary_str + complementary_arr[i];
      }

      console.log(complementary_str);

      var complementary = document.getElementById('complementary');
      complementary.textContent = "3'  " + complementary_str + "  5'";

      /***** mRNA鎖 *****/
      var rna_arr = [];

      for( var i = 0; i < complementary_arr.length; i++){
        if(complementary_arr[i] == 'A') rna_arr[i] = 'U';
        if(complementary_arr[i] == 'T') rna_arr[i] = 'A';
        if(complementary_arr[i] == 'G') rna_arr[i] = 'C';
        if(complementary_arr[i] == 'C') rna_arr[i] = 'G';
      }
      console.log( rna_arr );

      var str2 = rna_arr[0]
      for( var i = 1; i < rna_arr.length; i++){
        str2 = str2 + rna_arr[i];
      }

      console.log(str2);

      var rna = document.getElementById('rna');
      rna.textContent = "5'  " + str2 + "  3'";

      var b      = rna_arr.length, // 26
      cnt    = 3,              // いくつずつに分割するか
      arr3 = [];             // 新しく作る配列

      for(var i = 0; i < Math.ceil(b / cnt); i++) {
        var j = i * cnt;
        var p = rna_arr.slice(j, j + cnt); // i*cnt 番目から i*cnt+cnt 番目まで取得
        arr3.push(p);                    // 取得したものを arr3 に追加
      }
      console.log(arr3);

      var arr4 = [];
      var arr5 = [];

      for(var i = 0; i < arr3.length; i++){
          if(arr3[i][0] == 'A'){
            if(arr3[i][1] == 'A'){
              if(arr3[i][2] == 'A' || arr3[i][2] == 'G'){
                arr4[i] = "Lys";
                arr5[i] = "K";
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Asn";
                arr5[i] = "N";
              }
            }
            if(arr3[i][1] == 'C'){
              arr4[i] ="Thr";
              arr5[i] = "T";
            }
            if(arr3[i][1] == 'G'){
              if(arr3[i][2] == 'A' || arr3[i][2] == 'G'){
                // arr4[i] = "/";
                break;
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Ser";
                arr5[i] = "S";
              }
            }
            if(arr3[i][1] == 'U'){
              if(arr3[i][2] == 'A'){
                arr4[i] = "Met";
                arr5[i] = "M";
              }
              if(arr3[i][2] == 'G'){
                arr4[i] = "Met";
                arr5[i] = "M";
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Ile";
                arr5[i] = "I";
              }
            }
          }
          if(arr3[i][0] == 'C'){
            if(arr3[i][1] == 'A'){
              if(arr3[i][2] == 'A' || arr3[i][2] == 'G'){
                arr4[i] = "Gln";
                arr5[i] = "Q";
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "His";
                arr5[i] = "H";
              }
            }
            if(arr3[i][1] == 'C'){
                arr4[i] = "Pro";
                arr5[i] = "P";
            }
            if(arr3[i][1] == 'G'){
                arr4[i] = "Arg";
                arr5[i] = "R";
            }
            if(arr3[i][1] == 'U'){
                arr4[i] = "Leu";
                arr5[i] = "L";
            }
          }
          if(arr3[i][0] == 'G'){
            if(arr3[i][1] == 'A'){
              if(arr3[i][2] == 'A' || arr3[i][2] == 'G'){
                arr4[i] = "Glu";
                arr5[i] = "E";
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Asp";
                arr5[i] = "D";
              }
            }
            if(arr3[i][1] == 'C'){
                arr4[i] = "Ala";
                arr5[i] = "A";
            }
            if(arr3[i][1] == 'G'){
                arr4[i] = "Gly";
                arr5[i] = "G";
            }
            if(arr3[i][1] == 'U'){
                arr4[i] = "Val";
                arr5[i] = "V";
            }
          }
          if(arr3[i][0] == 'U'){
            if(arr3[i][1] == 'A'){
              if(arr3[i][2] == 'A' || arr3[i][2] == 'G'){
                // arr4[i] = "/";
                break;
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Tyr";
                arr5[i] = "Y";
              }
            }
            if(arr3[i][1] == 'C'){
                arr4[i] = "Ser";
                arr5[i] = "S";
            }
            if(arr3[i][1] == 'G'){
              if(arr3[i][2] == 'A'){
                arr4[i] = "Trp";
                arr5[i] = "W";
              }
              if(arr3[i][2] == 'G'){
                arr4[i] = "Trp";
                arr5[i] = "Gly";
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Cys";
                arr5[i] = "C";
              }
            }
            if(arr3[i][1] == 'U'){
              if(arr3[i][2] == 'A' || arr3[i][2] == 'G'){
                arr4[i] = "Leu";
                arr5[i] = "L";
              }
              if(arr3[i][2] == 'C' || arr3[i][2] == 'U'){
                arr4[i] = "Phe";
                arr5[i] = "F";
              }
            }
          }

      }


      console.log( arr4 );
      str3 = arr4.join();
      console.log(str3);

      var amino1 = document.getElementById('amino1');
      amino1.textContent = str3;

      str4 = arr5.join();
      var amino2 = document.getElementById('amino2');
      amino2.textContent = "(" + str4 + ")";


    }
}

function keydown_enter() {
  if(window.event.keyCode == 13) {
    document.getElementById("mybutton").click();
  }
}

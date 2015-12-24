		var inputTxt = document.getElementById('inputTxt');
        var currentValue = inputTxt.value;

        var stack1 = new Array();
        var stack2 = new Array();
        stack1.push(currentValue);


        function saveField() {

                currentValue = inputTxt.value;
                stack1.push(currentValue);
                stack2 = new Array();
        };

        inputTxt.onchange = function(){
                saveField()
        };


        function unDo() {    
            if(stack1.length == 1) return;     
            currentValue = stack1.pop();
            stack2.push(currentValue);   

            inputTxt.value = stack1[stack1.length-1];
        }

        function reDo() {
            if(stack2.length == 1) return;   
            currentValue = stack2.pop();            
            inputTxt.value = currentValue;
            stack1.push(currentValue);
        }

        function clearField() {
            inputTxt.value=""; 
            saveField();
        }

        function copyField() {

            inputTxt.select();

              try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
              } 

              catch (err) {
                console.log('Oops, unable to copy');
              }
          }



        function upperCase() {
            inputTxt.value = inputTxt.value.toUpperCase();
            saveField();
        }
          
        function lowerCase() {
            inputTxt.value = inputTxt.value.toLowerCase();
            saveField();
        }  
          
        function capitalize() {
            var txt = inputTxt.value;
            processedText = txt.toLowerCase();
            processedText = processedText.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
            inputTxt.value=processedText; 
            saveField();
        } 
          
        function firstCapitalize() {
            var txt = inputTxt.value;
            processedText = txt.toLowerCase();
            processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1);
            inputTxt.value=processedText; 
            saveField();
        } 


        $("button").click(function(){
            $.post("indexBootstrap.html",
            {
                text: inputTxt.value
            },
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
        });


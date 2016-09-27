function checkPrime(){
		var input_num = parseInt(document.getElementById('prime_check').value);
		var cur_div = 3;
		var is_prime = 0;
		if (input_num > 1){ 

		if (input_num == 2) {document.getElementById("answer").innerHTML ="2 is a Prime number"}; //input_num = 2 case
		if (input_num != 2) {  // for numbers more than 2
			while (cur_div != input_num) { 

				if (input_num%2 == 0) {document.getElementById("answer").innerHTML = input_num + " is not a Prime number"
					cur_div = input_num; 
				is_prime = 1;}
				else{ 
					if (input_num%cur_div== 0) {
						document.getElementById("answer").innerHTML = input_num + " is not a Prime number"
						cur_div = input_num;
						is_prime = 1;

					}	
					else { cur_div = cur_div + 2 ;}

				}
			}
			if (is_prime != 1) {document.getElementById("answer").innerHTML =input_num + " is a Prime number" };

		} 

	}
	else{document.getElementById("answer").innerHTML ="Sorry, the number must be bigger than 1"}	

}	
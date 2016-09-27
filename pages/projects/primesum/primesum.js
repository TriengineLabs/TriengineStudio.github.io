function calcsum(){

	var input_num = parseInt(document.getElementById('text_num').value);
	var cur_num = 2;
	var sum = 0;
	var is_prime = 1;
	var cur_div = 3;
	
	
	if (input_num>1) {

		while (cur_num < input_num) {

			is_prime = 1

			if (cur_num == 2) {is_prime = 1};

			if (cur_num > 2 && cur_div<cur_num) { 

				if (cur_num%2 == 0) {is_prime = 0;
					is_prime = 0;}	
					else{ 
						if (cur_num%cur_div== 0) {
							is_prime = 0;
							is_prime = 0;

						}	
						else { cur_div = cur_div + 2}; 
					}
				}

				if (is_prime == 1) {sum = sum + cur_num; cur_num = cur_num + 1};
				if (is_prime == 0) {cur_num = cur_num + 1};


			}
		}
		

		document.getElementById("answer").innerHTML = "The sum of all prime numbers less than " + input_num + " is " +  sum 
	}

	
function spoilerShowHide_sumregning() {
						var x = document.getElementById("spoiler_SumLommeregner");
						if (x.style.display === "none") {
								x.style.display = "block";
						} else {
								x.style.display = "none";
						}
				}

function sumNumbers() {
						var num1 = (document.getElementById("n1").value);
						var num2 = (document.getElementById("n2").value);
						var num3 = (document.getElementById("n3").value);
						var num4 = (document.getElementById("n4").value);
						var num5 = (document.getElementById("n5").value);
						var num6 = (document.getElementById("n6").value);
						var num7 = (document.getElementById("n7").value);
						var num8 = (document.getElementById("n8").value);
						var num9 = (document.getElementById("n9").value);
						var num10 = (document.getElementById("n10").value);

						document.getElementById("sum_lommeregner_resultat").value=num1+num2 ;

}

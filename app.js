var hora;
var pago ;

	hora=prompt('Ingrese la cantidad de horas' , '');
	pago=prompt('Ingrese el monto del pago por dia' , '');

		var resultado= (parseInt(hora) * parseInt(pago));

		window.alert(resultado);
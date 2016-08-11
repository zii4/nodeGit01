const PI = Math.PI;

exports.area = function (r) {return PI * r * r;}

exports.circumference = function (r) {return 2 * PI * r;}

exports.abs = function (r) {
	if (r < 0) {
		return -r;
	} else {
		return r;		
	}
}
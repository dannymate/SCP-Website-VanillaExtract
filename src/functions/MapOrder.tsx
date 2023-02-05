export function mapOrder(array: any[], order: any[]) {
	array.sort(function (a, b) {
		var A = a["node"]["wordpress_id"],
			B = b["node"]["wordpress_id"];

		if (order.indexOf(A) > order.indexOf(B)) {
			return 1;
		} else {
			return -1;
		}
	});

	return array;
}

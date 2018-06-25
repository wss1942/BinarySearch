// a开平方，求a的平方根
function niudun(a) {
	// n_ = (n+a/n)/2;
	var n = 1, count = 1;
	var n_ = (n + a / n) / 2;
	while (Math.abs(n - n_) > 1e-6) {
		n = n_;
		n_ = (n + a / n) / 2;
		count++;
		console.log(n, n_);
	}
	console.log('循环了',count)
	return n_;
}
import 'isomorphic-fetch';
export class Store {
	static getData() {
		return fetch('http://private-5d708-interviewfront.apiary-mock.com/transactions');
	}
}

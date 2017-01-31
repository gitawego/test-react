import 'isomorphic-fetch';
export class Store {
	static url = 'http://private-5d708-interviewfront.apiary-mock.com/transactions';
	static getData() {
		return fetch(url);
	}
}

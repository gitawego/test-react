import 'isomorphic-fetch';
export class Store {
	static getData() {
		return fetch('http://private-5d708-interviewfront.apiary-mock.com/transactions')
			.then((resp)=>{
				if (resp.status >= 400) {
            throw new Error("Bad response from server");
        }
				return resp.json();
			});
	}
}

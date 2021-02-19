const Arw = require('arweave')

const options = {
    host: 'arweave.net',// Hostname or IP address for a Arweave host
    port: 443,          // Port
    protocol: 'https',  // Network protocol http or https
    timeout: 20000,     // Network request timeouts in milliseconds
    logging: false,     // Enable network request logging
}

const _arweave = Arw.init(options)

class Arweave {
	constructor(args) {
		this.jwk = args.jwk
	}

	async uploadPlain(data) {
		let transaction = await _arweave.createTransaction({
			data: data
		}, this.jwk)
		await _arweave.transactions.sign(transaction, this.jwk)
		return transaction
	
	}
	
	async uploadHTML(data) {
		let transaction = await _arweave.createTransaction({
			data: data
		}, this.jwk)
		transaction.addTag('Content-Type', 'text/html')
		await _arweave.transactions.sign(transaction, this.jwk)
		return transaction
		
	}

	async uploadBuffer(data, encoding) { 
		let transaction = await _arweave.createTransaction({
			data: Buffer.from(data, encoding)
		}, this.jwk)
		await _arweave.transactions.sign(transaction, this.jwk)
		return transaction
	}

	async postTransaction(transaction) {
		const response = await _arweave.transactions.post(transaction)
		return response.status
	}
}

module.exports = Arweave
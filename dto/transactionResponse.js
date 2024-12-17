class TransactionResponse{
    constructor(transaction){
        this.date = transaction.date;
        this.type = transaction.type;
        this.fromto = transaction.fromto;
        this.description = transaction.description;
        this.amount = transaction.amount;
    }
}

module.exports = {TransactionResponse};
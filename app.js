angular.module("zonMonyApp", ["ngMaterial", 'ngMessages'])
    .controller('expenseCtrl', expenseCtrl)
    .config(function ($mdIconProvider) {
        $mdIconProvider.fontSet('md', 'material-icons');
    });
;

function expenseCtrl() {

    var expense = [

        /* 1 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a515f"),
            "name": "Housing",
            "tab": "Mortgage",
            "url": "http://wellsfargo.com",
            "dueDate": 30,
            "payByCreditCard": false,
            "note": "Garison Way #58, Fixed 5.5%, 30 yrs",
            "updatedDTTM": ISODate("2016-09-12T08:31:12.089-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.089-04:00"),
            "payment": [
                {
                    "note": "IBE5LVRM8F",
                    "paymentDTTM": ISODate("2015-01-01T01:00:00.000-04:00"),
                    "month": 1,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a5160"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.089-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.089-04:00"),
                    "amount": 1600.48
                },
                {
                    "note": "IBECF9CLZ3",
                    "paymentDTTM": ISODate("2015-02-01T01:00:00.000-04:00"),
                    "month": 2,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a5167"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.099-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.099-04:00"),
                    "amount": 1600.39
                },
                {
                    "note": null,
                    "paymentDTTM": ISODate("2015-08-01T00:00:00.000-04:00"),
                    "month": 8,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a516e"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.104-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.104-04:00"),
                    "amount": 1600.39
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2010-04-21T00:00:00.000-04:00"),
                    "end": null
                }
            ],
            "__v": 0
        },

        /* 2 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a5179"),
            "name": "Utility",
            "tab": "GRU",
            "url": "http://gru.com",
            "dueDate": 15,
            "payByCreditCard": false,
            "note": "Electricity",
            "updatedDTTM": ISODate("2016-09-12T08:31:12.111-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.111-04:00"),
            "payment": [
                {
                    "note": "6992577",
                    "paymentDTTM": ISODate("2015-01-01T01:00:00.000-04:00"),
                    "month": 1,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a517a"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.111-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.111-04:00"),
                    "amount": 188.6
                },
                {
                    "note": "2569569, Account closed. #2000-1529-8079  New account #2000-3624-3312",
                    "paymentDTTM": ISODate("2010-04-01T00:00:00.000-04:00"),
                    "month": 4,
                    "year": 2010,
                    "_id": ObjectId("57d6a010ba08c4307c4a51a1"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.134-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.134-04:00"),
                    "amount": 235.26
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2009-09-23T00:00:00.000-04:00"),
                    "end": null
                }
            ],
            "__v": 0
        },

        /* 3 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a518c"),
            "name": "Check",
            "tab": "Check",
            "url": null,
            "dueDate": 30,
            "payByCreditCard": false,
            "note": null,
            "updatedDTTM": ISODate("2016-09-12T08:31:12.123-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.123-04:00"),
            "payment": [
                {
                    "note": "Sunny''s Tuition Fee",
                    "paymentDTTM": ISODate("2013-10-01T00:00:00.000-04:00"),
                    "month": 10,
                    "year": 2013,
                    "_id": ObjectId("57d6a010ba08c4307c4a518d"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.123-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.123-04:00"),
                    "amount": 380
                },
                {
                    "note": "#5074, $50 has not withdrawed by Sanghun",
                    "paymentDTTM": ISODate("2015-06-01T00:00:00.000-04:00"),
                    "month": 6,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a519a"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.131-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.131-04:00"),
                    "amount": 0
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2011-01-20T01:00:00.000-04:00"),
                    "end": null
                }
            ],
            "__v": 0
        },

        /* 4 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a517f"),
            "name": "Utility",
            "tab": "Cox",
            "url": "http://cox.com",
            "dueDate": 24,
            "payByCreditCard": true,
            "note": "Internet",
            "updatedDTTM": ISODate("2016-09-12T08:31:12.114-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.114-04:00"),
            "payment": [
                {
                    "note": null,
                    "paymentDTTM": ISODate("2015-01-01T01:00:00.000-04:00"),
                    "month": 1,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a5180"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.114-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.114-04:00"),
                    "amount": 62.99
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2010-04-20T00:00:00.000-04:00"),
                    "end": null
                }
            ],
            "__v": 0
        },

        /* 5 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a5173"),
            "name": "Housing",
            "tab": "HOA",
            "url": null,
            "dueDate": 30,
            "payByCreditCard": false,
            "note": "Garison Way",
            "updatedDTTM": ISODate("2016-09-12T08:31:12.106-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.106-04:00"),
            "payment": [
                {
                    "note": null,
                    "paymentDTTM": ISODate("2015-08-01T00:00:00.000-04:00"),
                    "month": 8,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a5174"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.106-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.106-04:00"),
                    "amount": 81
                },
                {
                    "note": "$81 at 1/10 & 1/24",
                    "paymentDTTM": ISODate("2016-01-01T01:00:00.000-04:00"),
                    "month": 1,
                    "year": 2016,
                    "_id": ObjectId("57d6a010ba08c4307c4a5187"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.118-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.118-04:00"),
                    "amount": 162
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2010-07-28T00:00:00.000-04:00"),
                    "end": null
                }
            ],
            "__v": 0
        },

        /* 6 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a5192"),
            "name": "Utility",
            "tab": "Verizon",
            "url": "http://verizonwireless.com",
            "dueDate": 30,
            "payByCreditCard": true,
            "note": "Mobile phone since 2003",
            "updatedDTTM": ISODate("2016-09-12T08:31:12.126-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.126-04:00"),
            "payment": [
                {
                    "note": "Balance $144.30 , 43531092208  PN:25794",
                    "paymentDTTM": ISODate("2015-01-01T01:00:00.000-04:00"),
                    "month": 1,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a5193"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.126-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.126-04:00"),
                    "amount": 0
                },
                {
                    "note": "paid on 10/16",
                    "paymentDTTM": ISODate("2015-10-01T00:00:00.000-04:00"),
                    "month": 10,
                    "year": 2015,
                    "_id": ObjectId("57d6a010ba08c4307c4a51ae"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.142-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.141-04:00"),
                    "amount": 226.5
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2009-09-18T00:00:00.000-04:00"),
                    "end": null
                }
            ],
            "__v": 0
        },

        /* 7 */
        {
            "_id": ObjectId("57d6a010ba08c4307c4a51a6"),
            "name": "CreditCard",
            "tab": "(BOA)Power Reward",
            "url": "http://bankofamerica.com",
            "dueDate": 30,
            "payByCreditCard": false,
            "note": "Bank Of America Card",
            "updatedDTTM": ISODate("2016-09-12T08:31:12.137-04:00"),
            "createdDTTM": ISODate("2016-09-12T08:31:12.137-04:00"),
            "payment": [
                {
                    "note": "BVX1P-KGNNS, Bought Sofa",
                    "paymentDTTM": ISODate("2010-12-01T01:00:00.000-04:00"),
                    "month": 12,
                    "year": 2010,
                    "_id": ObjectId("57d6a010ba08c4307c4a51a7"),
                    "updatedDTTM": ISODate("2016-09-12T08:31:12.137-04:00"),
                    "createdDTTM": ISODate("2016-09-12T08:31:12.137-04:00"),
                    "amount": 4501
                }
            ],
            "statusDTTM": [
                {
                    "start": ISODate("2009-11-28T01:00:00.000-04:00"),
                    "end": ISODate("2016-05-28T00:00:00.000-04:00")
                }
            ],
            "__v": 0
        }];


    console.log('well...');


    //Start coding from here !!!!

    var vm = this; 

    vm.GrandTotal = 400706.58 ;
    vm.currentMonthTotal = 3925.18; 

    vm.numberOfPayments = 18; 
    vm.numberOfPaid = 11; 

    












}; //end of the expenseCtrl fn.





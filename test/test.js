var assert = require('assert');
var ref = require('../code');
var ref = require('../purchaseOrder-2_3-F22')
var sinon = require('sinon');

describe('purchaseOrder-2_3-F22', function() {
    describe('Equivalence Classes Tests', function() {
        // Equivalence Test 1: AgeFactor tests
        //return 0 if age <15
        describe('EC1', function(){
            it('should return 0 when a = 10', function(){
                assert.equal(ref.getAgeFactor({
                    'age': 10,
                    'balance': -5,
                    'creditScore': 0
                }), 0);
            })
        });
        //return 10 if 15<= age <25
        describe('EC2', function(){
            it('should return 10 when a = 20', function(){
                assert.equal(ref.getAgeFactor({
                    'age': 20,
                    'balance': -5,
                    'creditScore': 0
                }), 10);
            })
    });
    //return 15 if 25<= age <35    
    describe('EC3', function(){
        it('should return 15 when a = 30', function(){
            assert.equal(ref.getAgeFactor({
                'age': 30,
                'balance': -5,
                'creditScore': 0
            }), 15);
        })
});
//return 50 if 35<= age <55
describe('EC4', function(){
    it('should return 50 when a = 40', function(){
        assert.equal(ref.getAgeFactor({
            'age': 40,
            'balance': -5,
            'creditScore': 0
        }), 50);
    })
});
//return 40 if 55<= age <65
describe('EC5', function(){
    it('should return 40 when a = 60', function(){
        assert.equal(ref.getAgeFactor({
            'age': 60,
            'balance': -5,
            'creditScore': 0
        }), 40);
    })
});
//return 25 if 65<= age <95
describe('EC6', function(){
    it('should return 25 when a = 80', function(){
        assert.equal(ref.getAgeFactor({
            'age': 80,
            'balance': -5,
            'creditScore': 0
        }), 25);
    })
});
//return 0 if age >95
describe('EC7', function(){
    it('should return 0 when a = 100', function(){
        assert.equal(ref.getAgeFactor({
            'age': 100,
            'balance': -5,
            'creditScore': 0
        }), 0);
    })
});
        // Equivalence Test 2: balanceFactor tests
        //return 0 if balance <=0
        describe('EC8', function(){
          it('should return 0 when b = -5', function(){
              assert.equal(ref.getBalanceFactor({
                  'age': 10,
                  'balance': -5,
                  'creditScore': 0
              }), 0);
          })
      });
        //return 5 if 0 < balance < 100
        describe('EC9', function(){
            it('should return 5 when b = 50', function(){
                assert.equal(ref.getBalanceFactor({
                    'age': 10,
                    'balance': 50,
                    'creditScore': 0
                }), 5);
            })
        });
        //return 15 if 100 <= balance < 500
        describe('EC10', function(){
            it('should return 15 when b = 200', function(){
                assert.equal(ref.getBalanceFactor({
                    'age': 10,
                    'balance': 200,
                    'creditScore': 0
                }), 15);
            })
        });
        //return 30 if 500 <= balance < 1000
        describe('EC11', function(){
            it('should return 30 when b = 750', function(){
                assert.equal(ref.getBalanceFactor({
                    'age': 10,
                    'balance': 750,
                    'creditScore': 0
                }), 30);
            })
        });
        //return 50 if 1000 <= balance < 2000
        describe('EC12', function(){
            it('should return 50 when b = 1500', function(){
                assert.equal(ref.getBalanceFactor({
                    'age': 10,
                    'balance': 1500,
                    'creditScore': 0
                }), 50);
            })
        });
        //return 100 if 2000 <= balance < 5000
        describe('EC13', function(){
            it('should return 100 when b = 4000', function(){
                assert.equal(ref.getBalanceFactor({
                    'age': 10,
                    'balance': 4000,
                    'creditScore': 0
                }), 100);
            })
        });
        //return 0 if balance >= 5000
        describe('EC14', function(){
            it('should return 0 when b = 5100', function(){
                assert.equal(ref.getBalanceFactor({
                    'age': 10,
                    'balance': 5100,
                    'creditScore': 0
                }), 0);
            })
        });
        // Equivalence Test 3: AccountStatus tests
        //return not-eligible when age < 15 and balance <= 0 [account status = 0]
        describe('EC15', function(){
            it('should return "not-eligible" when a = 0, and b = 0', function(){
                assert.equal(ref.accountStatus({
                    'age': 10,
                    'balance': 0,
                    'creditScore': 0
                }), "not-eligible");
            });
        });
        //return very-low when 15 =< age < 25 and 0 < balance < 100 [account status = 50]
        describe('EC16', function(){
            it('should return "very-low" when a = 10, and b = 5', function(){
                assert.equal(ref.accountStatus({
                    'age': 20,
                    'balance': 50,
                    'creditScore': 0
                }), "very-low");
            });
        });
        //return low when 25 =< age < 35 and 100 <= balance < 500 [account status = 225]
        describe('EC17', function(){
            it('should return "low" when a = 15, and b = 15', function(){
                assert.equal(ref.accountStatus({
                    'age': 30,
                    'balance': 250,
                    'creditScore': 0
                }), "low");
            });
        });
        //return medium when 35 =< age < 45 and 500 <= balance < 1000 [account status = 1500]
        describe('EC18', function(){
            it('should return "excellent" when a = 50, and b = 30', function(){
                assert.equal(ref.accountStatus({
                    'age': 40,
                    'balance': 750,
                    'creditScore': 0
                }), "excellent");
            });
        });
        //return high when 45 =< age < 55 and 1000 <= balance < 2000 [account status = 2000]
        describe('EC19', function(){
            it('should return "excellent" when a = 40, and b = 50', function(){
                assert.equal(ref.accountStatus({
                    'age': 60,
                    'balance': 1500,
                    'creditScore': 0
                }), "excellent");
            });
        });
        //return very-high when 55 =< age < 65 and 2000 <= balance < 5000 [account status = 2500]
        describe('EC20', function(){
            it('should return "excellent" when a = 25, and b = 100', function(){
                assert.equal(ref.accountStatus({
                    'age': 80,
                    'balance': 4000,
                    'creditScore': 0
                }), "excellent");
            });
        });
        //return not-eligible when age >= 65 and balance >= 5000 [account status = 0]
        describe('EC21', function(){
            it('should return "not-eligible" when a = 0, and b = 0', function(){
                assert.equal(ref.accountStatus({
                    'age': 100,
                    'balance': 5100,
                    'creditScore': 0
                }), "not-eligible");
            });
        });

        // Equivalence Test 4: creditScoreFactor tests
        //return not-allowed when 0 > creditScore > 100 
        describe('EC22', function(){
            it('should return "not-allowed" when c = -1', function(){
                assert.equal(ref.creditStatus({
                    'creditScore': -1,
                    //'creditCheckMode': 80,
                }), "not-allowed");
            })
        });
        //return low when 0 <= creditScore < 80 when threshold t = 80 (default)
        describe('EC23', function(){
            it('should return "low" when c = 60 and t = 80', function(){
                assert.equal(ref.creditStatus({
                    'creditScore': 60
                }, "default"), "low");
            })
        });
        //return high when 80 <= creditScore < 100 when threshold t = 80 (default)
        describe('EC24', function(){
            it('should return "high" when c = 90 and t = 80', function(){
                assert.equal(ref.creditStatus({
                    'creditScore': 90
                }, "default"), "high");
            })
        });
        //return low when 0<= creditScore < 50 when threshold t = 50 (restricted)
        describe('EC25', function(){
            it('should return "low" when c = 30 and t = 50', function(){
                assert.equal(ref.creditStatus({
                'creditScore': 30
                }, "restricted"
                ), "low");
            })
        });
        //return high when 50 <= creditScore < 100 when threshold t = 50 (restricted)
        describe('EC26', function(){
            it('should return "high" when c = 70 and t = 50', function(){
                assert.equal(ref.creditStatus({
                    'creditScore': 70
                }, "restricted"), "high");
            })
        });
         // Equivalence Test 5: orderStatus tests
        //return rejected when account status = not-eligible, credit status = not-allowed, and productStatus = soldout
        describe('EC27', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "rejected" when a = 0, c = -1, p = 0', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("not-eligible");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("not-allowed");
                sinon.stub(ref, 'productStatus').onCall(0).returns("soldout");
                assert.equal(ref.orderHandling({}), "rejected");
            })
        });
        //return pending when accountStatus = "very-low" and creditStatus = "high" and productStatus = "available-to-all"
        describe('EC28', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "pending" when a = 50, c = 90, p = 400', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("very-low");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("high");
                sinon.stub(ref, 'productStatus').onCall(0).returns("available-to-all");
                assert.equal(ref.orderHandling({}), "pending");
            })
        });
        //return accepted when accountStatus = "not-eligible" and creditStatus = "low" and productStatus = "available-to-all"
        describe('EC29', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "accepted" when a = 50, c = 90, p = 400', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("excellent");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("low");
                sinon.stub(ref, 'productStatus').onCall(0).returns("available-to-all");
                assert.equal(ref.orderHandling({}), "accepted");
            })
        });
        //return accepted when accountStatus = "high" and creditStatus = "high" and productStatus = "limited"
        describe('EC30', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "accepted" when a = 750, c = 70, p = 150', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("high");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("high");
                sinon.stub(ref, 'productStatus').onCall(0).returns("limited");
                assert.equal(ref.orderHandling({}), "accepted");
            })
        });        
        //return pending when accountStatus = "low" and creditStatus = "high" and productStatus = "available-to-all"
        describe('EC31', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "pending" when a = 225, c = 60, p = 300', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("low");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("high");
                sinon.stub(ref, 'productStatus').onCall(0).returns("available-to-all");
                assert.equal(ref.orderHandling({}), "pending");
            })
        }); 
        //return accepted when accountStatus = "low" and creditStatus = "high" and productStatus = "available-to-all"
        describe('EC32', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "accepted" when a = 300, c = 90, p = 400', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("medium");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("high");
                sinon.stub(ref, 'productStatus').onCall(0).returns("available-to-all");
                assert.equal(ref.orderHandling({}), "accepted");
            })
        });      
        //return pending when accountStatus = "excellent" and creditStatus = "not-allowed" and productStatus = "available-to-all"
        describe('EC33', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "pending" when a = 2500, c = 110, p = 200', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("excellent");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("not-allowed");
                sinon.stub(ref, 'productStatus').onCall(0).returns("limited");
                assert.equal(ref.orderHandling({}), "pending");
            })
        });  
        //return rejected when accountStatus = "not-eligible" and creditStatus = "low" and productStatus = "available-to-all"
        describe('EC34', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "rejected" when a = 0, c = 40, p = 350', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("not-eligible");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("low");
                sinon.stub(ref, 'productStatus').onCall(0).returns("available-to-all");
                assert.equal(ref.orderHandling({}), "rejected");
            })
        }); 
        //return pending when accountStatus = "not-eligible" and creditStatus = "low" and productStatus = "soldout"
        describe('EC35', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "pending" when a = 750, c = 90, p = 350', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("high");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("high");
                sinon.stub(ref, 'productStatus').onCall(0).returns("soldout");
                assert.equal(ref.orderHandling({}), "pending");
            })
        });                             
        //return accepted when accountStatus = "excellent" and creditStatus = "low" and productStatus = "limited"
        describe('EC36', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "accepted" when a = 2500, c = 40, p = 200', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("excellent");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("low");
                sinon.stub(ref, 'productStatus').onCall(0).returns("limited");
                assert.equal(ref.orderHandling({}), "accepted");
            })
        });  
        //return pending when accountStatus = "high" and creditStatus = "low" and productStatus = "limited"
        describe('EC37', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "pending" when a = 750, c = 60, p = 200', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("high");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("low");
                sinon.stub(ref, 'productStatus').onCall(0).returns("limited");
                assert.equal(ref.orderHandling({}), "pending");
            })
        });  
        //return pending when accountStatus = "high" and creditStatus = "low" and productStatus = "limited"
        describe('EC38', function(){
            afterEach(function(){
                    ref.accountStatus.restore();
                    ref.creditStatus.restore();
                    ref.productStatus.restore();
                })
            it('should return "pending" when a = 225, c = 60, p = 100', function(){
                sinon.stub(ref, 'accountStatus').onCall(0).returns("low");
                sinon.stub(ref, 'creditStatus').onCall(0).returns("high");
                sinon.stub(ref, 'productStatus').onCall(0).returns("limited");
                assert.equal(ref.orderHandling({}), "pending");
            })
        }); 
            //return rejected when accountStatus = "very-low" and creditStatus = "low" and productStatus = "available-to-all"
            describe('EC39', function(){
                afterEach(function(){
                        ref.accountStatus.restore();
                        ref.creditStatus.restore();
                        ref.productStatus.restore();
                    })
                it('should return "rejected" when a = 50, c = 40, p = 400', function(){
                    sinon.stub(ref, 'accountStatus').onCall(0).returns("very-low");
                    sinon.stub(ref, 'creditStatus').onCall(0).returns("low");
                    sinon.stub(ref, 'productStatus').onCall(0).returns("available-to-all");
                    assert.equal(ref.orderHandling({}), "rejected");
                })
            });                          
    });
});

//TUTORIAL CODE EXAMPLE:
// describe('code.js', function(){
//     describe('addOne Behavioural Tests', function(){
//         it('should return 2 when given 1', function(){
//             assert.equal(ref.addOne(1), 2);
//         } )
//     });
//     describe('addTwo Behavioural Tests', function(){
//         it('should return 3 when given 1', function(){
//             assert.equal(ref.addTwo(1), 2);
//         } )
//     });
//     describe('addSix Behavioural Tests', function(){
//         afterEach(function(){
//             ref.addOne.restore();
//             ref.addTwo.restore();
//         })
//         it('should return 7 when given 1', function(){
//             sinon.stub(ref, 'addOne').onCall(0).returns(2);
//             sinon.stub(ref, 'addTwo').onCall(0).returns(4);
//             assert.equal(ref.addSix(1), 7);
//         } )
//     });
// });

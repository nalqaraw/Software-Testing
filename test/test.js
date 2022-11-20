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
            it('should return "medium" when a = 50, and b = 30', function(){
                assert.equal(ref.accountStatus({
                    'age': 40,
                    'balance': 750,
                    'creditScore': 0
                }), "medium");
            });
        });
        //return high when 45 =< age < 55 and 1000 <= balance < 2000 [account status = 2000]
        describe('EC19', function(){
            it('should return "high" when a = 40, and b = 50', function(){
                assert.equal(ref.accountStatus({
                    'age': 60,
                    'balance': 1500,
                    'creditScore': 0
                }), "high");
            });
        });
        //return very-high when 55 =< age < 65 and 2000 <= balance < 5000 [account status = 2500]
        describe('EC20', function(){
            it('should return "very-high" when a = 25, and b = 100', function(){
                assert.equal(ref.accountStatus({
                    'age': 80,
                    'balance': 4000,
                    'creditScore': 0
                }), "very-high");
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
                    'age': 10,
                    'balance': -5,
                    'creditScore': -1
                }), "not-allowed");
            })
        });
        //return low when 0 <= creditScore < 80 when threshold t = 80 (default)
        describe('EC23', function(){
            it('should return "low" when c = 60 and t = 80', function(){
                assert.equal(ref.creditStatus({
                    'age': 10,
                    'balance': -5,
                    'creditScore': 60
                }), "low");
            })
        });
        //return high when 80 <= creditScore < 100 when threshold t = 80 (default)
        describe('EC24', function(){
            it('should return "high" when c = 90 and t = 80', function(){
                assert.equal(ref.creditStatus({
                    'age': 10,
                    'balance': -5,
                    'creditScore': 90
                }), "high");
            })
        });
        //return low when 0<= creditScore < 50 when threshold t = 50 (restricted)
        describe('EC25', function(){
            it('should return "low" when c = 30 and t = 50', function(){
                assert.equal(ref.creditStatus({
                    'age': 10,
                    'balance': -5,
                    'creditScore': 30
                }), "low");
            })
        });
        //return high when 50 <= creditScore < 100 when threshold t = 50 (restricted)
        describe('EC26', function(){
            it('should return "high" when c = 70 and t = 50', function(){
                assert.equal(ref.creditStatus({
                    'age': 10,
                    'balance': -5,
                    'creditScore': 70
                }), "high");
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

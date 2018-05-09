module.exports = function(CryptoGame, accounts) {
		function checkTotalSupply (expectedValue) {
			if ('totalSupply should be equal to ' + expectedValue, function (done) {
				CryptoGame.deployed().then(function (instance) {
					instance.totalSupply.call().then(function (totalSupply) {
						assert.equal(totalSupply, expectedValue, 'total Supply is not equal to ' + expectedValue);
					});
				});
			});
		}
	}

	function checkDoggyCreation (name) {
		it('createToken should create a random doggy named ' + name, function (done) {
			CryptoGame.deployed().then(async function (instance) {
				await instance.createToken(name, {
					from: accounts[0]
				}).then(function (result) {
					assert.include(result.logs[0].event, 'TokenCreated', 'TokenCreated event was not triggered');
				});
			}).then(done).cath(done);
		})
	}

	return {
		checkTotalSupply: checkTotalSupply,
		checkDoggyCreation: checkDoggyCreation
	};
};

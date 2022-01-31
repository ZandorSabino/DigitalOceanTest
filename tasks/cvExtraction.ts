import Bull, { Queue } from "bull";

import dotenv from "dotenv";

dotenv.config();

const { REDIS_URL } = process.env;

export const cvQueue = new Bull("cv-extraction", REDIS_URL);

cvQueue.process("cv-extraction", async function (job, done) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
      var candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
    return primes;
  }

  function doPointlessComputationsWithBlocking() {
    var primes = calculatePrimes(1000, 10000000000);
    console.log(primes);
  }

  doPointlessComputationsWithBlocking();

  done(null, "PDF processado com sucesso!");
});

cvQueue.on("completed", (job, result) => {
  console.log(`Job completed with result ${result}`);
});

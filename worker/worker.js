let throng = require("throng");
let Queue = require("bull");

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

// Connect to a local redis instance locally, and the Heroku-provided URL in production
let REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

// Spin up multiple processes to handle jobs to take advantage of more CPU cores
// See: https://devcenter.heroku.com/articles/node-concurrency for more info
let workers = process.env.WEB_CONCURRENCY || 2;

// The maximum number of jobs each worker should process at once. This will need
// to be tuned for your application. If each job is mostly waiting on network
// responses it can be much higher. If each job is CPU-intensive, it might need
// to be much lower.
let maxJobsPerWorker = 50;

function start(id) {
  // Periodicidade
  const cronQueue = new Queue("cron-queue", REDIS_URL);
  cronQueue.process("cron", async function (job, done) {
    done(null, "CRON");
  });
  cronQueue.add("cron", { repeat: { cron: "* * * * *" } });
  cronQueue.on("completed", (job, result) => {
    console.log(`Worker ${id}: Job completed with result ${result}`);
  });

  // LinkedIn
  const linkedinQueue = new Queue("linkedin-profile", REDIS_URL);
  linkedinQueue.process("linkedin", async function (job, done) {
    calculatePrimes(450, 10000000000);
    done(null, "Importado perfil do LinkedIn com sucesso");
  });
  linkedinQueue.on("completed", (job, result) => {
    console.log(`Worker ${id}: Job completed with result ${result}`);
  });

  // CV
  const cvQueue = new Queue("cv-extraction", REDIS_URL);
  cvQueue.process("cv-extraction", async function (job, done) {
    calculatePrimes(1000, 10000000000);
    done(null, "PDF processado com sucesso!");
  });

  cvQueue.on("completed", (job, result) => {
    console.log(`Worker ${id}: Job completed with result ${result}`);
  });

  console.log("Started worker", id);
}

// Initialize the clustered worker process
// See: https://devcenter.heroku.com/articles/node-concurrency for more info
throng({ workers, start });
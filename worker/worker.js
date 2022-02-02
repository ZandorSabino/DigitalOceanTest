const redis = require('redis');
const kue = require('kue');

function linkedInProfile(job, done) {
    console.log("Perfil do LInkedin Extraido com sucesso")
    done(null, "L")
}

function cvExtract(job, done) {
  console.log("Perfil do CV Extraido com sucesso")
  done(null, "CV")
}

const linkedinQueue = kue.createQueue({
    Prefix: 'linkedin', 
    redis: {createClientFactory: () => redis.createClient( process.env.REDIS_URL, 
        {tls: true}),
    },
});

linkedinQueue.process("linkedin", linkedInProfile)
linkedinQueue.on('complete', function(result){
  console.log('Job LinkedIn completed with data ', result);
});

const cvQueue = kue.createQueue({
  Prefix: 'cv', 
  redis: {createClientFactory: () => redis.createClient( process.env.REDIS_URL, 
      {tls: true}),
  },
});

cvQueue.process("cv", cvExtract)
cvQueue.on('complete', function(result){
  console.log('Job cv completed with data ', result);
});
/** REQUEST RATE LIMITER */
const limiterOptions = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  message: 'too many requests sent by this ip, please try again in an hour !',
};

module.exports = limiterOptions;

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27fc770f2d4d4174916913065f77e4be'),
  },
});

var app = require('./app');
var model = require('./model');

model.OAuthUsersModel.create({
    email: 'alex@example.com',
    hashed_password: '$2a$10$aZB36UooZpL.fAgbQVN/j.pfZVVvkHxEnj7vfkVSqwBOBZbB/IAAK'
}, function () {
model.OAuthUsersModel.create({
        firstname: 'hua',
        lastname:  'zhang',
        password: 'password',
        username: 'huazhang'
        // clientId: 'papers3',
        // clientSecret: '123',
        // redirectUri: '/oauth/redirect'
    }, function () {
        process.exit();
    });
});
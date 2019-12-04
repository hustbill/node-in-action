# NodeJS OAuth-server with Redis
This is a NodeJS OAuth2 demo using Redis


## Redis 
```bash
$ docker run -p 6379:6379 --name redis -d poc-dtr.visa.com/huazhang/redis:4.0
```  

## Redis-Commander
Redis management tool written in node.js.  

```bash
$ npm install redis-commander
$ redis-commander --redis-port 6379 --redis-host localhost -p 8087
```
## Init Redis data
```bash
$ node init-redis-client.js
```

## Request by Postman
```code
POST /oauth/token HTTP/1.1
Host: localhost:3000
Authorization: Basic Y2xpZW50OnNlY3JldA==
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 4cefda53-0a3f-49ec-ae72-6e4a57acadb0,88612be0-6d47-4657-bed2-43f921b72d02
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 55
Connection: keep-alive
cache-control: no-cache

username=username&password=password&grant_type=password
```

## Reference
[Node.js
使用Redis實現的OAuth 2 - grant_type：password](https://riptutorial.com/zh-TW/node-js/example/29565/oauth-2-0#-)  

#API URL
#Email
#Password
#Http Post Request

#JSON Dump['data'] Map<String, String>
# apiToken = json.dump(response['data']['api_token'])

##Conversational AI

#var message = message;
# final response = http.post => json.encode {'message': message} headers: {'Authorization': apiToken}
#console.log(response)

import requests

baseApi = 'https://dev-api.conzunow.com'
apiUrl = '{baseApi}/api/auth/signin'.format(baseApi=baseApi)
apiMessage = '{baseApi}/api/user/ai-conversation/send-message'.format(baseApi=baseApi)
email = 'haziq6@gmail.com'
password = 'test123!'
type = 'c'

pload = {'email' : email, 'password': password, 'type': type}
response = requests.post(url=apiUrl, data=pload)
# print(response.text)

rJson = response.json()
authToken = rJson['data']['api_token']
print(authToken)

headers = {'Authorization' : authToken}
pload = {'message' : 'Hi There'}
response = requests.post(url=apiMessage,headers=headers,data=pload)
print(response.text)


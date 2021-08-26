
import os, sys
import json

methods = ['GET','POST','DELETE','PUT']

print("*"*50+'\n\t'+'WELOCME TO REST CLIENT CLI'+'\n'+'*'*50)
url = input("Enter Url: ")
method = methods[int(input("Method [1]GET [2]POST [3]DELETE [4]PUT :"))-1]

post_data = {}
if (method=="POST"):
	key, val = "pre", "pre"
	while len(key) > 0 and len(val) > 0 :
		try:
			key, val = input("key:value -> ").split(":")
			post_data[key] = val
		except:
			break

obj = {"url": url, "method": method, "post_data":post_data}

json_obj = json.dumps(obj, indent=2)

print("Writing obj ...")
print(json_obj)

file = open("config.txt", "w")
file.write(json_obj)
file.close()

try:
	os.system("node rest_client")
except:
	print("Error ! Can't Use this protocol")



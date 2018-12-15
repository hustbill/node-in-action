import json
from pprint import pprint

with open('metric-1-list.json') as data_file:    
    data = json.load(data_file)
pprint(data["rows"]["panels"]["targets"][0])
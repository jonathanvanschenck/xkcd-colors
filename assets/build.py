import json

with open("xkcd_colors.txt") as f:
    list = [l.strip() for l in f]

list = list[1:-1]

obj = []
for l in list:
    new = {}
    new['name'],new['hex'] = l.split("\t")
    new['clean_name'] = new['name'].replace(" ","").replace("/","").replace("'","")
    new['rgb'] = [int(new['hex'][1+2*i:3+2*i],16) for i in range(3)]
    new['rgbf'] = [round(val / 255.0,4) for val in new['rgb']]
    obj.append(new)


with open("colors.json","w+") as f:
    json.dump(obj,f,indent=4)

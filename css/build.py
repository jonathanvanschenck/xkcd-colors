import json

with open("xkcd-colors.css","w+") as f:
    f.write(":root {\n")
    with open("../assets/colors.json") as ff:
        obj = json.load(ff)
    for dat in obj:
        f.write("\t--xkcd_{clean_name}: {hex};\n".format(**dat))
    f.write("}")

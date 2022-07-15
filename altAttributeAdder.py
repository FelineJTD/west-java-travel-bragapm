import os
rootdir = './pages/'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
      with open(os.path.join(subdir, file), "r") as f:
        data = f.read()
        f.close()

      data = data.split("\n")
      for i in range (len(data)):
        if ("<img" in data[i]) and ("alt" not in data[i]):
          data[i] = data[i].replace("<img ", "<img alt='' ")

      with open(os.path.join(subdir, file), "w") as f:
        f.write("\n".join(data))
        f.close()
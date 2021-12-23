def parseip(i):
    a = []
    if i == '':
        return 0
    else:
        b = i.split('.')
        if len(b) != 4:
            return 0
        else:
            for x in b:
                a.append(x)
    return a


print(parseip('127.0.0.1'))

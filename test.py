def  is_prime2(a):
    b = range(2, a)
    c = 0
    for i in b:
        if a%i == 0:
            c += 1
    if c> 0:
        d = False
    else:
        d= True
    return d

a = range(1, 101)
prime_num = []
for i in a:
    c = is_prime2(i)
    if c == True:
        prime_num.append(i)


print(prime_num)
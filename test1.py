t=int(input("반복할 횟수:"))

for i in range(t):
    n=int(input("받을 문장의 수: "))
    for j in range(n):
        x[j], y[j] = input("x:").split()

    print(x)
    print(y)
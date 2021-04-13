option={'1':['coffee',3,500],'2':['juice',2,800]}

coffee=3
juice=2

def compare():
    select=input("""음료를 선택해주세요
    '1':커피(%s개), '2':쥬스(%s개)
    :""" %(option['1'][1],option['2'][1]))
    coin=int(input("동전을 넣어주세요:"))

    if coin==option[select][2]:
        result="%s를 제공합니다."%(option[select][0])
        option[select][1]=option[select][1]-1
        return result
    elif coin>option[select][2] and option['1'][1]> 0 and option['2'][1]>0 :
        result="거스름돈 %d원을 주고 %s를 제공합니다."%((coin-option[select][2]),option[select][0])
        option[select][1]=option[select][1]-1 
        return result
    elif option['1'][1] == 0 and option['2'][1]>0 :
        result="커피가 떨어졌습니다. 주스를 뽑아주세요"
        return result
    elif option['2'][1] == 0 and option['1'][1]>0 :
        result="주스가 떨어졌습니다. 커피를 뽑아주세요"
        return result
    else:
        result="""금액이 부족하니 동전을 다시 돌려주고 %s를 제공하지 않습니다.
        남은 %s의 갯수는 %d개입니다."""%(option[select][0],option[select][0],option[select][1])
        return result  

while True:
    coffee = option['1'][1]
    juice = option['2'][1]
    if option['1'][1]==0 and option['2'][1]==0:
        print("음료가 다 팔렸습니다.")
        break
    elif option['1'][1]>0 and option['2'][1]>0:
        x=compare()
        print(x)
    elif option['1'][1]>0 and option['2'][1]==0:
        y=compare()
        print(y)
    elif option['2'][1]>0 and option['1'][1]==0:
        z=compare()
        print(z)
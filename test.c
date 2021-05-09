#include <stdio.h>
#include <string.h> 



int main()
{
    char name = 0;
    int ko[5], en[5], ma[5];
    int tot, total = 0;
    int score= 5;
    int n;
    int aver = 0;

    printf("통계학과 3학년 2021207018 홍길동입니다. \n");
    printf("***성적표 프로그램입니다. 5명의 성적을 입력하세요.*** \n");

    for (n = 0; n <= score; ++n) {
        printf("이름(영어알파벳 1자):");
        scanf_s("%s", &name);

        printf("국어, 영어, 수학 : ");
        scanf_s("%d,%d,%d", &ko[n], &en[n], &ma[n]);
    }


    {
        printf("\n---------------------------------------------");
        printf("\n이름\t국어\t영어\t수학\t총점\t평균\n학점");
        for (n = 0; n < score; ++n) {
            tot = ko[n] + en[n] + ma[n];
            total += tot;
            aver = total / 3;
            printf(ko);
            printf(en);
            printf(ma);
            printf(tot);
            printf(aver);
            {if (aver >= 90)
                printf("A");

            else if (aver >= 80)
                printf("B");

            else if (aver >= 70)
                printf("C");

            else if (aver >= 60)
                printf("D");

            else
                printf("F");
            }

        }
        printf("---------------------------------------------");

        }

    }
}
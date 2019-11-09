#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int solution(string s) {
	int answer = 1e9,i ,j, k, L, tmp, can, cnt;
	L = s.length();
	for(i=1;i<=L;i++) {
		tmp = 0;
		cnt = 1;
		for(j=i;j+i-1<L;j+=i) {
			can = 1;
			for(k=0;can && k<i;k++)
				can &= s[j-i+k] == s[j+k];
			if(can) cnt++;
			else {
				tmp += i;
				if(cnt > 1){
					while(cnt){
						cnt /= 10;
						tmp++;
					}
				}
				cnt = 1;
			}
		}
		tmp += i + L % i;
		if(cnt > 1) {
			while(cnt){
				cnt /= 10;
				tmp++;
			}
		}
		answer = min(answer, tmp);
	}
	return answer;
}
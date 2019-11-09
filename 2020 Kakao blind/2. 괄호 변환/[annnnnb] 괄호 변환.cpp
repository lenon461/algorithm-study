#include <string>
#include <vector>

using namespace std;
bool isValid(const string& s){
	int i, o = 0, c = 0, valid = 1;
	for(i=0;valid && i < s.length();i++) {
		(s[i] == '(' ? o : c) += 1;
		valid &= o >= c;
	}
	return valid;
}
string f(const string& s){
	if(s.empty()) return "";
	int i, o = 0, c = 0;
	(s[0] == '(' ? o : c) += 1;
	for(i=1; o != c && i < s.length();i++)
		(s[i] == '(' ? o : c) += 1;
	string u = s.substr(0, i);
	string v = i == s.length() ? "" : s.substr(i);
	if(isValid(u))
		return u + f(v);
	else {
		u = u.length() > 2 ? u.substr(1, u.length()-2) : "";
		for(i=0;i<u.length();i++)
			u[i] = u[i] == ')' ? '(' : ')';
		return '(' + f(v) + ')' + f(u);
	}
}
string solution(string p) {
	return f(p);
}
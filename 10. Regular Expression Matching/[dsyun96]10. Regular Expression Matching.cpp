//Runtime: 8 ms, faster than 64.80% of C++ online submissions for Regular Expression Matching.
//Memory Usage: 12.3 MB, less than 15.25% of C++ online submissions for Regular Expression Matching.

class Solution {
public:
    char dp[101][101];
    bool isMatch2(string s, string p) {
        char &ret = dp[s.size()][p.size()];
        if (ret != -1) return ret;
        
        if (s != "" && p == "") return bool(ret = 0);
		if (s == "") {
			if (p.size() & 1) return bool(ret = 0);
			for (int i = 1; i < p.size(); i += 2)
				if (p[i] != '*') return bool(ret = 0);
			return bool(ret = 1);
		}

		if (p.size() == 1) {
			if (p[0] == '.' || s[0] == p[0]) return bool(ret = isMatch2(s.substr(1), p.substr(1)));
			else return bool(ret = 0);
		}
		else {
			if (p[1] == '*') {
				if (p[0] == '.') {
					for (int i = 0; i <= s.size(); ++i)
						if (isMatch2(s.substr(i), p.substr(2))) return bool(ret = 1);
					return bool(ret = 0);
				}
				else {
					if (p[0] != s[0]) return bool(ret = isMatch2(s, p.substr(2)));

					if (isMatch2(s, p.substr(2))) return bool(ret = 1);
					for (int i = 0; i < s.size() && s[i] == p[0]; ++i)
						if (isMatch2(s.substr(i + 1), p.substr(2))) return bool(ret = 1);
					return bool(ret = 0);
				}
			}
			else {
				if (p[0] == '.' || s[0] == p[0]) return bool(ret = isMatch2(s.substr(1), p.substr(1)));
				else return bool(ret = 0);
			}
		}

		return bool(ret = 0);
    }
	bool isMatch(string s, string p) {
        memset(dp, -1, sizeof(dp));
        return isMatch2(s, p);
	}
};